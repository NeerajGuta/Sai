const trippackageController = require("../../Controller/Admin/TripPackage");
const express = require("express");
const router = express.Router();

router.post("/addtrippackage", trippackageController.createpackage);
router.put("/updatetrippackage", trippackageController.updatePacakge);
router.get("/getalltrippackage", trippackageController.getPackage);
router.delete("/removetrippackage/:id", trippackageController.removePackage);

module.exports = router;
