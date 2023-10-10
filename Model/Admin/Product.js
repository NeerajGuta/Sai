const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const productSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
    },
    productName: {
      type: String,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    category: {
      type: String,
    },
    productDiscription: {
      type: String,
    },
    subcategory: {
      type: String,
    },
    remaingStock: {
      type: Number,
      default: 0,
    },
    totalStock: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    gst: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    addedBy: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("productSchema", productSchema);
