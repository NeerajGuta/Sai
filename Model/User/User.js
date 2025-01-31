const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", CounterSchema);

const UserSchema = new Schema(
  // General Information
  {
    partnerId: {
      type: String,
      unique: true,
    },
    cbmID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CenterExecutive",
    },
    cbmname: {
      type: String,
      required: true,
    },
    businessname: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    gstnumber: {
      type: String,
    },
    gstdocument: {
      type: String,
    },
    pandocument: {
      type: String,
    },
    aadhardocument: {
      type: String,
    },
    shopimages: {
      type: [String],
    },
    address: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    password: {
      type: String,
    },
    bankname: {
      type: String,
      required: true,
    },
    accountnumber: {
      type: String,
      required: true,
    },
    ifscCode: {
      type: String,
      required: true,
    },
    branchname: {
      type: String,
      required: true,
    },
    commissionamount: {
      type: Number,
      required: true,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },

    // Agent Details
    // agentname: {
    //   type: String,
    //   required: true,
    // },
    // agentphone: {
    //   type: String,
    //   required: true,
    // },
    // agentemail: {
    //   type: String,
    //   required: true,
    // },
    // agentbankname: {
    //   type: String,
    //   required: true,
    // },
    // agentaccountnumber: {
    //   type: String,
    //   required: true,
    // },
    // agentifscCode: {
    //   type: String,
    //   required: true,
    // },
    // agentbranchname: {
    //   type: String,
    //   required: true,
    // },
    // agentcommissionamount: {
    //   type: Number,
    //   required: true,
    // },

    // Consultatnt Details
    // consultantname: {
    //   type: String,
    //   required: true,
    // },
    // consultantphone: {
    //   type: Number,
    // },
    // consultantemail: {
    //   type: String,
    //   required: true,
    // },
    // consultantbankname: {
    //   type: String,
    //   required: true,
    // },
    // consultantaccountnumber: {
    //   type: String,
    //   required: true,
    // },
    // consultantifscCode: {
    //   type: String,
    //   required: true,
    // },
    // consultantbranchname: {
    //   type: String,
    //   required: true,
    // },
    // consultantcommissionamount: {
    //   type: Number,
    //   required: true,
    // },
    // Center Details
    // centername: {
    //   type: String,
    //   required: true,
    // },
    // centerphone: {
    //   type: String,
    //   required: true,
    // },
    // centeremail: {
    //   type: String,
    //   required: true,
    // },
    // centerbankname: {
    //   type: String,
    //   required: true,
    // },
    // centeraccountnumber: {
    //   type: String,
    //   required: true,
    // },
    // centerifscCode: {
    //   type: String,
    //   required: true,
    // },
    // centerbranchname: {
    //   type: String,
    //   required: true,
    // },
    // centercommissionamount: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function (next) {
  try {
    if (!this.userId) {
      // Find the corresponding counter document and increment the sequence
      const counter = await Counter.findByIdAndUpdate(
        { _id: "partnerId" }, // Use "userId" as the counter's _id
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      // Create the unique userId based on "USER" and the incremented sequence
      this.partnerId = `SAIGROUP${counter.seq.toString().padStart(3, "0")}`;
    }
    console.log("partnerId before next():", this.partnerId); //
    // Ensure that the partnerId field is set before saving
    if (!this.partnerId) {
      throw new Error("Failed to generate a unique partnerId.");
    }
    next();
  } catch (error) {
    next(error);
  }
});

const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
