const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgentSchema = new Schema(
  {
    agentname: {
      type: String,
      required: true,
    },
    agentphone: {
      type: String,
      required: true,
    },
    agentemail: {
      type: String,
      required: true,
    },
    agentbankname: {
      type: String,
      required: true,
    },
    agentaccountnumber: {
      type: String,
      required: true,
    },
    agentifscCode: {
      type: String,
      required: true,
    },
    agentbranchname: {
      type: String,
      required: true,
    },
    agentcommissionamount: {
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

const agentModel = mongoose.model("Agent", AgentSchema);
module.exports = agentModel;
