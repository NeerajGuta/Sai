const express = require("express");
const router = express.Router();
const AddressController = require("../../Controller/Admin/Address");

router.post("/Addaddress", AddressController.Addaddress);
router.get("/getAddress/:id", AddressController.getAddress);
router.delete("/deleteaddress/:id", AddressController.deleteaddress);

module.exports = router;
