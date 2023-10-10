const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const enquireSchema = new Schema(
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
    enquiretype: {
      type: String,
    },
    enquireCommenets: {
      type: String,
    },
  },
  { timestamps: true }
);
const EnquireModel = mongoose.model("enquireSchema", enquireSchema);
module.exports = EnquireModel;
