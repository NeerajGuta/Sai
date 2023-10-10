const packageModel = require("../../Model/Admin/Packages");

class packages {
  async createpackage(req, res) {
    try {
      let {
        packagename,
        price,
        startdate,
        returndate,
        itinerary,
        menuchart,
        lodingdetails,
      } = req.body;
      let packageimage = req.files[0]?.filename;
      const Newpackages = new packageModel({
        packagename,
        price,
        startdate,
        returndate,
        itinerary,
        menuchart,
        lodingdetails,
        packageimage,
      });

      Newpackages.save().then((data) => {
        return res.status(200).json({
          success: Newpackages,
          messages: "Packages successfully added",
        });
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  async updatePacakge(req, res) {
    try {
      const {
        id,
        packagename,
        price,
        startdate,
        returndate,
        itinerary,
        menuchart,
        lodingdetails,
      } = req.body;

      const updateObj = {};

      if (packagename) updateObj.packagename = packagename;
      if (price) updateObj.price = price;
      if (startdate) updateObj.startdate = startdate;
      if (returndate) updateObj.returndate = returndate;
      if (itinerary) updateObj.itinerary = itinerary;
      if (menuchart) updateObj.menuchart = menuchart;
      if (lodingdetails) updateObj.lodingdetails = lodingdetails;

      if (req.files && req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].fieldname == "packageimage") {
            updateObj.packageimage = arr[i].filename;
          }
        }
      }

      const updatedPackage = await packageModel.findByIdAndUpdate(
        id,
        { $set: updateObj },
        { new: true }
      );

      if (!updatedPackage) {
        return res.status(404).json({
          error: "Package not found",
        });
      }
      // console.log("Updated package:", updatedPackage);

      return res.status(200).json({
        success: "Package updated successfully",
        updatedPackage,
      });
    } catch (error) {
      console.error("Error updating package:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async getPackage(req, res) {
    try {
      const getPackages = await packageModel.find({});
      console.log(getPackages);
      if (!getPackages) {
        return res.status(404).json({
          error: "Package not found",
        });
      }
      return res.status(200).json({ success: getPackages });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "false" });
    }
  }

  async removePackage(req, res) {
    try {
      let { id } = req.params;
      const removepackage = await packageModel.findByIdAndDelete(id);
      return res.status(200).json({
        success: removepackage,
        message: "Package successfully delete",
      });
    } catch (error) {
      console.error("Error delete package:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

const packageController = new packages();
module.exports = packageController;
