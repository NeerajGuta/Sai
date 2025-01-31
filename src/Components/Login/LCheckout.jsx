import React, { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LCheckout() {
  const formData = new FormData();

  let jsonData;
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  // jsonData = JSON.parse(sessionStorage.getItem("jsonData"));

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  jsonData = JSON.parse(urlParams.get("data"));
  // const formData = new URLSearchParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for delete
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const navigate = useNavigate();

  const agentDetails = sessionStorage.getItem("user");
  const [addcart, setAddcart] = useState([]);
  const [allCartData, setAllCartData] = useState([]);
  const getaddcart = async (item) => {
    let user = JSON.parse(agentDetails);
    let res = await axios.get(
      "http://saisathish.info/api/Admin/getAddtoCart/" + user?._id
    );
    if (res.status === 200) {
      setAddcart(res.data.addtocart);
      setAllCartData(res.data.addtocart);
    }
  };

  console.log(allCartData, "allCartData");
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

  //get address
  const [getaddress, setgetaddress] = useState([]);
  const [showAddress, setshowAress] = useState({});
  const [checkradio, setcheckradio] = useState();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [house, setHouse] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [View, setView] = useState({});
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mobilevalid = /^[6-9][0-9]{9}$/;

  let getAddress = async () => {
    let user = JSON.parse(agentDetails);
    try {
      let res = await axios.get(
        "http://saisathish.info/api/Admin/getAddress/" + user?._id
      );
      if (res.status === 200) {
        console.log("chdkfkfsafdasf", res.data.Address);
        setgetaddress(res.data.Address);
        setshowAress(res.data.Address[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ===================== Add Address =====================

  const Addaddress = async () => {
    let user = JSON.parse(agentDetails);

    if (!name) {
      alert("Enter your Name");
      return;
    } else {
      const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
      if (!nameRegex.test(name)) {
        return alert("Name is Invalid!!! Please enter valid name only!!!");
      }
    }
    if (!number) {
      alert("Enter Contact Number");
      return;
    } else {
      const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
      if (!phoneNumberRegex.test(number)) {
        return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
      }
    }

    if (!email) {
      alert("Please Enter Your Email Id ");
      return;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        return alert(
          "Email-id is Invalid!!! Please enter valid Email-id only!!!"
        );
      }
    }

    if (!house) {
      alert("Enter Your House");
      return;
    }
    if (!area) {
      alert("Enter Your Area");
      return;
    }
    if (!landmark) {
      alert("Enter Your Landmark");
      return;
    }
    if (!selectedState) {
      return alert("Enter Your State");
    }
    if (!selectedCity) {
      alert("Enter Your City");
      return;
    } else {
      try {
        const config = {
          url: "/Admin/Addaddress",
          method: "post",
          baseURL: "http://saisathish.info/api",
          headers: { "content-type": "application/json" },
          data: {
            userId: user._id,
            name: name,
            mobile: number,
            email: email,

            houseno: house,
            village: area,

            city: selectedCity,
            state: selectedState,
          },
        };

        let res = await axios(config);

        if (res.status === 200) {
          console.log("successss", res.data.success);
          setName("");
          setNumber("");
          setEmail("");
          setHouse("");
          setArea("");
          setLandmark("");
          setSelectedState("");
          setSelectedCity("");
          getAddress();
          handleClose();
          alert("Added Successfully.");

          // navigation.navigate('Home');
        }
      } catch (error) {
        console.log(error);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  // ===================== Delete Address =====================
  const deleteaddress = async () => {
    try {
      let res = await axios.delete(
        "http://saisathish.info/api/Admin/deleteaddress/" + View?._id
      );
      if (res.status === 200) {
        handleClose1();
        getAddress();
        alert("Address Deleted successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // =========== online payment===============
  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getFullYear() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getDate() +
    "/ " +
    myCurrentDate.getHours() +
    ":" +
    myCurrentDate.getMinutes() +
    ":" +
    myCurrentDate.getSeconds();
  const newCurrentDate = date;

  // const [paymentmethod, setpaymentmethod] = useState('');
  const [Payid, setpayid] = useState();

  const placeorder = async (PaymentId) => {
    let user = JSON.parse(agentDetails);
    console.log({
      userId: user._id,
      Price: total,
      quantity: "",
      customerorderdatetime: newCurrentDate,
      deliverydate: "",
      Totalamount: total,
      PaymentId: PaymentId,
      PaymentMethod: "Online",
      FName: user?.name,
      Phno: user?.phone,
      email: user?.email,

      House: showAddress?.houseno,
      Area: showAddress?.houseno,
      Landmark: showAddress?.village,
      City: showAddress?.city,
      State: showAddress?.state,
      subTotal: total,
      allTotal: total,
      Discount: discount,
      allproduct: allCartData,

      Discountproduct: discount,
    });
    if (Object.keys(showAddress).length) {
      // if (!paymentmethod) {
      //   return alert('Please Select The Payment Method');
      // }
      // else
      try {
        const config = {
          url: "/orderproduct",
          method: "post",
          baseURL: "http://saisathish.info/api/Admin",
          headers: { "content-type": "application/json" },
          data: {
            userId: user._id,
            Price: total,
            quantity: "",
            customerorderdatetime: newCurrentDate,
            deliverydate: "",
            Totalamount: total,
            PaymentId: PaymentId,
            PaymentMethod: "Online",
            FName: user?.name,
            Phno: user?.phone,
            email: user?.email,

            House: showAddress?.houseno,
            Area: showAddress?.houseno,
            Landmark: showAddress?.village,
            City: showAddress?.city,
            State: showAddress?.state,
            subTotal: total,
            allTotal: total,
            Discount: discount,
            allproduct: allCartData,

            Discountproduct: discount,
          },
        };
        await axios(config).then(function (res) {
          if ((res.status = 200)) {
            console.log("success");
            alert("Order Placed Successfully");
            navigate("/LoginOrderHistroy");
          }
        });
      } catch (error) {
        console.log(error);
        alert("Unable to place Order");
      }
    } else {
      alert("Please Select The Shipping Address");
    }
  };

  // const Razorpay = async () => {
  //   let user = JSON.parse(agentDetails);

  //   if (!Object.keys(getaddress).length) {
  //     return alert("Please select the shipping address");
  //   } else if (!checkradio) {
  //     return alert("Please select the shipping address");
  //     // } else if (!paymentmethod) {
  //     //   return alert('Please select the Payment method');
  //     // } else if (paymentmethod !== 'Online Payment') {
  //     //   return placeorder();
  //   } else {
  //     try {
  //       var options = {
  //         key: "rzp_test_5vCRZ6rLM2wGN4",
  //         amount: total * 100,
  //         currency: "INR",
  //         name: "Sai Group",
  //         description: "Order Amount",
  //         image: "../logo.png",
  //         customerId: 237462374,
  //         handler: function (response) {
  //           alert(response.razorpay_payment_id);
  //           placeorder(response.razorpay_payment_id);
  //         },
  //         prefill: {
  //           name: user?.name,
  //           email: user?.email,
  //           contact: user?.phone,
  //         },
  //       };

  //       RazorpayCheckout.open(options)
  //         .then((data) => {
  //           // handle success
  //           alert(`Success: ${data.razorpay_payment_id}`);
  //           placeorder(data.razorpay_payment_id);
  //         })
  //         .catch((error) => {
  //           // handle failure
  //           alert(`Error: ${error.code} | ${error.description}`);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  //====================start=================================

  const [orderId, setOrderId] = useState("PARCEL1594201192");
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=${orderId}`
  // );
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `https://saisathish.info/api/Admin/callbackWeb`
  // );
  const [callbackUrl, setcallbackUrl] = useState(
    `http://saisathish.info/api/Admin/callbackWeb`
  );
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `http://localhost:3000/api/Admin/callbackWeb`
  // );
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `http://localhost:3000/LoginHome`
  // );

  // const [callbackUrl, setcallbackUrl] = useState(
  //   `http://saisatishgroups.com/LoginBuy`
  // );
  const generateOrderId = () => {
    const r = Math.random() * new Date().getMilliseconds();
    setOrderId(
      "PARCEL" +
        (1 + Math.floor(r % 2000) + 10000) +
        "b" +
        (Math.floor(r % 100000) + 10000)
    );
    let val =
      "PARCEL" +
      (1 + Math.floor(r % 2000) + 10000) +
      "b" +
      (Math.floor(r % 100000) + 10000);
    return val;
  };
  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);
    form.setAttribute("id", "form-paytm-id");

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  function post(details) {
    const form = buildForm(details);
    console.log("form: ", form);

    let parent = document.getElementById("payment-id-1");
    parent.appendChild(form);
    form.submit();
    form.remove();

    // placeorder("sfaf4423233ds");
    // document.body.appendChild(form);
    // form.submit();
    // form.remove();
  }

  const getData = (data) => {
    return fetch(`http://saisathish.info/api/Admin/paytmMadiWeb`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const makePayment = () => {
    if (!checkradio) {
      return alert("Please select shipping address!!!");
    }
    let user = JSON.parse(agentDetails);
    let orderId = generateOrderId();

    sessionStorage.setItem(
      "demostore",
      JSON.stringify({
        userId: user._id,
        Price: total,
        quantity: "",
        // customerorderdatetime: newCurrentDate,
        deliverydate: "",
        Totalamount: total,
        // PaymentId: PaymentId,
        PaymentMethod: "Online",
        FName: user?.name,
        Phno: user?.phone,
        email: user?.email,

        House: showAddress?.houseno,
        Area: showAddress?.houseno,
        Landmark: showAddress?.village,
        City: showAddress?.city,
        State: showAddress?.state,
        subTotal: total,
        allTotal: total,
        Discount: discount,
        allproduct: allCartData,

        Discountproduct: discount,
      })
    );

    getData({
      amount: total,
      email: user?.email,
      phone: user.phone,
      userId: user._id,
      orderId: orderId,
      callbackUrl: callbackUrl,
    }).then((response) => {
      console.log(response, 88989898989898889898989);
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      console.log(information, 12222112122);
      post(information);

      // formData.append("CALLBACK_URL", response.CALLBACK_URL);
      // formData.append("CHANNEL_ID", response.CHANNEL_ID);
      // formData.append("CHECKSUMHASH", response.CHECKSUMHASH);
      // formData.append("CUST_ID", response.CUST_ID);
      // formData.append("EMAIL", response.EMAIL);
      // formData.append("INDUSTRY_TYPE_ID", response.INDUSTRY_TYPE_ID);
      // formData.append("MID", response.MID);
      // formData.append("MOBILE_NO", response.MOBILE_NO);
      // formData.append("ORDER_ID", response.ORDER_ID);
      // formData.append("TXN_AMOUNT", response.TXN_AMOUNT);
      // formData.append("WEBSITE", response.WEBSITE);
      // console.log(formdata);
      // gettingData(formData);
    });
  };

  // const gettingData = (data) => {
  //   try {
  //     console.log(data, "<<<<>>>>><<<>>><<><><><><><><");
  //     fetch("https://securegw-stage.paytm.in/order/process", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: formData.toString(), // Send the Paytm callback data to the backend
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // Parse the "success" JSON string inside the response
  //         // const successData = JSON.parse(data.success);

  //         // Extract information from successData
  //         // const {
  //         //   body: {
  //         //     resultInfo,
  //         //     txnId,
  //         //     orderId: callbackOrderId,
  //         //     txnAmount,
  //         //     txnDate,
  //         //   },
  //         // } = successData;

  //         console.log("Transaction Details1111:", data.success);

  //         // Update your UI or perform other actions based on the transaction details
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const gettingData = (data) => {
  //   try {
  //     console.log(data, "<<<<>>>>><<<>>><<><><><><><><");
  //     fetch("https://securegw-stage.paytm.in/order/process", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: formData.toString(),
  //     })
  //       .then((res) => {
  //         console.log("Response Status:", res.status);
  //         return res.text();
  //       })
  //       .then((jsonData) => {
  //         console.log("Transaction Details1111:", jsonData);
  //         let parent = document.getElementById("payment-id-1");
  //         parent.appendChild(jsonData);
  //         // Update your UI or perform other actions based on the transaction details
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //====================finish=================================

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    } else {
      getaddcart();
      getAddress();

      // Check if the current URL contains the callbackWeb route
      // if (window.location.href.includes("/callbackWeb")) {
      //   // If it does, handle the redirection
      //   navigate("/LoginHome");
      // }
    }
  }, [agentDetails]);

  if (jsonData && !count) {
  }

  console.log("hellow: ", jsonData);

  return (
    <div className="main-container">
      <div
        className="d-flex justify-content-center p-5"
        style={{ textAlign: "center" }}
      >
        <div
          className="container"
          style={{
            // border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            width: "1050px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            textAlign: "center",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <h3 style={{ textAlign: "center" }}>Order Details</h3>
              <div style={{ padding: "10px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>1. Price</h6>
                  <h6>₹ {total}</h6>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>2. Product Discount</h6>
                  <h6>₹ 0</h6>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>3. Total Amount</h6>
                  <h6>₹ {total}</h6>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>4. Payment Method</h6>
                  <h6>Online</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 style={{ textAlign: "center" }}>Shipping Address</h3>
              <div style={{ padding: "10px" }}>
                {Object.keys(getaddress).length ? (
                  <div>
                    {getaddress.map((item) => {
                      return (
                        <div style={{ display: "flex" }}>
                          <div>
                            <input
                              type="radio"
                              id="huey"
                              name="drone"
                              value="huey"
                              style={{ display: "block", marginRight: "10px" }}
                              status={
                                checkradio?._id == item._id
                                  ? "checked"
                                  : "unchecked"
                              }
                              onClick={() => setcheckradio(item)}
                            />
                          </div>
                          <h6>
                            {" "}
                            {item?.name},{item?.mobile},{item?.email}, House No
                            = {item?.houseno},Area ={item?.village}, City ={" "}
                            {item?.city}
                            ,State = {item?.state}
                          </h6>
                          <div style={{ marginLeft: "20px" }}>
                            <MdDeleteOutline
                              onClick={() => {
                                setView(item);
                                handleShow1();
                              }}
                              style={{ color: "red", fontSize: "27px" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
                <button
                  style={{
                    border: "0px solid #3DD065",
                    backgroundColor: "#3DD065",
                    width: "105px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleShow()}
                >
                  Add Address
                </button>
              </div>
            </div>
          </div>
          <button
            style={{
              border: "0px solid #3DD065",
              backgroundColor: "#3DD065",
              width: "105px",
              height: "40px",
              borderRadius: "10px",
            }}
            onClick={() => {
              makePayment();
            }}
            // onClick={() => placeorder()}
          >
            Place Order
          </button>
        </div>
      </div>
      <div id="payment-id-1"></div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="Number"
                placeholder="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email: name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="House Number "
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => Addaddress()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b>
              Are You sure you want to{" "}
              <span style={{ color: "red" }}>delete</span> the Address?
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => deleteaddress()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
