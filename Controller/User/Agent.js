const agentModel = require("../../Model/User/Agent");

class Agent {
  async agentcreate(req, res) {
    try {
      let {
        agentname,
        agentphone,
        agentemail,
        agentbankname,
        agentaccountnumber,
        agentifscCode,
        agentbranchname,
        agentcommissionamount,
      } = req.body;

      let newAgent = new agentModel({
        agentname,
        agentphone,
        agentemail,
        agentbankname,
        agentaccountnumber,
        agentifscCode,
        agentbranchname,
        agentcommissionamount,
      });
      newAgent.save().then((data) => {
        return res
          .status(200)
          .json({ success: newAgent, message: "Successfully Added" });
      });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Data Not Added" });
    }
  }

  async updateAgent(req, res) {
    try {
      let id = req.params.id;

      let {
        agentname,
        agentphone,
        agentemail,
        agentbankname,
        agentaccountnumber,
        agentifscCode,
        agentbranchname,
        agentcommissionamount,
      } = req.body;

      let obj = {};
      if (agentname) {
        obj["agentname"] = agentname;
      }
      if (agentphone) {
        obj["agentphone"] = agentphone;
      }
      if (agentemail) {
        obj["agentemail"] = agentemail;
      }
      if (agentbankname) {
        obj["agentbankname"] = agentbankname;
      }
      if (agentaccountnumber) {
        obj["agentaccountnumber"] = agentaccountnumber;
      }
      if (agentifscCode) {
        obj["agentifscCode"] = agentifscCode;
      }
      if (agentbranchname) {
        obj["agentbranchname"] = agentbranchname;
      }
      if (agentcommissionamount) {
        obj["agentcommissionamount"] = agentcommissionamount;
      }

      let data = await agentModel.findByIdAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );

      if (!data) {
        return res.status(400).json({ error: "Something went wrong" });
      }

      return res
        .status(200)
        .json({ success: true, message: "Successfully Agent updated" });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: "Agent not updated" });
    }
  }

  async allAgent(req, res) {
    try {
      const getAgent = await agentModel.find({});
      return res.status(200).json({ success: getAgent });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: "Somthing went wrong" });
    }
  }
}

const agentController = new Agent();
module.exports = agentController;
