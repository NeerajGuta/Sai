const EnquireModel = require("../../Model/Admin/Enquire");

class Enquire {
  async AddEnquire(req, res) {
    try {
      let { userId, name, email, mobile, enquiretype, enquireCommenets } =
        req.body;
      let NewEnquire = new EnquireModel({
        userId,
        name,
        email,
        mobile,
        enquiretype,
        enquireCommenets,
      });
      console.log("NewEnquire", NewEnquire);
      NewEnquire.save().then((data) => {
        return res.status(200).json({ success: "Enquire Submit Successfully" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  async getEnquire(req, res) {
    try {
      let enquireId = req.params.id;
      let Address = await EnquireModel.find({}).populate(
        "userId"
      );
   
        return res.status(200).json({ Address: Address });
     
    } catch (error) {
      console.log(error);
    }
  }
  async deleteEnquire(req, res) {
    try {
      let id = req.params.id;
      let data = await EnquireModel.deleteOne({ _id: id });
      return res.status(200).json({ success: "Successfully delete" });
    } catch (error) {
      console.log(error);
    }
  }
}

const EnquireController = new Enquire();
module.exports = EnquireController;
