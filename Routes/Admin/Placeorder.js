const express = require("express");
const router = express.Router();
const placeorderController = require("../../Controller/Admin/Placeorder");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "Public/Orderplace");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({storage: storage});

router.post("/orderproduct",upload.any(), placeorderController.placeorder);
router.get("/getOrderDetails", placeorderController.getCustomerOrder);
router.get("/getOrderDetailsbyid/:id", placeorderController.getCustomerOrderById);
router.put("/CancleOrder/:id", placeorderController.CancleOrder);
router.put("/OutforDelivery/:id", placeorderController.OutforDelivery);
router.put("/DeliveredOrder/:id", placeorderController.Delivered);

module.exports = router;
