const pickUpModel = require("../../Model/Admin/PickUp");

class pickUP {
  async createpackage(req, res) {
    try {
      let { triptype, tripname, pickuplocation } = req.body;
      const Newpackages = new pickUpModel({
        triptype,
        tripname,
        pickuplocation,
      });

      Newpackages.save().then((data) => {
        return res.status(200).json({
          success: Newpackages,
          messages: "Pick Up Location successfully added",
        });
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  async updatePacakge(req, res) {
    try {
      const { id, triptype, tripname, pickuplocation } = req.body;

      const updateObj = {};
      if (triptype) updateObj.triptype = triptype;
      if (tripname) updateObj.tripname = tripname;
      if (pickuplocation) updateObj.pickuplocation = pickuplocation;

      const updatedPackage = await pickUpModel.findByIdAndUpdate(
        id,
        { $set: updateObj },
        { new: true }
      );

      if (!updatedPackage) {
        return res.status(404).json({
          error: "Pick Up Location not found",
        });
      }
      // console.log("Updated package:", updatedPackage);

      return res.status(200).json({
        success: "Pick Up Location updated successfully",
        updatedPackage,
      });
    } catch (error) {
      console.error("Error updating Pick Up Location:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async getPackage(req, res) {
    try {
      const getPackages = await pickUpModel.find({});
      console.log(getPackages);
      if (!getPackages) {
        return res.status(404).json({
          error: "Pick Up Location not found",
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
      const removepackage = await pickUpModel.findByIdAndDelete(id);
      return res.status(200).json({
        success: removepackage,
        message: "Pick Up Location successfully delete",
      });
    } catch (error) {
      console.error("Error delete package:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

const pickUPController = new pickUP();
module.exports = pickUPController;
