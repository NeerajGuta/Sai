const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const BookingSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "user",
    },
    partnerId: {
      type: ObjectId,
      ref: "partner",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    Bookingdate: {
      type: String,
    },
    returndate: {
      type: String,
    },
    FromArea: {
      type: String,
    },
    destination: {
      type: String,
    },
    pickuplocation: {
      type: String,
    },
    SeatNo: [{}],
    customerdetails: [
      {
        seatno: { type: Number },
        name: {
          type: String,
        },
        age: {
          type: String,
        },
        gender: {
          type: String,
        },
      },
    ],
    amount: {
      type: String,
    },
    Total: {
      type: String,
    },
    PaymentMethod: {
      type: String,
    },
    PayId: {
      type: String,
    },
    partnertype: {
      type: String,
    },
    Status: {
      type: String,
      default: "booked",
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("Booking", BookingSchema);
module.exports = bookingModel;
