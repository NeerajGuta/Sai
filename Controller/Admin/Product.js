const productModel = require("../../Model/Admin/Product");

class Product {
  async AddProduct(req, res) {
    try {
      let {
        userId,
        productName,
        image1,
        image2,
        image3,
        image4,
        category,
        productDiscription,
        subcategory,
        remaingStock,
        totalStock,
        price,
        gst,
        discount,
        addedBy,
        howToUse,
      } = req.body;

      let obj = {
        userId,
        productName,
        image1,
        image2,
        image3,
        image4,
        category,
        productDiscription,
        subcategory,
        remaingStock,
        totalStock,
        price,
        gst,
        discount,
        addedBy,
      };
      if (req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr?.length; i++) {
          if (arr[i].fieldname == "image1") {
            obj["image1"] = arr[i].filename;
          }
          if (arr[i].fieldname == "image2") {
            obj["image2"] = arr[i].filename;
          }
          if (arr[i].fieldname == "image3") {
            obj["image3"] = arr[i].filename;
          }
          if (arr[i].fieldname == "image4") {
            obj["image4"] = arr[i].filename;
          }
        }
      }

      let data = await productModel.create(obj);
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: "Successfully added" });
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(req, res) {
    try {
      let {
        id,
        productName,
        category,
        productDiscription,
        subcategory,
        remaingStock,
        totalStock,
        addedBy,
        gst,
        price,
        discount,
      } = req.body;
      let obj = {};
      if (productName) {
        obj["productName"] = productName;
      }
      if (category) {
        obj["category"] = category;
      }
      if (productDiscription) {
        obj["productDiscription"] = productDiscription;
      }
      if (subcategory) {
        obj["subcategory"] = subcategory;
      }
      if (remaingStock) {
        obj["remaingStock"] = remaingStock;
      }
      if (totalStock) {
        obj["totalStock"] = totalStock;
      }
      if (addedBy) {
        obj["addedBy"] = addedBy;
      }
      // if (userId) {
      //   obj["userId"] = userId;
      // }
      if (gst) {
        obj["gst"] = gst;
      }
      if (price) {
        obj["price"] = price;
      }
      if (discount) {
        obj["discount"] = discount;
      }
      if (req.files && req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr?.length; i++) {
          if (arr[i].fieldname == "image1") {
            obj["image1"] = arr[i].filename;
          }
        }
      }
      let data = await productModel.findOneAndUpdate(
        { _id: id },
        { $set: obj },
        { new: true }
      );
      if (!data) return res.status(400).json({ error: "Data not found" });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProduct(req, res) {
    try {
      let data = await productModel.find().sort({ _id: -1 });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(req, res) {
    try {
      let id = req.params.id;
      let data = await productModel.findById(id);
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProduct(req, res) {
    try {
      let id = req.params.id;
      let data = await productModel.deleteOne({ _id: id });
      if (data.deletedCount == 0)
        return res.status(400).json({ error: "Data not found" });

      return res.status(200).json({ success: "Successfully deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProduct(req, res) {
    try {
      let data = await productModel.find().sort({ _id: -1 });
      return res.status(200).json({ success: data });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Product();
