const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../../Controller/User/User");
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "public/Product");
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/registrationUser", upload.any(), UserController.registrationUser);
router.put("/UpdateUser", upload.any(), UserController.UpdateUser);
router.post("/UserLogin", UserController.UserLogin);
router.post("/signinwithphone", UserController.signinwithphone);
router.post("/otpVarification", UserController.otpVarification);
router.put("/makeBlockUnblockUser", UserController.makeBlockUnblockUser);
router.put("/makeApproveAndHoldUser", UserController.makeApproveAndHoldUser);
router.get("/getAllUser", UserController.getAllUser);
router.get("/getUserById/:id", UserController.getUserById);
router.post("/sendMailForInquirey", UserController.sendMailForInquirey);
router.post("/sendMailBookedDetails", UserController.sendMailBookedDetails);

module.exports = router;
