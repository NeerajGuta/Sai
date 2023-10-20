const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CenterExecutiveSchema = new Schema(
  {
    centerexecutivename: {
      type: String,
      required: true,
    },
    centerexecutivephone: {
      type: String,
      required: true,
    },
    centerexecutiveemail: {
      type: String,
      required: true,
    },
    centerexecutivebankname: {
      type: String,
      required: true,
    },
    centerexecutiveaccountnumber: {
      type: String,
      required: true,
    },
    centerexecutiveifscCode: {
      type: String,
      required: true,
    },
    centerexecutivebranchname: {
      type: String,
      required: true,
    },
    centerexecutivecommissionamount: {
      type: Number,
      required: true,
    },

    isBlock: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const centerModel = mongoose.model("CenterExecutive", CenterExecutiveSchema);
module.exports = centerModel;
