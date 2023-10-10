const express=require("express");
const router = express.Router();
const EnquireController= require("../../Controller/Admin/Enquire");


router.post("/AddEnquire",EnquireController.AddEnquire);
router.get("/getEnquire",EnquireController.getEnquire);
router.delete("/deleteEnquire",EnquireController.deleteEnquire);

module.exports =router;