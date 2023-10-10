const express = require("express");
const AddtocartController = require("../../Controller/Admin/Addtocart");
const router = express.Router();

router.post("/Addtocart", AddtocartController.Addtocart);
router.get("/getAddtoCart/:id", AddtocartController.getAddtoCart);
router.delete("/DeleteAddtoCart/:id", AddtocartController.DeleteAddtoCart);
router.put("/priceIncAnddec", AddtocartController.priceIncAnddec);
router.get(
  "/getAllCartProductsByCustomer",
  AddtocartController.getAllCartProductsByCustomer
);
router.delete("/deleteCart/:id", AddtocartController.deleteCart);

module.exports = router;
