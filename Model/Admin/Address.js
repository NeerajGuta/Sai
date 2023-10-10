const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Address = new Schema(
  {
    userId: {
      type: ObjectId,
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
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    village: {
      type: String,
    },
    houseno: {
      type: String,
    },
  },
  { timestamps: true }
);

const AddressModel = mongoose.model("Address", Address);
module.exports = AddressModel;
