const CBMModel = require("../../Model/User/CBM");

class CBM {
  async CBMcreate(req, res) {
    try {
      let {
        firstname,
        lastname,
        phoneno,
        email,
        residentialaddress,
        currentaddress,
        bankname,
        branch,
        ifsccode,
        accountno,
      } = req.body;
      let cv;
      let pandocument;
      let aadharcard;

      req.files.map((val) => {
        if (val.fieldname === "cv") {
          cv = val.filename;
        } else if (val.fieldname === "pandocument") {
          pandocument = val.filename;
        } else if (val.fieldname === "aadharcard") {
          aadharcard = val.filename;
        }
      });

      let newCBMcreate = new CBMModel({
        firstname,
        lastname,
        phoneno,
        email,
        residentialaddress,
        currentaddress,
        bankname,
        branch,
        ifsccode,
        accountno,
        cv: cv,
        pandocument: pandocument,
        aadharcard: aadharcard,
      });
      newCBMcreate.save().then((data) => {
        return res
          .status(200)
          .json({ success: newCBMcreate, message: "Successfully Added" });
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Data Not Added" });
    }
  }

  async updateCenterExecutive(req, res) {
    try {
      let {
        id,
        firstname,
        lastname,
        phoneno,
        email,
        residentialaddress,
        currentaddress,
        bankname,
        branch,
        ifsccode,
        accountno,
        cv,
        pandocument,
        aadharcard,
      } = req.body;

      let obj = {};
      if (firstname) {
        obj["firstname"] = firstname;
      }
      if (lastname) {
        obj["lastname"] = lastname;
      }
      if (phoneno) {
        obj["phoneno"] = phoneno;
      }
      if (email) {
        obj["email"] = email;
      }
      if (residentialaddress) {
        obj["residentialaddress"] = residentialaddress;
      }
      if (currentaddress) {
        obj["currentaddress"] = currentaddress;
      }
      if (bankname) {
        obj["bankname"] = bankname;
      }
      if (branch) {
        obj["branch"] = branch;
      }
      if (ifsccode) {
        obj["ifsccode"] = ifsccode;
      }
      if (accountno) {
        obj["accountno"] = accountno;
      }

      if (req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].fieldname == "cv") {
            obj["cv"] = arr[i].filename;
          }
          if (arr[i].fieldname == "pandocument") {
            obj["pandocument"] = arr[i].filename;
          }
          if (arr[i].fieldname == "aadharcard") {
            obj["aadharcard"] = arr[i].filename;
          }
        }
      }
      let data = await CBMModel.findByIdAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );

      if (!data) {
        return res.status(400).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        success: data,
        message: "Successfully Central Branch Manager  updated",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Central Branch Manager not updated",
      });
    }
  }

  async allCBM(req, res) {
    try {
      const getCenterExecutive = await CBMModel.find({});
      return res.status(200).json({ success: getCenterExecutive });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }

  async cbmID(req, res) {
    try {
      let id = req.params.id;
      const getCenterExecutive = await CBMModel.find({ id });
      return res.status(200).json({ success: getCenterExecutive });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }

  async removeCBM(req, res) {
    let { id } = req.params;
    try {
      const removeCBM = await CBMModel.findByIdAndDelete({ _id: id });
      return res.status(200).json({ success: removeCBM });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }
}

const CBMController = new CBM();
module.exports = CBMController;
