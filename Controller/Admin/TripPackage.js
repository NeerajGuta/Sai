const trippackageModel = require("../../Model/Admin/TripPackage");

class trippackages {
  async createpackage(req, res) {
    try {
      let { tripname } = req.body;
      const Newpackages = new trippackageModel({
        tripname,
      });

      Newpackages.save().then((data) => {
        return res.status(200).json({
          success: Newpackages,
          messages: "Trip Package successfully added",
        });
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  async updatePacakge(req, res) {
    try {
      const { id, tripname } = req.body;

      const updateObj = {};
      if (tripname) updateObj.tripname = tripname;

      const updatedPackage = await trippackageModel.findByIdAndUpdate(
        id,
        { $set: updateObj },
        { new: true }
      );

      if (!updatedPackage) {
        return res.status(404).json({
          error: "Trip Package not found",
        });
      }
      // console.log("Updated package:", updatedPackage);

      return res.status(200).json({
        success: "Trip Package updated successfully",
        updatedPackage,
      });
    } catch (error) {
      console.error("Error updating trip package:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async getPackage(req, res) {
    try {
      const getPackages = await trippackageModel.find({});
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
      const removepackage = await trippackageModel.findByIdAndDelete(id);
      return res.status(200).json({
        success: removepackage,
        message: "Trip Package successfully delete",
      });
    } catch (error) {
      console.error("Error delete package:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

const trippackageController = new trippackages();
module.exports = trippackageController;
