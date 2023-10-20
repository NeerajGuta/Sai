const express = require("express");
const router = express.Router();
const agentController = require("../../Controller/User/Agent");
const consultantController = require("../../Controller/User/Consultant");
const CenterExecutiveController = require("../../Controller/User/Center");

// agent
router.post("/addagent", agentController.agentcreate);
router.put("/updateagent/:id", agentController.updateAgent);
router.get("/getallagent", agentController.allAgent);

// consulant route
router.post("/addconsultant", consultantController.consultantcreate);
router.put("/updateconsultant/:id", consultantController.updateConsultant);
router.get("/getallconsultant", consultantController.allConsultant);

//  CenterExecutive
router.post(
  "/addcenterexcutive",
  CenterExecutiveController.CenterExecutivecreate
);
router.put(
  "/updatecenterexcutive/:id",
  CenterExecutiveController.updateCenterExecutive
);
router.get(
  "/getallcenterexcutive",
  CenterExecutiveController.allCenterExecutive
);

module.exports = router;
