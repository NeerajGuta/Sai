const pickUPController = require("../../Controller/Admin/PickUp");
const express = require("express");
const router = express.Router();

router.post("/addpickuplocation", pickUPController.createpackage);
router.put("/updatepickuplocation", pickUPController.updatePacakge);
router.get("/getallpickuplocation", pickUPController.getPackage);
router.delete("/removepickuplocation/:id", pickUPController.removePackage);

module.exports = router;
