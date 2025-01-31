const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Banner = new Schema(
  {
    bannerimage: {
      type: String,
    },
  },
  { timestamps: true }
);

const bannerModel = mongoose.model("Banner", Banner);
module.exports = bannerModel;
