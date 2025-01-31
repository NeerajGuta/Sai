import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function LCart() {
  const agentDetails = sessionStorage.getItem("user");
  const [addcart, setAddcart] = useState([]);
  const getaddcart = async (item) => {
    let user = JSON.parse(agentDetails);
    try {
      let res = await axios.get(
        "http://saisathish.info/api/Admin/getAddtoCart/" + user?._id
      );
      if (res.status === 200) {
        setAddcart(res.data.addtocart);
      }
    } catch (err) {
      setAddcart([]);
    }
  };
  const navigate = useNavigate();

  //   Increment and decrement
  const incQuntity = async (item, quantity) => {
    try {
      const config = {
        url: "/priceIncAnddec",
        method: "put",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "conten-type": "application/json" },
        data: {
          cartId: item?._id,
          quantity: quantity,
          price: item.productId.P_offerprice,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getaddcart();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const decQuntity = async (item, quantity) => {
    try {
      if (quantity !== 0) {
        const config = {
          url: "/priceIncAnddec",
          method: "put",
          baseURL: "http://saisathish.info/api/Admin",
          headers: { "conten-type": "application/json" },
          data: {
            cartId: item?._id,
            quantity: quantity,
            price: item.productId.P_offerprice,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          getaddcart();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletealladdcart = async (_id) => {
    let res = await axios.delete(
      "http://saisathish.info/api/Admin/DeleteAddtoCart/" + _id
    );
    if (res.status === 200) {
      alert("Successfully Deleted");
      getaddcart();
    }
  };

  let subtotal = 0;
  let total = 0;
  let discount = 0;
  let tax = 0;
  if (addcart?.length !== 0) {
    for (let i = 0; i < addcart.length; i++) {
      subtotal =
        subtotal + addcart[i]?.productId?.P_price * addcart[i].quantity;

      total = total + addcart[i]?.price * addcart[i]?.quantity;
      discount = subtotal - total;
      tax =
        tax +
        Math.round(
          addcart[i]?.productId?.P_price *
            ((addcart[i]?.productId?.P_cgst + addcart[i]?.productId?.P_sgst) /
              100)
        );
    }
  }

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    } else {
      getaddcart();
    }
  }, [agentDetails]);

  console.log("3232323-All cart project ", addcart);
  return (
    <div className="main-container">
      <Container>
        <div className="row align-items-center">
          <div className="col-lg-5">
            {addcart?.map((val) => {
              return (
                <div>
                  <div className="d-flex justify-content-start p-5">
                    <div style={{ marginRight: "20px" }}>
                      <img
                        src={`http://saisathish.info/Product/${val?.productId?.image1}`}
                        alt="no-image"
                        width="128px"
                      />
                    </div>
                    <div>
                      <div>
                        <h4>{val?.productId?.productName}</h4>
                      </div>
                      <div>
                        {val?.quantity} × {val?.price}₹ ={" "}
                        {val?.quantity * val?.price}₹
                      </div>
                      <div className="d-flex">
                        <div style={{ marginRight: "30px" }}>
                          <button
                            style={{
                              border: "0px",
                              backgroundColor: "#ffffff",
                              marginRight: "35px",
                            }}
                            onClick={() => decQuntity(val, val?.quantity - 1)}
                          >
                            -
                          </button>
                          {val?.quantity}
                          <button
                            style={{
                              border: "0px",
                              backgroundColor: "#ffffff",
                              marginLeft: "35px",
                            }}
                            onClick={() => incQuntity(val, val?.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <MdDeleteOutline
                          style={{ color: "red", fontSize: "27px" }}
                          onClick={() => deletealladdcart(val?._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-5">
            <h4>Total Amount = {total}₹</h4>
          </div>
          {addcart?.length ? (
            <div className="col-lg-2">
              <button
                style={{
                  border: "0px solid #3DD065",
                  backgroundColor: "#3DD065",
                  width: "105px",
                  height: "50px",
                  borderRadius: "10px",
                }}
                onClick={() => navigate("/LoginCheckout")}
              >
                Checkout
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  );
}
