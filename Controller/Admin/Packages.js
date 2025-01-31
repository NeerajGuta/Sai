const packageModel = require("../../Model/Admin/Packages");

class packages {
  async createpackage(req, res) {
    try {
      let {
        packagename,
        packagetype,
        price,
        journeytitle,
        itinerary,
        menuchart,
        lodingdetails,
      } = req.body;
      let packageimage = req.files[0]?.filename;
      const Newpackages = new packageModel({
        packagename,
        packagetype,
        price,
        journeytitle,
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
        packagetype,
        price,
        journeytitle,
        lodingdetails,
      } = req.body;

      const updateObj = {};
      if (packagetype) updateObj.packagetype = packagetype;
      if (packagename) updateObj.packagename = packagename;
      if (journeytitle) updateObj.journeytitle = journeytitle;
      if (price) updateObj.price = price;
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
  // /////////////////////////////
  // Add Singal Itinerary
  async newpackageItinerary(req, res) {
    try {
      let { id, dayName, text } = req.body;
      const check = await packageModel.findById(id);
      if (!check) return res.status(400).json({ error: "Data not found" });

      check.itinerary.push({ dayName: dayName, text: text });
      await check.save();
      return res.status(200).json({
        success: check,
        messages: "itinerary successfully added",
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }
  // remove newsingalItineary
  async newpackageItineraryRemove(req, res) {
    try {
      let { id, removeId } = req.body;
      const checkremove = await packageModel.findByIdAndUpdate(
        id,
        { $pull: { itinerary: { _id: removeId } } },
        { new: true }
      );
      if (!checkremove)
        return res.status(400).json({ error: "Data not found" });

      return res.status(200).json({
        success: checkremove,
        messages: "itinerary successfully Delete",
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  // update newsingalItineary
  async newpackageItineraryUpdate(req, res) {
    try {
      let { id, editId, dayName, text } = req.body;
      const updateItineary = await packageModel.findById(id);
      if (!updateItineary)
        return res.status(400).json({ error: "Data not found" });

      let editItineries = updateItineary.itinerary.id(editId);
      if (!editItineries)
        return res.status(400).json({ error: "Data not found" });
      if (dayName) {
        editItineries.dayName = dayName;
      }
      if (text) {
        editItineries.text = text;
      }
      await updateItineary.save();
      return res.status(200).json({
        success: updateItineary,
        messages: "itinerary successfully added",
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  ////Add Singal Menuchart

  async newpackageMenuchart(req, res) {
    try {
      let { id, daysName, morning, afternoon, evining, night } = req.body;
      const checkmenuChart = await packageModel.findById(id);
      if (!checkmenuChart)
        return res.status(400).json({ error: "Data not found" });

      checkmenuChart.menuchart.push({
        daysName: daysName,
        morning: morning,
        afternoon: afternoon,
        evining: evining,
        night: night,
      });
      await checkmenuChart.save();
      return res.status(200).json({
        success: checkmenuChart,
        messages: "MenuChart successfully added",
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  // remove newsingalMenuchart
  async newpackageMenuchartRemove(req, res) {
    try {
      let { id, removeId } = req.body;
      const checkremovemenu = await packageModel.findByIdAndUpdate(
        id,
        { $pull: { menuchart: { _id: removeId } } },
        { new: true }
      );
      if (!checkremovemenu)
        return res.status(400).json({ error: "Data not found" });

      return res.status(200).json({
        success: checkremovemenu,
        messages: "Menuchart successfully Delete",
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }

  // update newsingalMenuchart
  async newpackageMenuchartUpdate(req, res) {
    try {
      let { id, editId, daysName, morning, afternoon, evining, night } =
        req.body;
      const updateMenuchart = await packageModel.findById(id);
      if (!updateMenuchart)
        return res.status(400).json({ error: "Data not found" });

      let editMenuchart = updateMenuchart.menuchart.id(editId);
      if (!editMenuchart)
        return res.status(400).json({ error: "Data not found" });
      if (daysName) {
        editMenuchart.daysName = daysName;
      }
      if (morning) {
        editMenuchart.morning = morning;
      }
      if (afternoon) {
        editMenuchart.afternoon = afternoon;
      }
      if (evining) {
        editMenuchart.evining = evining;
      }
      if (night) {
        editMenuchart.night = night;
      }
      await updateMenuchart.save();
      return res.status(200).json({
        success: updateMenuchart,
        messages: "itinerary successfully added",
      });
    } catch (error) {
      return res.status(400).json({ error: false, message: "Something Wrong" });
    }
  }
}

const packageController = new packages();
module.exports = packageController;
