const mongoose = require("mongoose");

const Packages = new mongoose.Schema(
  {
    packagename: {
      type: String,
      required: true,
    },
    packageimage: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
    },
    returndate: {
      type: String,
      required: true,
    },
    itinerary: [
      {
        dayName: {
          type: String,
        },
        text: {
          type: String,
        },
      },
    ],
    menuchart: [
      {
        daysName: {
          type: String,
        },
        morning: {
          type: String,
        },
        afternoon: {
          type: String,
        },
        evining: {
          type: String,
        },
        night: {
          type: String,
        },
      },
    ],
    lodingdetails: {
      type: String,
    },
  },
  { timestamps: true }
);

const packageModel = mongoose.model("Packages", Packages);
module.exports = packageModel;
