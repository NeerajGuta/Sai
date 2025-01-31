const mongoose = require("mongoose");

const CommissionSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    recivedammount: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const commissionModel = mongoose.model("commission", CommissionSchema);
module.exports = commissionModel;
