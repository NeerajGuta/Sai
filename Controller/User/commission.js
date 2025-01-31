const commissionModel = require("../../Model/User/commission");

class Commission {
  async Commissioncreate(req, res) {
    try {
      let { bookingId, recivedammount, paymentId, status } = req.body;

      let newcommission = new commissionModel({
        bookingId,
        recivedammount,
        paymentId,
        status,
      });
      newcommission.save().then((data) => {
        return res
          .status(200)
          .json({ success: newcommission, message: "Successfully Added" });
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Data Not Added" });
    }
  }

  async getallCommission(req, res) {
    try {
      const getCommission = await commissionModel
        .find({})
        .populate("bookingId");
      return res.status(200).json({ success: getCommission });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

const CommissionController = new Commission();
module.exports = CommissionController;
