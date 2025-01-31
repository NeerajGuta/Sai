const express = require("express");
const router = express.Router();
const agentController = require("../../Controller/User/Agent");
const consultantController = require("../../Controller/User/Consultant");
const CBMController = require("../../Controller/User/CBM");
const CommissionController = require("../../Controller/User/commission");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "public/CBM");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// agent
router.post("/addagent", agentController.agentcreate);
router.put("/updateagent/:id", agentController.updateAgent);
router.get("/getallagent", agentController.allAgent);

// consulant route
router.post("/addconsultant", consultantController.consultantcreate);
router.put("/updateconsultant/:id", consultantController.updateConsultant);
router.get("/getallconsultant", consultantController.allConsultant);

//  CBM
router.post("/addcbm", upload.any(), CBMController.CBMcreate);
router.put("/updatecbm", upload.any(), CBMController.updateCenterExecutive);
router.get("/getallcbm", CBMController.allCBM);
router.delete("/delete/:id", CBMController.removeCBM);

// Commission
router.post("/addcommission", CommissionController.Commissioncreate);
router.get("/getcommission", CommissionController.getallCommission);

module.exports = router;
