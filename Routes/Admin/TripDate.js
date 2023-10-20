const tripDateController = require("../../Controller/Admin/TripDate");
const express = require("express");
const router = express.Router();

router.post("/addtripdate", tripDateController.createpackage);
router.put("/updatetripdate", tripDateController.updatePacakge);
router.get("/getalltripdate", tripDateController.getPackage);
router.delete("/removetripdate/:id", tripDateController.removePackage);
router.get(
  "/getTripByPackageId:/packageId",
  tripDateController.getTripByPackageId
);

module.exports = router;
