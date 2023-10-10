const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const otpSchema = new Schema({
    mobile: {
        type: String,
      
        trim: true,
        index: { unique :true},
    },
    email:{
        type:String
    },
    otp: {
        type: String,
        required: true,
        maxlength: 6,
    },
    expire_at: {
        type: Date,
        expires: 300,
        default: Date.now,
    }
    
},{timestamps:true});

const otpModel = mongoose.model("Otp",otpSchema);
module.exports = otpModel;