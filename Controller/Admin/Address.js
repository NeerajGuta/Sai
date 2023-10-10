const AddressModel = require("../../Model/Admin/Address");

class Address {
  async Addaddress(req, res) {
    try {
      let { userId, name, email, mobile, state, city, village, houseno } =
        req.body;

      let NewAddress = new AddressModel({
        userId,
        name,
        email,
        mobile,
        state,
        city,
        village,
        houseno,
      });
      console.log("NewAddress", NewAddress);
      NewAddress.save().then((data) => {
        return res.status(200).json({ success: "Address Successfully" });
      });
    } catch (error) {
      console.log(error);
    }
  }
  async getAddress(req, res) {
    try {
      let addressid = req.params.id;
      let Address = await AddressModel.find({ userId: addressid }).populate(
        "userId"
      );
      if (Address) {
        return res.status(200).json({ Address: Address });
      } else {
        return res.status(403).json({ error: "No Address exist" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async deleteaddress(req, res) {
    try {
      let id = req.params.id;
      let data = await AddressModel.deleteOne({ _id: id });
      return res.status(200).json({ success: "Successfully delete" });
    } catch (error) {
      console.log(error);
    }
  }
}
const AddressController = new Address();
module.exports = AddressController;
