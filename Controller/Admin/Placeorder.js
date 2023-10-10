const OrderModel =require("../../Model/Admin/Placeorder");
const addProductModel =require("../../Model/Admin/Product");
const moment=require("moment/moment")

class Order {
    async placeorder(req, res) {
      let {
        userId,
        Price,
        quantity,
        customerorderdatetime,
        deliverydate,
        Totalamount,
        PaymentId,
        PaymentMethod,
        FName,
        Phno,
        email,
        Pin_code,
        House,
        Area,
        Landmark,
        City,
        State,
        subTotal,
        allTotal,
        Discount,
        allproduct,
        Tax,
        Discountproduct,
      } = req.body;
  
      try {
        let data = await OrderModel.create({
          userId,
          Price,
          quantity,
          customerorderdatetime,
          deliverydate,
          Totalamount,
          PaymentId,
          PaymentMethod,
          FName,
          Phno,
          email,
          Pin_code,
          House,
          Area,
          Landmark,
          City,
          State,
          subTotal,
          allTotal,
          Discount,
          allproduct,
          Tax,
          Discountproduct,
        });
        if (data) {
          let product = data.allproduct;
          for (let i = 0; i < product.length; i++) {
            let products = await addProductModel.findById(product[i].productId);
            if (products) {
              await addProductModel.findOneAndUpdate(
                { _id: products._id },
                {
                  P_Totalstock:
                    parseInt(products.P_Totalstock) -
                    parseInt(product[i].quantity),
                  // bestDeal:
                  //   parseInt(products.bestDeal) + parseInt(product[i].Quantity),
                }
              );
            }
          }
        } else {
          return res.status(400).json({ error: "Something went wrong" });
        }
        return res.status(200).json({ success: "order create successfully" });
      } catch (err) {
        console.log(err);
      }
    }
  
    // Cancle Order
    async CancleOrder(req, res) {
      let { Cancledate } = req.body;
      const odredId = req.params.id;
      try {
        const order = await OrderModel.findOneAndUpdate(
          { _id: odredId },
          { $set: { CancleProduct: true, CancleDate: Cancledate } },
          { new: true }
        );
  
        if (order) {
          return res.status(200).json({ success: "Cancle order" });
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    // Out For Delivery
    async OutforDelivery(req, res) {
      let { ArrivedD } = req.body;
      const odredId = req.params.id;
      try {
        const order = await OrderModel.findOneAndUpdate(
          { _id: odredId },
          { $set: { ArrivedStatus: true, ArrivedDate: ArrivedD } },
          { new: true }
        );
  
        if (order) {
          return res.status(200).json({ success: "Will Reached.....!" });
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    // Delivered
    async Delivered(req, res) {
      let {invoicedate}=req.body;
      const odredId = req.params.id;
      try {
        const order = await OrderModel.findOneAndUpdate(
          { _id: odredId },
          { $set: { DeliveredStatus: true ,InvoiceDate:invoicedate} },
          { new: true }
        );
        if (order) {
          return res.status(200).json({ success: "Delivered...!" });
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    async getCustomerOrder(req, res) {
      try {
        let userId = req.params.id;
        const OrderList = await OrderModel.find({})
          // .populate({path:'allproduct'})
          .populate("allproduct.productId")
          .populate("userId");
        if (OrderList.length != 0) {
          return res.status(200).json({ OrderList: OrderList });
        }
        return res.status(400).json({ error: "There is not users" });
      } catch (error) {
        console.log(error);
      }
    }
  
    async getCustomerOrderById(req, res) {
      try {
        let userId = req.params.id;
        const OrderList = await OrderModel.find({userId:userId})
          // .populate({path:'allproduct'})
          .populate("allproduct.productId")
          .populate("userId");
        if (OrderList.length != 0) {
          return res.status(200).json({ OrderList: OrderList });
        }
        return res.status(400).json({ error: "There is not users" });
      } catch (error) {
        console.log(error);
      }
    }
  }

  const OrderController = new Order();
  module.exports= OrderController
  