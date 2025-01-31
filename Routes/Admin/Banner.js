const express = require("express");
const router = express.Router();
const BannerController = require("../../Controller/Admin/Banner");
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

router.post("/Addbanner", upload.any(), BannerController.createbanner);
router.get("/getbanner", BannerController.allBanner);
router.delete("/remove/:id", BannerController.removeBanner);

module.exports = router;
