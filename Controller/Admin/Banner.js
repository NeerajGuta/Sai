const bannerModel = require("../../Model/Admin/Banner");

class Banner {
  async createbanner(req, res) {
    try {
      let bannerimage;
      req.files.map((val) => {
        if (val.fieldname === "bannerimage") {
          bannerimage = val.filename;
        }
      });

      let newBannercreate = new bannerModel({
        bannerimage: bannerimage,
      });
      newBannercreate.save().then((data) => {
        return res
          .status(200)
          .json({ success: newBannercreate, message: "Successfully Added" });
      });
    } catch (error) {}
  }
  async allBanner(req, res) {
    try {
      const getBanner = await bannerModel.find({});
      return res.status(200).json({ success: getBanner });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }
  async removeBanner(req, res) {
    try {
      let id = req.params.id;
      const getBanner = await bannerModel.findByIdAndDelete({ _id: id });
      return res.status(200).json({ success: getBanner });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }
}
const BannerController = new Banner();
module.exports = BannerController;
