const userModel = require("../../Model/User/User");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const otpModel = require("../../Model/User/otpModel");
const { sendMail, sendMailR } = require("../../EmailSender/send");
class User {
  async registrationUser(req, res) {
    try {
      let { name, phone, email, address, password } = req.body;
      if (!name)
        return res.status(400).json({ error: "Please enter your name" });

      if (!phone)
        return res
          .status(400)
          .json({ error: "Please enter your phone number" });
      let check = await userModel.findOne({ phone: phone });
      if (check)
        return res
          .status(400)
          .json({ error: `${phone} number already register` });

      if (!email)
        return res.status(400).json({ error: "Please enter your email" });
      let check2 = await userModel.findOne({ email: email });
      if (check2)
        return res.status(400).json({ error: `${email} id already register` });

      if (!address)
        return res.status(400).json({ error: "Please enter your email" });
      if (!password)
        return res.status(400).json({ error: "Please enter your password" });
      password = await bcrypt.hash(password, 10);

      let file = req.files[0]?.filename;
      let data = await userModel.create({
        name,
        phone,
        email,
        address,
        password,
        file,
      });
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      sendMailR(
        email,
        "Welcome to Sai Group",
        `Hi, ${name} Thank you for registering`
      );
      return res.status(200).json({ Success: "Successfully Register", data });
    } catch (error) {
      console.log(error);
    }
  }

