const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Addtocart = new Schema(
  {
    productId: {
      type: ObjectId,
      ref: "productSchema",
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);
const AddtocartModel = mongoose.model("Addtocartdf", Addtocart);
module.exports = AddtocartModel;
