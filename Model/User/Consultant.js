const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultantSchema = new Schema(
  {
    consultantname: {
      type: String,
      required: true,
    },
    consultantphone: {
      type: Number,
    },
    consultantemail: {
      type: String,
      required: true,
    },
    consultantbankname: {
      type: String,
      required: true,
    },
    consultantaccountnumber: {
      type: String,
      required: true,
    },
    consultantifscCode: {
      type: String,
      required: true,
    },
    consultantbranchname: {
      type: String,
      required: true,
    },
    consultantcommissionamount: {
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

const consultantModel = mongoose.model("Consultant", ConsultantSchema);
module.exports = consultantModel;
