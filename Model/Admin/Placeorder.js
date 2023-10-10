const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Placeorder = new Schema(
  {
    userId: {
      type: ObjectId,
      // ref: "User",
    },
    allproduct: [
      {
        productId: {
          type: ObjectId,
          ref: "productSchema",
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],
    customerorderdatetime: {
      type: String,
    },
    deliverydate: {
      type: String,
      default: "Pending",
    },

    Totalamount: {
      type: Number,
    },
    Tax: {
      type: Number,
    },
    Discountproduct: {
      type: Number,
    },
    PaymentId: {
      type: String,
    },
    PaymentMethod: {
      type: String,
    },
    FName: {
      type: String,
    },
    Phno: {
      type: Number,
    },
    email: {
      type: String,
    },
    Pin_code: {
      type: Number,
    },
    House: {
      type: String,
    },
    Area: {
      type: String,
    },
    Landmark: {
      type: String,
    },
    City: {
      type: String,
    },

    State: {
      type: String,
    },
    subTotal: {
      type: Number,
      default: 0,
    },
    allTotal: {
      type: Number,
      default: 0,
    },
    Discount: {
      type: Number,
      default: 0,
    },
    CancleProduct: {
      type: Boolean,
      default: false,
    },
    CancleDate: {
      type: String,
    },
    ArrivedStatus: {
      type: Boolean,
      default: false,
    },
    ArrivedDate: {
      type: String,
    },
    InvoiceDate: {
      type: String,
    },
    InvoiceID: {
      type: String,
      default: "KAATI/00",
    },
    DeliveredStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const OrderModel = mongoose.model("Placeorder", Placeorder);
module.exports = OrderModel;
