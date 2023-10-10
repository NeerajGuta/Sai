const express = require("express");
const router = express.Router();

const productController = require("../../Controller/Admin/Product");
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

router.post("/AddProduct", upload.any(), productController.AddProduct);
router.put("/updateProduct", upload.any(), productController.updateProduct);
router.get("/getProductById/:id", productController.getProductById);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.get("/getAllProduct", productController.getAllProduct);
module.exports = router;
