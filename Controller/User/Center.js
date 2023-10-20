const centerModel = require("../../Model/User/Center");

class CenterExecutive {
  async CenterExecutivecreate(req, res) {
    try {
      let {
        centerexecutivename,
        centerexecutivephone,
        centerexecutiveemail,
        centerexecutivebankname,
        centerexecutiveaccountnumber,
        centerexecutiveifscCode,
        centerexecutivebranchname,
        centerexecutivecommissionamount,
      } = req.body;

      let newCenterExecutive = new centerModel({
        centerexecutivename,
        centerexecutivephone,
        centerexecutiveemail,
        centerexecutivebankname,
        centerexecutiveaccountnumber,
        centerexecutiveifscCode,
        centerexecutivebranchname,
        centerexecutivecommissionamount,
      });
      newCenterExecutive.save().then((data) => {
        return res
          .status(200)
          .json({ success: newCenterExecutive, message: "Successfully Added" });
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
      let id = req.params.id;

      let {
        centerexecutivename,
        centerexecutivephone,
        centerexecutiveemail,
        centerexecutivebankname,
        centerexecutiveaccountnumber,
        centerexecutiveifscCode,
        centerexecutivebranchname,
        centerexecutivecommissionamount,
      } = req.body;

      let obj = {};
      if (centerexecutivename) {
        obj["centerexecutivename"] = centerexecutivename;
      }
      if (centerexecutivephone) {
        obj["centerexecutivephone"] = centerexecutivephone;
      }
      if (centerexecutiveemail) {
        obj["centerexecutiveemail"] = centerexecutiveemail;
      }
      if (centerexecutivebankname) {
        obj["centerexecutivebankname"] = centerexecutivebankname;
      }
      if (centerexecutiveaccountnumber) {
        obj["centerexecutiveaccountnumber"] = centerexecutiveaccountnumber;
      }
      if (centerexecutiveifscCode) {
        obj["centerexecutiveifscCode"] = centerexecutiveifscCode;
      }
      if (centerexecutivebranchname) {
        obj["centerexecutivebranchname"] = centerexecutivebranchname;
      }
      if (centerexecutivecommissionamount) {
        obj["centerexecutivecommissionamount"] =
          centerexecutivecommissionamount;
      }

      let data = await centerModel.findByIdAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );

      if (!data) {
        return res.status(400).json({ error: "Something went wrong" });
      }

      return res.status(200).json({
        success: true,
        message: "Successfully Center Executive  updated",
      });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: "Center Executive  not updated" });
    }
  }

  async allCenterExecutive(req, res) {
    try {
      const getCenterExecutive = await centerModel.find({});
      return res.status(200).json({ success: getCenterExecutive });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }
}

const CenterExecutiveController = new CenterExecutive();
module.exports = CenterExecutiveController;
