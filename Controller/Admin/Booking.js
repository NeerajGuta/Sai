const bookingModel = require("../../Model/Admin/Booking");

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

  async getAllBooking(req, res) {
    try {
      let data = await bookingModel
        .find()
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
}
module.exports = new BOOKING();
