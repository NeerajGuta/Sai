const packageController = require("../../Controller/Admin/Packages");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "Public/Product");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/addpackage", upload.any(), packageController.createpackage);
router.put("/updatepackage", upload.any(), packageController.updatePacakge);
router.get("/getallpackage", packageController.getPackage);
router.delete("/removepackage/:id", packageController.removePackage);
// //////////////////////////////////////////////////////////////////////////
router.post("/newitineary", packageController.newpackageItinerary);
router.put("/newitinearydelete", packageController.newpackageItineraryRemove);
router.put("/newitinearyupdate", packageController.newpackageItineraryUpdate);

router.post("/newmenuchart", packageController.newpackageMenuchart);
router.put("/newmenuchartdelete", packageController.newpackageMenuchartRemove);
router.put("/newmenuupdate", packageController.newpackageMenuchartUpdate);

module.exports = router;
