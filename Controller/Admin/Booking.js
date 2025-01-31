const { default: axios } = require("axios");
const https = require("https");
const bookingModel = require("../../Model/Admin/Booking");
const PaytmChecksum = require("../../PaytmChecksum");
// const PaytmChecksum = require("paytmchecksum");

class BOOKING {
  async booking(req, res) {
    try {
      let {
        userId,
        partnerId,
        name,
        email,
        mobile,
        Bookingdate,
        returndate,
        FromArea,
        destination,
        SeatNo,
        customerdetails,
        amount,
        Total,
        PaymentMethod,
        PayId,
        Status,
        pickuplocation,
      } = req.body;

      let data = await bookingModel.create({
        userId,
        partnerId,
        name,
        email,
        mobile,
        Bookingdate,
        returndate,
        FromArea,
        destination,
        SeatNo,
        customerdetails,
        amount,
        Total,
        PaymentMethod,
        PayId,
        Status,
        pickuplocation,
      });
      if (!data) return res.status(400).json({ error: "Something went wrong" });
      return res.status(200).json({ success: "Successfully added" });
    } catch (error) {
      console.log(error);
    }
  }

  async updateBooking(req, res) {
    try {
      let { id, commissionId, recivedammount, statuscheck } = req.body;
      let obj = {};
      if (commissionId) {
        obj["commissionId"] = commissionId;
      }
      if (recivedammount) {
        obj["recivedammount"] = recivedammount;
      }
      if (statuscheck) {
        obj["statuscheck"] = statuscheck;
      }
      let data = await bookingModel.findByIdAndUpdate(
        id,
        { $set: obj },
        { new: true }
      );
      return res.status(200).json({
        success: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }

  async getAllBooking(req, res) {
    try {
      let data = await bookingModel
        .find({})
        .sort({ _id: -1 })
        .populate("userId")
        .populate("partnerId");
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getBookingById(req, res) {
    try {
      let id = req.params.id;
      let data = await bookingModel.findById(id).populate("userId");
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getBookingUserId(req, res) {
    try {
      let id = req.params.id;
      let data = await bookingModel.find({ userId: id });
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
  async deletebooking(req, res) {
    let id = req.params.id;
    try {
      await bookingModel.deleteOne({ id: id });
      return res.status(200).json({ success: "Successfully delete" });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAllbooking(req, res) {
    let id = req.params.id;
    try {
      await bookingModel.deleteMany();
      return res.status(200).json({ success: "Successfully delete" });
    } catch (error) {
      console.log(error);
    }
  }

  async PaytmTransaction(req, res) {
    try {
      var paytmParams = {
        body: {
          requestType: "Payment",
          mid: req.body.mid,
          websiteName: "WEBSTAGING",
          orderId: req.body.orderId,
          callbackUrl: req.body.callbackUrl,
          txnAmount: {
            value: req.body.amount,
            currency: "INR",
          },
          userInfo: {
            custId: req.body.userId,
          },
        },
      };

      // let checksum = PaytmChecksum.generateChecksum(
      //   JSON.stringify(paytmParams.body),
      //   "@9HxLhtVtbPvNS26"
      // );

      // const obj = {
      //   mid: req.body.mid,
      //   orderId: req.body.orderId,
      // };
      // let checksum = PaytmChecksum.generateSignature(
      //   JSON.stringify(paytmParams.body),
      //   "@9HxLhtVtbPvNS26"
      // );

      // checksum
      //   .then(function (result) {
      //     console.log("generateSignature Returns: " + result);
      //     paytmParams.head = {
      //       signature: result,
      //     };
      //     console.log(112, paytmParams);
      //     var verifyChecksum = PaytmChecksum.verifySignature(
      //       paytmParams,
      //       "@9HxLhtVtbPvNS26",
      //       result
      //     );
      //     console.log("verifySignature Returns: " + verifyChecksum);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      PaytmChecksum.generateSignature(
        JSON.stringify(paytmParams.body),
        "@9HxLhtVtbPvNS26"
      ).then(function (checksum) {
        paytmParams.head = {
          signature: checksum,
        };

        var post_data = JSON.stringify(paytmParams);

        var options = {
          /* for Staging */
          hostname: "securegw-stage.paytm.in",

          /* for Production */
          // hostname: 'securegw.paytm.in',

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${req.body.mid}&orderId=${req.body.orderId}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            console.log("Response: ", response);
            res.status(200).json({ responseData: response });
          });
        });

        post_req.write(post_data);
        post_req.end();
      });

      // return res.status(400).json({ error: "Something went wrong!!!" });
      // const post_data = JSON.stringify(paytmParams);

      // const options = {
      //   method: "post",
      //   url: `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${req.body.mid}&orderId=${req.body.orderId}`,
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Content-Length": post_data.length,
      //   },
      //   data: post_data,
      // };

      // axios(options)
      //   .then(function (response) {
      //     console.log("Response: ", response.data);
      //     return res.status(200).json({
      //       success: "Transaction successful",
      //       response: response.data,
      //     });
      //   })
      //   .catch(function (error) {
      //     console.error("Error: ", error);
      //     return res.status(400).json({
      //       error: "Transaction Unsuccessful!!!",
      //       response: response.data,
      //     });
      //   });

      // .catch(function (error) {
      //   console.error("Error generating checksum: ", error);
      // });
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error");
    }
  }
}

module.exports = new BOOKING();
