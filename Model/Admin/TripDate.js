const mongoose = require("mongoose");

const tripDate = new mongoose.Schema(
  {
    triptype: {
      type: String,
    },
    tripname: {
      type: String,
    },
    packageId: {
      type: String,
    },
    tripdates: [
      {
        startdate: {
          type: String,
        },
        returndate: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
const trippDateModel = mongoose.model("TripDate", tripDate);
module.exports = trippDateModel;
