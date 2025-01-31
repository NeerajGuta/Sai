const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const CounterCBM = mongoose.model("CounterCBM", CounterSchema);

const CBM = new Schema(
  {
    cbmId: {
      type: String,
      unique: true,
      // required: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    phoneno: {
      type: String,
    },
    email: {
      type: String,
    },
    residentialaddress: {
      type: String,
    },
    currentaddress: {
      type: String,
    },
    cv: {
      type: String,
    },
    aadharcard: {
      type: String,
    },
    pandocument: {
      type: String,
    },
    bankname: {
      type: String,
    },
    branch: {
      type: String,
    },
    ifsccode: {
      type: String,
    },
    accountno: {
      type: String,
    },
  },
  { timestamps: true }
);
CBM.pre("save", async function (next) {
  try {
    if (!this.userId) {
      // Find the corresponding counter document and increment the sequence
      const counter = await CounterCBM.findByIdAndUpdate(
        { _id: "cbmId" }, // Use "userId" as the counter's _id
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      // Create the unique userId based on "USER" and the incremented sequence
      this.cbmId = `CBM${counter.seq.toString().padStart(3, "0")}`;
    }
    console.log("cbmId before next():", this.cbmId); //
    // Ensure that the partnerId field is set before saving
    if (!this.cbmId) {
      throw new Error("Failed to generate a unique cbmId.");
    }
    next();
  } catch (error) {
    next(error);
  }
});

const CBMModel = mongoose.model("CenterExecutive", CBM);
module.exports = CBMModel;
