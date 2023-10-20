const trippDateModel = require("../../Model/Admin/TripDate");

class tripDate {
  async createpackage(req, res) {
    try {
      let { triptype, tripname, tripdates, packageId } = req.body;
      const Newpackages = new trippDateModel({
        triptype,
        tripname,
        tripdates,
        packageId,
      });

      Newpackages.save().then((data) => {
        return res.status(200).json({
          success: Newpackages,
          messages: "Trip Date successfully added",
        });
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  async updatePacakge(req, res) {
    try {
      const { id, triptype, tripname, tripdates } = req.body;

      const updateObj = {};
      if (triptype) updateObj.triptype = triptype;
      if (tripname) updateObj.tripname = tripname;
      if (tripdates) updateObj.tripdates = tripdates;

      const updatedPackage = await trippDateModel.findByIdAndUpdate(
        id,
        { $set: updateObj },
        { new: true }
      );

      if (!updatedPackage) {
        return res.status(404).json({
          error: "Trip Date not found",
        });
      }
      // console.log("Updated package:", updatedPackage);

      return res.status(200).json({
        success: "Trip Date updated successfully",
        updatedPackage,
      });
    } catch (error) {
      console.error("Error updating Trip Date:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async getPackage(req, res) {
    try {
      const getPackages = await trippDateModel.find({});
      console.log(getPackages);
      if (!getPackages) {
        return res.status(404).json({
          error: "Trip Date not found",
        });
      }
      return res.status(200).json({ success: getPackages });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "false" });
    }
  }

  async getTripByPackageId(req, res) {
    try {
      let packageId = req.params.packageId;
      let data = await trippDateModel.findOne({ packageId: packageId });
      if (!data) return res.status(200).json({ error: "Data Not Found" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async removePackage(req, res) {
    try {
      let { id } = req.params;
      const removepackage = await trippDateModel.findByIdAndDelete(id);
      return res.status(200).json({
        success: removepackage,
        message: "Trip Date successfully delete",
      });
    } catch (error) {
      console.error("Error delete package:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

const tripDateController = new tripDate();
module.exports = tripDateController;
