const consultantModel = require("../../Model/User/Consultant");

class Consultant {
  async consultantcreate(req, res) {
    try {
      let {
        consultantname,
        consultantphone,
        consultantemail,
        consultantbankname,
        consultantaccountnumber,
        consultantifscCode,
        consultantbranchname,
        consultantcommissionamount,
      } = req.body;

      let newconsultant = new consultantModel({
        consultantname,
        consultantphone,
        consultantemail,
        consultantbankname,
        consultantaccountnumber,
        consultantifscCode,
        consultantbranchname,
        consultantcommissionamount,
      });
      newconsultant.save().then((data) => {
        return res
          .status(200)
          .json({ success: newconsultant, message: "Successfully Added" });
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Data Not Added" });
    }
  }

  async updateConsultant(req, res) {
    try {
      let id = req.params.id;

      let {
        consultantname,
        consultantphone,
        consultantemail,
        consultantbankname,
        consultantaccountnumber,
        consultantifscCode,
        consultantbranchname,
        consultantcommissionamount,
      } = req.body;

      let obj = {};
      if (consultantname) {
        obj["consultantname"] = consultantname;
      }
      if (consultantphone) {
        obj["consultantphone"] = consultantphone;
      }
      if (consultantemail) {
        obj["consultantemail"] = consultantemail;
      }
      if (consultantbankname) {
        obj["consultantbankname"] = consultantbankname;
      }
      if (consultantaccountnumber) {
        obj["consultantaccountnumber"] = consultantaccountnumber;
      }
      if (consultantifscCode) {
        obj["consultantifscCode"] = consultantifscCode;
      }
      if (consultantbranchname) {
        obj["consultantbranchname"] = consultantbranchname;
      }
      if (consultantcommissionamount) {
        obj["consultantcommissionamount"] = consultantcommissionamount;
      }

      let data = await consultantModel.findByIdAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );

      if (!data) {
        return res.status(400).json({ error: "Something went wrong" });
      }

      return res
        .status(200)
        .json({ success: true, message: "Successfully Consultant updated" });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: "Consultant not updated" });
    }
  }

  async allConsultant(req, res) {
    try {
      const getConsultant = await consultantModel.find({});
      return res.status(200).json({ success: getConsultant });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }
}

const consultantController = new Consultant();
module.exports = consultantController;
