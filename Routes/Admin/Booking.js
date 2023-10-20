const express = require("express");
const route = express.Router();
const multer = require("multer");
const bookingController = require("../../Controller/Admin/Booking");

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "Public/booking");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

route.post("/booking", bookingController.booking);
route.get("/getAllBooking", bookingController.getAllBooking);
route.get("/getBookingBy/:id", bookingController.getBookingById);
route.get("/getbookinguser/:id", bookingController.getBookingUserId);
route.delete("/deletebooking", bookingController.deletebooking);
route.delete("/deleteAllbooking", bookingController.deleteAllbooking);

module.exports = route;
