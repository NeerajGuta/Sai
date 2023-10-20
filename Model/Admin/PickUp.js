const mongoose = require("mongoose");

const pickUp = new mongoose.Schema(
  {
    triptype: {
      type: String,
    },
    tripname: {
      type: String,
    },
    pickuplocation: {
      type: String,
    },
  },
  { timestamps: true }
);
const pickUpModel = mongoose.model("PickUpLocation", pickUp);
module.exports = pickUpModel;