  async UpdateUser(req, res) {
    try {
      let { id, name, phone, email, address, password, file } = req.body;
      let obj = {};
      if (name) {
        obj["name"] = name;
      }
      if (address) {
        obj["address"] = address;
      }
      if (file) {
        obj["file"] = file;
      }
      if (req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].fieldname == "file") {
            obj["file"] = arr[i].filename;
          }
        }
      }
      if (phone) {
        let check = await userModel.findOne({ phone: phone });
        if (check)
          return res
            .status(400)
            .json({ error: `${phone} number already register` });
        obj["phone"] = phone;
      }
      if (email) {
        let check2 = await userModel.findOne({ email: email });
        if (check2)
          return res
            .status(400)
            .json({ error: `${email} id already register` });
        obj["email"] = email;
      }
      if (password) {
        password = await bcrypt.hash(password, 10);
        obj["password"] = password;
      }
      let data = await userModel.findOneAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async UserLogin(req, res) {
    try {
      let { email, password } = req.body;
      if (!email)
        return res.status(400).json({ error: "Please enter your email" });
      if (!password)
        return res.status(400).json({ error: "Please enter your password" });
      let check2 = await userModel.findOne({ email: email });
      if (!check2)
        return res
          .status(400)
          .json({ error: "Please enter register email id" });
      let compare = await bcrypt
        .compare(password, check2.password)
        .then((res) => {
          return res;
        });

      if (!compare) {
        return res.status(400).send({ error: "Incorrect password" });
      }
      if (check2.isBlock == true)
        return res
          .status(400)
          .json({ error: "Your acount is blocked please contact to admin" });
      let data = await userModel.findOneAndUpdate(
        { _id: check2._id },
        { $set: { Active: "Online" } },
        { new: true }
      );
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  //login with phone
  async signinwithphone(req, res) {
    let { mobile } = req.body;
    // console.log("mobile",mobile);
    try {
      let otp = (Math.floor(Math.random() * 1000000) + 1000000)
        .toString()
        .substring(1);
      let presentMobile = await otpModel.findOneAndUpdate(
        { mobile: mobile },
        { $set: { otp: otp } },
        { new: true }
      );
      let newMobile;
      if (!presentMobile) {
        newMobile = new otpModel({
          mobile,
          otp: otp,
        });
      }
      let save;

      const body = `Dear Customer, ${otp} is the OTP to register as a Customer. OTPs are secret. Please DO NOT disclose it to anyone. Team Mitrakart`;
      const formUrlEncoded = (x) =>
        Object.keys(x).reduce(
          (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
          ""
        );
      let url =
        "https://" +
        process.env.otpKey +
        ":" +
        process.env.token +
        "@api.exotel.in/v1/Accounts/" +
        process.env.sid +
        "/Sms/send.json";

      axios
        .post(
          url,
          formUrlEncoded({
            From: process.env.registeredMobile,
            To: mobile,
            Body: body,
            DltEntityId: "1001332735606324744",
          }),
          {
            withCredentials: true,
            headers: {
              Accept: "application/x-www-form-urlencoded",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(async (data) => {
          console.log(`statusCode: ${data.status}`);
          console.log(data);
          if (!presentMobile) {
            save = await newMobile.save();
            if (save) {
              return res.status(200).json({ success: "otp sent successfully" });
            }
          } else {
            return res.status(200).json({ success: "otp sent successfully" });
          }
        })
        .catch((error) => {
          console.log(error);
          return res.status(400).json({ error: error.message });
        });
    } catch (error) {
      console.log(error);
    }
  }
  // OTP Varification

  async otpVarification(req, res) {
    const { mobile, otp } = req.body;
    try {
      const varify = await otpModel.findOne({ mobile: mobile, otp: otp });
      const isPhonePresent = await userModel.findOne({ phone: mobile });

      if (!varify) {
        return res.status(400).json({ error: "OTP is wrong" });
      }
      if (isPhonePresent.isBlock == true)
        return res
          .status(400)
          .json({ error: "Your account is blocked please contact admin" });
      return res
        .status(200)
        .json({ success: "OTP varified...", details: isPhonePresent });
    } catch (error) {
      console.log(error);
    }
  }

  async makeBlockUnblockUser(req, res) {
    try {
      let { id, isBlock } = req.body;
      let data = await userModel.findOneAndUpdate(
        { _id: id },
        { $set: { isBlock: isBlock } },
        { new: true }
      );

      if (!data) return res.status(400).json({ error: "Data not found" });
      if (data?.isBlock == true)
        return res.status(200).json({ success: "Successfully blocked" });
      return res.status(200).json({ success: "Successfully Un-blocked" });
    } catch (error) {
      console.log(error);
    }
  }
  async makeApproveAndHoldUser(req, res) {
    try {
      let { id, status } = req.body;
      let data = await userModel.findOneAndUpdate(
        { _id: id },
        { $set: { status: status } },
        { new: true }
      );

      if (!data) return res.status(400).json({ error: "Data not found" });
      if (data?.status == "Approved")
        return res.status(200).json({ success: "Successfully Approved" });
      return res.status(200).json({ success: "Successfully Hold" });
    } catch (error) {
      console.log(error);
    }
  }
  async getAllUser(req, res) {
    try {
      let data = await userModel.find().sort({});
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
  async getUserById(req, res) {
    try {
      let id = req.params.id;
      let data = await userModel.findById(id);
      if (!data) return res.status(400).json({ error: "data not found" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
  async sendMailForInquirey(req, res) {
    try {
      let { subject, name, mobile, email, comment } = req.body;
      let msg = `<table class="table table-bordered">
      <tbody>
      <tr>
      <td>Subject</td>
      <td>${subject}</td>
      </tr>
        <tr>
          <td>Name</td>
          <td>${name}</td>
          </tr>
        <tr>
          <td>Mobile</td>
          <td>${mobile}</td>
          </tr>
        <tr>
          <td>Email</td>
          <td>${email}</td>
          </tr>
        <tr>
          <td>Comment</td>
          <td>${comment}</td>
          </tr>
       
        
      </tbody>
    </table>`;

      sendMail(email, msg);
      return res.status(200).json({ success: "Mail Send Succesfully" });
    } catch (error) {
      console.log(error);
    }
  }

  async sendMailBookedDetails(req, res) {
    try {
      let {
        name,
        mobile,
        email,
        comment,
        startdate,
        returndate,
        from,
        to,
        seatno,
        customerdetais,
        TotalAmount,
      } = req.body;
      let msg = `<table class="table table-bordered">
      <tbody>
      
        <tr>
          <td>Name</td>
          <td>${name}</td>
          </tr>
        <tr>
          <td>Mobile</td>
          <td>${mobile}</td>
          </tr>
        <tr>
          <td>Email</td>
          <td>${email}</td>
          </tr>
        <tr>
        <tr>
      <td>Start date</td>
      <td>${startdate}</td>
      </tr>
          <td>Return date</td>
          <td>${returndate}</td>
          </tr>
          <tr>
          <td>From</td>
          <td>${from}</td>
          </tr>
          <tr>
          <td>To</td>
          <td>${to}</td>
          </tr>
          <tr>
          <td>Seat No</td>
          <td>${seatno}</td>
          </tr>
          <tr>
          <td>Customer Details</td>
          <td>${customerdetais}</td>
          </tr>
          <tr>
          <tr>
          <td>TotalAmount</td>
          <td>${TotalAmount}</td>
          </tr>
          <tr>
         
          <td>Status</td>
          <td>${comment}</td>
          </tr>
       
        
      </tbody>
    </table>`;

      sendMail(email, msg);
      return res.status(200).json({ success: "Mail Send Succesfully" });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new User();
