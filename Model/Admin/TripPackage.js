const mongoose = require("mongoose");

const trippackage = new mongoose.Schema(
  {
    tripname: {
      type: String,
    },
  },
  { timestamps: true }
);
const trippackageModel = mongoose.model("TripPackage", trippackage);
module.exports = trippackageModel;
