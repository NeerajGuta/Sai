const AddtocartModel =require("../../Model/Admin/Addtocart");

class AddtoCart {
    async Addtocart(req, res) {
        let { userId, productId, price, quantity } = req.body;
        try {
          let check = await AddtocartModel.findOne({userId:userId, productId:productId})
          if(check){
            return res.status(400).json({error:"already in your cart"})
          }
          const Addlist = new AddtocartModel({
            userId,
            productId,
            price,
            quantity,
          });
          Addlist.save().then((data) => {
            return res.status(200).json({ success: "AddtoCart Successfully" });
          });
        } catch (error) {
          console.error(error);
        }
      }
      async getAddtoCart(req, res) {
        let userId = req.params.id;
        try {
          const AddtoCart = await AddtocartModel.find({ userId: userId }).populate(
            "productId"
          );
          if (AddtoCart.length !== 0) {
            return res.status(200).json({ addtocart: AddtoCart });
          }
          return res.status(400).json({ error: "There is not users" });
        } catch (error) {
          console.log(error);
        }
      }
    
      async DeleteAddtoCart(req, res) {
        try {
          const addtocartId = req.params.id;
          await AddtocartModel.deleteOne({ _id: addtocartId });
          return res.status(200).json({ success: "successfully Delete" });
        } catch (error) {
          console.log(error);
        }
      }
    
      async priceIncAnddec(req, res) {
        try {
          let { cartId, quantity, price } = req.body;
          let data = await AddtocartModel.findOneAndUpdate(
            { _id: cartId },
            { $set: { quantity, price } },
            { new: true }
          );
          if (!data)
            return res.status(400).json({ error: "Something went wrong!" });
          return res.status(200).json({ success: "Success" });
        } catch (error) {
          console.log(error);
        }
      }
    
      async getAllCartProductsByCustomer(req, res) {
        try {
          const userId = req.params.id;
          const cartProducts = await AddtocartModel.find({
            userId: userId,
          }).populate("productId");
    
          if (cartProducts.length !== 0) {
            return res.status(200).json({ CartProducts: cartProducts });
          } else {
            return res.status(400).json({ error: "Product not selected" });
          }
        } catch {
          return res.status(404).json({ error: "Something went wrong" });
        }
      }
    
      async deleteCart (req, res){
    
        const userId = req.params.id;
        try {
           await AddtocartModel.deleteMany({  userId:userId})
            return res.status(200).json({message:"Successfully Delete"})
        }catch(error){
          console.log(error);
        }
      } 
    
}
const AddtocartController= new AddtoCart();
module.exports = AddtocartController;