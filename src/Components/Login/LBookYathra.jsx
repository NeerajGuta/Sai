import React, { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import "./Styles/LBookYathra.css";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
const LBookYathra = () => {
  const agentDetails = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const [bus, setbus] = useState(true);
  const [Aeroplane, setAeroplane] = useState(false);

  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();
  const [show3, setShow3] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // =======================================================================
  const [data, setData] = useState([]);
  // const [acc, setacc] = useState(true);
  // const [acc1, setacc1] = useState(false);
  // const onPress1 = () => {
  //   setacc(true);
  //   setacc1(false);
  // };
  // const onPress2 = () => {
  //   setacc1(true);
  //   setacc(false);
  // };

  const priceObjects = data.map((item) => item?.price);
  const bus1 = priceObjects[0];
  const plan = priceObjects[1];
  const [amount, setAmount] = useState();
  // useEffect(() => {
  //   if (bus1) {
  //     setAmount(bus1);
  //   }
  // }, [bus1]);
  useEffect(() => {
    console.log("hgiifjfjfjfaf", bus1, plan, bus, Aeroplane);
    if (bus) {
      setAmount(bus1);
    }
  }, [priceObjects, bus]);

  useEffect(() => {
    console.log("hgiifjfjfjfaf", bus1, plan, bus, Aeroplane);
    if (Aeroplane) {
      setAmount(plan);
    }
  }, [priceObjects, Aeroplane]);

  const seatPrices = {
    1: amount,
    2: amount,
    3: amount,
    4: amount,
    5: amount,
    6: amount,
    7: amount,
    8: amount,
    9: amount,
    10: amount,
    11: amount,
    12: amount,
    13: amount,
    14: amount,
    15: amount,
    16: amount,
    17: amount,
    18: amount,
    19: amount,
    20: amount,
    21: amount,
    22: amount,
    23: amount,
    24: amount,
    25: amount,
    26: amount,
    27: amount,
    28: amount,
    29: amount,
    30: amount,
    31: amount,
    32: amount,
    33: amount,
    34: amount,
    35: amount,
    36: amount,
    37: amount,
    38: amount,
    39: amount,
    40: amount,
    41: amount,
    42: amount,
    43: amount,
    44: amount,
    // 45: amount,
    // 46: amount,
    // 47: amount,
    // 48: amount,
    // 49: amount,
  };

  function ViewSeatBus() {
    if (!selectedValue) {
      return alert("Please select the date first!!!");
    }
    handleShow();
  }

  function ViewSeatAeroplane() {
    if (!selectedValue1) {
      return alert("Please select the date first!!!");
    }
    handleShow1();
  }

  function enterTravellersDetails() {
    if (selectedSeats.length > 3) {
      return alert("Cannot Proceed!!! At time You can book only three seats.");
    } else if (!selectedSeats.length) {
      return alert("Cannot Proceed!!! Please select atleast one seat to book.");
    } else {
      handleShow2();
    }
  }

  function enterTravellersDetails1() {
    if (selectedSeats.length > 3) {
      return alert(
        "Cannot Proceed!!! At time You can book only three seats at a time."
      );
    } else if (!selectedSeats.length) {
      return alert("Cannot Proceed!!! Please select atleast one seat to book.");
    } else {
      handleShow3();
    }
  }

  const [loading, setloading] = useState(false);
  // console.log(data, 'Data');
  const getPackage = async () => {
    setloading(true);
    try {
      await axios
        .get("http://saisathish.info/api/v1/admin/getallpackage")
        .then((res) => {
          if (res.status == 200) {
            setData(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const htmlContent1 = data[0]?.lodingdetails;
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue1, setSelectedValue1] = useState("");
  const [pickupLocselectedValue, setpickupLocSelectedValue] = useState("");
  const [pickupLocselectedValue1, setpickupLocSelectedValue1] = useState("");

  const [displayBlock, setdisplayBlock] = useState(false);
  const [selectedDisplayid, setselectedDisplayid] = useState("");
  const [tripdates, setTripdates] = useState([]);
  const currentDate = new Date();
  const getTripdate = async () => {
    try {
      let res = await axios.get("http://saisathish.info/api/v1/getalltripdate");

      if (res.status == 200) {
        setTripdates(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [bookedSeatsDetails, setBookedSeatsDetails] = useState([]);
  const [bookedSeatsDetails1, setBookedSeatsDetails1] = useState([]);

  const handleSeatChange = (seatIndex, newValue) => {
    // Update the state with the new seat data
    const updatedBookedSeatsDetails = [...bookedSeatsDetails];
    updatedBookedSeatsDetails[seatIndex] = {
      ...updatedBookedSeatsDetails[seatIndex],
      ...newValue,
      // [newValue.name]: newValue.value,
    };

    console.log(updatedBookedSeatsDetails, "hihihiihi");
    setBookedSeatsDetails(updatedBookedSeatsDetails);
  };

  const handleSeatChange1 = (seatIndex, newValue) => {
    // Update the state with the new seat data
    const updatedBookedSeatsDetails1 = [...bookedSeatsDetails1];
    updatedBookedSeatsDetails1[seatIndex] = {
      ...updatedBookedSeatsDetails1[seatIndex],
      ...newValue,
      // [newValue.name]: newValue.value,
    };

    console.log(updatedBookedSeatsDetails1, "hihihiihi");
    setBookedSeatsDetails1(updatedBookedSeatsDetails1);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [allbooked, setAllBooked] = useState([]);
  // console.log('allboked', allbooked);
  const Allbookedseat = allbooked
    ?.filter(
      (ele) =>
        ele?.Bookingdate === selectedValue && ele?.bookedFor == "bookedforbus"
    )
    ?.map((item) => item?.SeatNo);

  const Allbookedseat1 = allbooked
    ?.filter(
      (ele) =>
        ele?.Bookingdate === selectedValue1 &&
        ele?.bookedFor == "bookedforflight"
    )
    ?.map((item) => item?.SeatNo);

  const Allbooking = async (item) => {
    let res = await axios.get(
      "http://saisathish.info/api/Admin/getAllBooking/"
    );
    if (res.status === 200) {
      setAllBooked(res.data.success);
    }
  };
  const [pickup, setPickup] = useState([]);
  const getPickup = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/getallpickuplocation")
        .then((res) => {
          if (res.status == 200) {
            setPickup(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(
    "lfolfoflfoflfof, ",
    pickup?.filter((item) => item?.triptype == "Air Package")
  );

  const [selectedSeats, setSelectedSeats] = useState([]);

  const isSeatSelected = (seatNumber) => selectedSeats.includes(seatNumber);

  const toggleSeat = (seatNumber) => {
    if (Allbookedseat?.flat().some((item) => item === seatNumber)) {
      alert("Seat Already Booked", `Seat ${seatNumber} is already booked.`);
      return;
    }

    // Check if the seat is already selected
    if (selectedSeats.includes(seatNumber)) {
      // Deselect the seat by removing it from the list
      const updatedSeats = selectedSeats.filter((item) => item !== seatNumber);
      setSelectedSeats(updatedSeats);
    } else {
      // Select the seat by adding it to the list
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  const getSeatBackgroundColor = (seatNumber) => {
    if (Allbookedseat.some((innerArray) => innerArray.includes(seatNumber))) {
      return "gray"; // All booked seats are gray
    } else if (isSeatSelected(seatNumber)) {
      return "#FDA4BA"; // Selected seats are a different color
    } else {
      return "#50C878"; // Available and unselected seats
    }
  };

  const toggleSeat1 = (seatNumber) => {
    if (Allbookedseat1?.flat().some((item) => item === seatNumber)) {
      alert("Seat Already Booked", `Seat ${seatNumber} is already booked.`);
      return;
    }

    // Check if the seat is already selected
    if (selectedSeats.includes(seatNumber)) {
      // Deselect the seat by removing it from the list
      const updatedSeats = selectedSeats.filter((item) => item !== seatNumber);
      setSelectedSeats(updatedSeats);
    } else {
      // Select the seat by adding it to the list
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  const getSeatBackgroundColor1 = (seatNumber) => {
    if (Allbookedseat1.some((innerArray) => innerArray.includes(seatNumber))) {
      return "gray"; // All booked seats are gray
    } else if (isSeatSelected(seatNumber)) {
      return "#FDA4BA"; // Selected seats are a different color
    } else {
      return "#50C878"; // Available and unselected seats
    }
  };

  const calculateTotalAmount = () => {
    return selectedSeats.reduce((total, seatNumber) => {
      return Number(total) + Number(seatPrices[seatNumber]);
    }, 0);
  };

  // ===================== booking payment status starts ====================

  const [orderId, setOrderId] = useState("PARCEL1594201192");
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=${orderId}`
  // );
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `https://saisathish.info/api/Admin/callbackWeb`
  // );
  const [callbackUrl, setcallbackUrl] = useState(
    `http://saisathish.info/api/Admin/callbackWebY`
  );
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `http://localhost:3000/api/Admin/callbackWeb`
  // );
  // const [callbackUrl, setcallbackUrl] = useState(
  //   `http://localhost:3000/LoginHome`
  // );

  const concatenatedStringB = bookedSeatsDetails
    .map(
      (item) =>
        `Name:${item.name}, Age:${item.age},Gender:${item?.gender},SeatNo:${item?.seatno}`
    )
    .join(", ");

  const concatenatedStringF = bookedSeatsDetails
    .map(
      (item) =>
        `Name:${item.name}, Age:${item.age},Gender:${item?.gender},SeatNo:${item?.seatno}`
    )
    .join(", ");
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

  function postB(details) {
    const form = buildForm(details);
    console.log("form: ", form);
    // navigate("/LPaymentOrder", { state: JSON.stringify(form) });
    let parent = document.getElementById("payment-id-1-B");
    // parent = ``;
    parent.appendChild(form);
    form.submit();
    form.remove();
    // placeorder("sfaf4423233ds");
    // document.body.appendChild(form);
    // form.submit();
    // form.remove();
  }

  function postF(details) {
    const form = buildForm(details);
    console.log("form: ", form);
    // navigate("/LPaymentOrder", { state: JSON.stringify(form) });
    let parent = document.getElementById("payment-id-1-F");
    // parent = ``;
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

  const makePaymentB = () => {
    let user = JSON.parse(agentDetails);
    let orderId = generateOrderId();

    let value = calculateTotalAmount();

    // Data validation
    // `Name:${item.name}, Age:${item.age},Gender:${item?.gender},SeatNo:${item?.seatno}`
    if (selectedSeats?.length !== bookedSeatsDetails?.length) {
      return alert("Please fill the details properly!!!");
    }

    if (!name || !email || !mobile) {
      return alert("Please fill the contact details");
    }
    const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
    if (!nameRegex.test(name)) {
      return alert("Name is Invalid!!! Please enter valid name only!!!");
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return alert(
        "Email-id is Invalid!!! Please enter valid Email-id only!!!"
      );
    }

    const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
    if (!phoneNumberRegex.test(mobile)) {
      return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
    }

    if (!pickupLocselectedValue) {
      return alert("Please select pickup location");
    }

    sessionStorage.setItem(
      "demoYatraB",
      JSON.stringify({
        userId: user?._id,
        name: name,
        email: email,
        mobile: mobile,
        Bookingdate: selectedValue,
        returndate: selectedValue1,
        FromArea: pickupLocselectedValue,
        pickuplocation: pickupLocselectedValue,
        destination: "Shirdi",
        SeatNo: selectedSeats,
        customerdetails: bookedSeatsDetails,
        amount: value,
        Total: value,
        PaymentMethod: "Online",
        // PayId: txnid,
        Status: "Booked",
        bookedFor: "bookedforbus",
      })
    );

    sessionStorage.setItem(
      "demoMailYatraB",
      JSON.stringify({
        name: name,
        mobile: mobile,
        email: email,
        comment: "Booking Confirm",
        startdate: selectedValue,
        returndate: selectedValue1,
        from: pickupLocselectedValue,
        to: "Shirdi",
        seatno: selectedSeats,
        customerdetais: concatenatedStringB,
        TotalAmount: calculateTotalAmount(),
      })
    );

    getData({
      amount: calculateTotalAmount(),
      email: email,
      phone: mobile,
      userId: user._id,
      orderId: orderId,
      callbackUrl: `http://saisathish.info/api/Admin/callbackWebY`,
    }).then((response) => {
      console.log(response, 88989898989898889898989);
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      console.log(information, 12222112122);
      postB(information);
    });
  };

  const makePaymentF = () => {
    let user = JSON.parse(agentDetails);
    let orderId = generateOrderId();

    let value = calculateTotalAmount();

    // Data validation
    // `Name:${item.name}, Age:${item.age},Gender:${item?.gender},SeatNo:${item?.seatno}`
    if (selectedSeats?.length !== bookedSeatsDetails1?.length) {
      return alert("Please fill the details properly!!!");
    }

    if (!name || !email || !mobile) {
      return alert("Please fill the contact details");
    }
    const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
    if (!nameRegex.test(name)) {
      return alert("Name is Invalid!!! Please enter valid name only!!!");
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return alert(
        "Email-id is Invalid!!! Please enter valid Email-id only!!!"
      );
    }

    const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
    if (!phoneNumberRegex.test(mobile)) {
      return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
    }

    if (!pickupLocselectedValue1) {
      return alert("Please select pickup location");
    }

    sessionStorage.setItem(
      "demoYatraF",
      JSON.stringify({
        userId: user?._id,
        name: name,
        email: email,
        mobile: mobile,
        Bookingdate: selectedValue1,
        returndate: selectedValue,
        FromArea: pickupLocselectedValue1,
        pickuplocation: pickupLocselectedValue1,
        destination: "Shirdi",
        SeatNo: selectedSeats,
        customerdetails: bookedSeatsDetails1,
        amount: value,
        Total: value,
        PaymentMethod: "Online",
        // PayId: txnid,
        Status: "Booked",
        bookedFor: "bookedforflight", //'bookedforbus', 'bookedforflight'
      })
    );

    sessionStorage.setItem(
      "demoMailYatraF",
      JSON.stringify({
        name: name,
        mobile: mobile,
        email: email,
        comment: "Booking Confirm",
        startdate: selectedValue1,
        returndate: selectedValue,
        from: pickupLocselectedValue1,
        to: "Shirdi",
        seatno: selectedSeats,
        customerdetais: concatenatedStringF,
        TotalAmount: calculateTotalAmount(),
      })
    );

    getData({
      amount: calculateTotalAmount(),
      email: user?.email,
      phone: mobile,
      userId: user._id,
      orderId: orderId,
      callbackUrl: `http://saisathish.info/api/Admin/callbackWebYF`,
    }).then((response) => {
      console.log(response, 88989898989898889898989);
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      console.log(information, 12222112122);
      postF(information);
    });
  };

  // ===================== booking payment status finish ====================

  // =====================booking ytra starts ====================

  // const [passengerName, setpassengerName] = useState("");
  // const [passengerAge, setpassengerAge] = useState();
  // const [gender, setgender] = useState("");
  const placeorderB = async (txnid) => {
    // console.log(txnid, 'dddeedff');
    let value = calculateTotalAmount();
    let user = JSON.parse(agentDetails);

    // Data validation
    // `Name:${item.name}, Age:${item.age},Gender:${item?.gender},SeatNo:${item?.seatno}`
    if (selectedSeats?.length !== bookedSeatsDetails?.length) {
      return alert("Please fill the details properly!!!");
    }

    if (!name || !email || !mobile) {
      return alert("Please fill the contact details");
    }
    const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
    if (!nameRegex.test(name)) {
      return alert("Name is Invalid!!! Please enter valid name only!!!");
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return alert(
        "Email-id is Invalid!!! Please enter valid Email-id only!!!"
      );
    }

    const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
    if (!phoneNumberRegex.test(mobile)) {
      return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
    }

    if (!pickupLocselectedValue) {
      return alert("Please select pickup location");
    }

    try {
      const config = {
        url: "/booking",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: {
          userId: user?._id,
          name: name,
          email: email,
          mobile: mobile,
          Bookingdate: selectedValue,
          returndate: selectedValue1,
          FromArea: pickupLocselectedValue,
          pickuplocation: pickupLocselectedValue,
          destination: "Shirdi",
          SeatNo: selectedSeats,
          customerdetails: bookedSeatsDetails,
          amount: value,
          Total: value,
          PaymentMethod: "Online",
          PayId: txnid,
          Status: "Booked",
          bookedFor: "bookedforbus", //'bookedforbus', 'bookedforflight'
        },
      };
      console.log("idhar chala", config);

      await axios(config)
        .then(function (res) {
          if ((res.status = 200)) {
            console.log("success");
            alert("Booking  Successfully");
            SendmailB();
            navigate("/LoginBookedDetails");
          }
        })
        .catch((error) => {
          console.log("mai udhar chala", error);
        });
    } catch (error) {
      console.log(error);
      alert("Unable to Booking");
    }
  };

  // console.log(concatenatedString, 'concatenatedString');
  const SendmailB = async () => {
    let user = JSON.parse(agentDetails);
    try {
      const config = {
        url: "/sendMailBookedDetails",
        method: "post",
        baseURL: "http://saisathish.info/api/User",
        header: { "content-type": "application/Json" },
        data: {
          name: name,
          mobile: mobile,
          email: email,
          comment: "Booking Confirm",
          startdate: selectedValue,
          returndate: selectedValue1,
          from: pickupLocselectedValue,
          to: "Shirdi",
          seatno: selectedSeats,
          customerdetais: concatenatedStringB,
          TotalAmount: calculateTotalAmount(),
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        alert("Mail Sent Successfully");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const placeorderF = async (txnid) => {
    // console.log(txnid, 'dddeedff');
    let user = JSON.parse(agentDetails);
    let value = calculateTotalAmount();

    // Data validation
    // `Name:${item.name}, Age:${item.age},Gender:${item?.gender},SeatNo:${item?.seatno}`
    if (selectedSeats?.length !== bookedSeatsDetails1?.length) {
      return alert("Please fill the details properly!!!");
    }

    if (!name || !email || !mobile) {
      return alert("Please fill the contact details");
    }
    const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
    if (!nameRegex.test(name)) {
      return alert("Name is Invalid!!! Please enter valid name only!!!");
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return alert(
        "Email-id is Invalid!!! Please enter valid Email-id only!!!"
      );
    }

    const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
    if (!phoneNumberRegex.test(mobile)) {
      return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
    }

    if (!pickupLocselectedValue1) {
      return alert("Please select pickup location");
    }

    try {
      const config = {
        url: "/booking",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: {
          userId: user?._id,
          name: name,
          email: email,
          mobile: mobile,
          Bookingdate: selectedValue1,
          returndate: selectedValue,
          FromArea: pickupLocselectedValue1,
          pickuplocation: pickupLocselectedValue1,
          destination: "Shirdi",
          SeatNo: selectedSeats,
          customerdetails: bookedSeatsDetails1,
          amount: value,
          Total: value,
          PaymentMethod: "Online",
          PayId: txnid,
          Status: "Booked",
          bookedFor: "bookedforflight", //'bookedforbus', 'bookedforflight'
        },
      };
      await axios(config).then(function (res) {
        if ((res.status = 200)) {
          console.log("success");
          alert("Booking  Successfully");
          SendmailF();
          navigate("/LoginBookedDetails");
        }
      });
    } catch (error) {
      console.log(error);
      alert("Unable to Booking");
    }
  };

  // console.log(concatenatedString, 'concatenatedString');
  const SendmailF = async () => {
    let user = JSON.parse(agentDetails);
    try {
      const config = {
        url: "/sendMailBookedDetails",
        method: "post",
        baseURL: "http://saisathish.info/api/User",
        header: { "content-type": "application/Json" },
        data: {
          name: name,
          mobile: mobile,
          email: email,
          comment: "Booking Confirm",
          startdate: selectedValue1,
          returndate: selectedValue,
          from: pickupLocselectedValue1,
          to: "Shirdi",
          seatno: selectedSeats,
          customerdetais: concatenatedStringF,
          TotalAmount: calculateTotalAmount(),
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        alert("Mail Sent Successfully");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  pickup
    ?.filter((item) => item?.triptype == "Air Package")
    ?.map((ele) => console.log(9099090900, ele?.pickuplocation));

  // ====================booking ytra finish ================

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    } else {
      getPackage();
      getTripdate();
      Allbooking();
      getPickup();
    }
  }, [agentDetails]);

  console.log("yuiyiuiuyiuiu: ", data);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img
              src="./img/bussiness-img-1.webp"
              alt=""
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 text-center">
            <div
              style={{
                display: "flex",
                gap: "15rem",
                justifyContent: "center",
              }}
              className="yuyh"
            >
              <div
                className="buttons-bus-air"
                onClick={() => {
                  setSelectedSeats([]);
                  setbus(true);
                  setAeroplane(false);
                }}
                style={{
                  border: "1px solid #69CC4D",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "8%",
                }}
              >
                <img
                  src="./img/school-bus.png"
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <p> Bus Package</p>
              </div>
              <div
                className="buttons-bus-air"
                onClick={() => {
                  setSelectedSeats([]);
                  setbus(false);
                  setAeroplane(true);
                }}
                style={{
                  border: "1px solid #69CC4D",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "8%",
                }}
              >
                <img
                  src="./img/airplane.png"
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <p> Air Package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {bus ? (
        <>
          {data
            ?.filter((p) => p.packagetype.toLowerCase().includes("bus"))
            .map((ele) => {
              return (
                <div className="container">
                  <div
                    className="row mt-2"
                    style={{
                      backgroundColor: "#DDDDDD",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="col-md-12 text-center">
                      <h2>
                        <b style={{ color: "#69CC4D" }}>{ele.packagetype}</b>
                      </h2>
                      <h4>
                        <b>{ele?.packagename}</b> ( ₹{ele?.price}/person)
                      </h4>
                      <h5>
                        <b>Date of Journey</b> ({ele?.journeytitle}){" "}
                      </h5>
                    </div>
                    <div className="col-md-12 text-center">
                      <label htmlFor="">Select Date</label>
                      <br />
                      <select
                        name=""
                        id=""
                        className="vi_00"
                        onChange={(e) => setSelectedValue(e.target.value)}
                      >
                        <option value="">--Select Date--</option>
                        {tripdates
                          ?.filter((a) => a?.triptype == ele?.packagetype)[0]
                          ?.tripdates?.filter((element) => {
                            const tripDate = new Date(element?.startdate);

                            return tripDate >= currentDate;
                          })
                          ?.map((element) => {
                            return (
                              <option value={element?.startdate}>
                                {element?.startdate}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      backgroundColor: "#DDDDDD",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="col-md-5">
                      <div className="contact-form-section">
                        <div className="form-container">
                          <div className="faq">
                            <h2>TOUR ITINERARY</h2>
                            <ul
                              // className="accordian"
                              style={{ padding: "0px" }}
                            >
                              {ele?.itinerary?.map((val, i) => {
                                // const data = val?.text;
                                return (
                                  <li>
                                    <input
                                      type="radio"
                                      // name="accordian"
                                      id="first"
                                      style={{
                                        // display: flex;
                                        // align-items: center;
                                        listStyle: "none",
                                        width: "100%",
                                        padding: "5px",
                                      }}
                                    />
                                    <label
                                      htmlFor="first"
                                      style={{
                                        // display: flex;
                                        // align-items: center;
                                        padding: "20px",
                                        fontSize: "18px",
                                        fontWeight: "500",
                                        marginBottom: "2px",
                                        cursor: "pointer",
                                        position: "relative",
                                        background: "#69CC4D",
                                        color: "white",
                                        width: "100%",
                                      }}
                                      onClick={() => {
                                        setdisplayBlock(!displayBlock);
                                        setselectedDisplayid(val?._id);
                                      }}
                                    >
                                      {val?.dayName}
                                    </label>

                                    <div
                                      // id={`id-${val?._id}`}
                                      className="content"
                                      style={{
                                        display: `${
                                          displayBlock &&
                                          selectedDisplayid == val?._id
                                            ? ""
                                            : "none"
                                        }`,
                                      }}
                                    >
                                      <p>
                                        {parse(`
                                        <div style="width: 100%; max-width: 300px; text-align: justify; color: black;">
                                          ${val?.text}
                                        </div>
                                        `)}
                                      </p>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="contact-form-section">
                        <div className="faq">
                          <h2>Menu Chart</h2>
                          <div className="table-width">
                            <Table bordered responsive>
                              <thead bordered>
                                <th>Day</th>
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Evening</th>
                                <th>Night</th>
                              </thead>
                              <tbody>
                                {ele?.menuchart?.map((decode) => {
                                  return (
                                    <tr>
                                      <td>{decode?.daysName}</td>
                                      <td>{decode?.morning}</td>
                                      <td>{decode?.afternoon}</td>
                                      <td>{decode?.evining}</td>
                                      <td>{decode?.night}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 p-4 d-flex justify-content-evenly">
                      {/* <div className=""> */}
                      <div>
                        <h4>
                          <b>Lodging Details</b>
                        </h4>
                        <h6>
                          {parse(`
                                        <div style="text-align: justify;color:black">
                                          ${htmlContent1}
                                        </div>
                                        `)}
                        </h6>
                        {/* <h6>Day 2 Night @ Tuljapur (3 star hotel)</h6>
                        <h6>Day 3 Night @ Tuljapur (3 star hotel)</h6>
                        <h6>Day 4 Night @ Tuljapur (3 star hotel)</h6> */}
                      </div>
                      <div style={{ paddingTop: "4rem" }}>
                        <button
                          className="btn btn-success"
                          onClick={ViewSeatBus}
                        >
                          View Seats
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <>
          {Aeroplane ? (
            <>
              {data
                .filter((p) => !p.packagetype.toLowerCase().includes("bus"))

                ?.map((e) => {
                  return (
                    <div className="container">
                      <div
                        className="row mt-2"
                        style={{
                          backgroundColor: "#DDDDDD",
                          padding: "10px",
                          borderRadius: "15px",
                        }}
                      >
                        <div className="col-md-12 text-center">
                          <h2>
                            <b style={{ color: "#69CC4D" }}>{e.packagetype}</b>
                          </h2>
                          <h4>
                            <b>{e?.packagename}</b> ( ₹{e?.price}/person)
                          </h4>
                          <h5>
                            <b>Date of Journey</b> ({e?.journeytitle}){" "}
                          </h5>
                        </div>
                        <div className="col-md-12 text-center">
                          <label htmlFor="">Select Date</label>
                          <br />
                          <select
                            name=""
                            id=""
                            className="vi_00"
                            onChange={(e) => setSelectedValue1(e.target.value)}
                          >
                            <option value="">--Select Date--</option>
                            {tripdates
                              ?.filter((a) => a?.triptype == e?.packagetype)[0]
                              ?.tripdates?.filter((element) => {
                                const tripDate = new Date(element?.startdate);
                                return tripDate >= currentDate;
                              })
                              ?.map((element) => {
                                return (
                                  <option value={element?.startdate}>
                                    {element?.startdate}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{
                          backgroundColor: "#DDDDDD",
                          padding: "10px",
                          borderRadius: "15px",
                        }}
                      >
                        <div className="col-md-5">
                          <div className="contact-form-section">
                            <div className="form-container">
                              <div className="faq">
                                <h2>TOUR ITINERARY</h2>
                                <ul
                                  // className="accordian"
                                  style={{ padding: "0px" }}
                                >
                                  {e?.itinerary?.map((val, i) => {
                                    const data = val?.text;
                                    return (
                                      <li>
                                        <input
                                          type="radio"
                                          // name="accordian"
                                          id="first"
                                          style={{
                                            // display: flex;
                                            // align-items: center;
                                            listStyle: "none",
                                            width: "100%",
                                            padding: "5px",
                                          }}
                                        />
                                        <label
                                          htmlFor="first"
                                          style={{
                                            // display: flex;
                                            // align-items: center;
                                            padding: "20px",
                                            fontSize: "18px",
                                            fontWeight: "500",
                                            marginBottom: "2px",
                                            cursor: "pointer",
                                            position: "relative",
                                            background: "#69CC4D",
                                            color: "white",
                                            width: "100%",
                                          }}
                                          onClick={() => {
                                            setdisplayBlock(!displayBlock);
                                            setselectedDisplayid(val?._id);
                                          }}
                                        >
                                          {val?.dayName}
                                        </label>
                                        <div
                                          className="content"
                                          style={{
                                            display: `${
                                              displayBlock &&
                                              selectedDisplayid == val?._id
                                                ? ""
                                                : "none"
                                            }`,
                                          }}
                                        >
                                          <p>
                                            {parse(`
                                        <div style="width: 100%; max-width: 300px; text-align: justify; color: black;">
                                          ${val?.text}
                                        </div>
                                        `)}
                                          </p>
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="contact-form-section">
                            <div className="faq">
                              <h2>Menu Chart</h2>
                              <div className="table-width">
                                <Table bordered responsive>
                                  <thead bordered>
                                    <th>Day</th>
                                    <th>Morning</th>
                                    <th>Afternoon</th>
                                    <th>Evening</th>
                                    <th>Night</th>
                                  </thead>
                                  <tbody>
                                    {e?.menuchart?.map((decode) => {
                                      return (
                                        <tr>
                                          <td>{decode?.daysName}</td>
                                          <td>{decode?.morning}</td>
                                          <td>{decode?.afternoon}</td>
                                          <td>{decode?.evining}</td>
                                          <td>{decode?.night}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-evenly gap-4">
                          {/* <div className=""> */}
                          <div>
                            <h4>
                              <b>Lodging Details</b>
                            </h4>
                            <h6>
                              {parse(`
                                        <div style="text-align: justify;color:black">
                                        ${e?.lodingdetails}
                                        </div>
                                        `)}
                            </h6>
                          </div>
                          <div style={{ paddingTop: "4rem" }}>
                            <button
                              className="btn btn-success"
                              onClick={ViewSeatAeroplane}
                            >
                              View Seats
                            </button>
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            <></>
          )}
        </>
      )}

      <div id="payment-id-1-B"></div>
      <div id="payment-id-1-F"></div>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#69CC4D", color: "white" }}
        >
          <Modal.Title>
            <h4>Select Your Choice of Seat</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{
                      backgroundColor: "#FDA4BA",
                      borderRadius: "50%",
                      width: "20px",
                    }}
                  >
                    <div>
                      <p className="ms-3">
                        <b>Selected</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{
                      backgroundColor: "#139c49",
                      borderRadius: "50%",
                      width: "20px",
                    }}
                  >
                    <div>
                      <p className="ms-3">
                        <b>Available</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{
                      backgroundColor: "#4F4F4F",
                      borderRadius: "50%",
                      width: "20px",
                    }}
                  >
                    <div>
                      <p className="ms-3">
                        <b>Booked</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3 p-4">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-end">
                <div className="d-flex gap-3">
                  <p
                    className="seats"
                    style={{ backgroundColor: getSeatBackgroundColor(3) }}
                    onClick={() => toggleSeat(3)}
                  >
                    3
                  </p>
                  <p
                    className="seats"
                    style={{ backgroundColor: getSeatBackgroundColor(4) }}
                    onClick={() => toggleSeat(4)}
                  >
                    4
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(1) }}
                      onClick={() => toggleSeat(1)}
                    >
                      1
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(2) }}
                      onClick={() => toggleSeat(2)}
                    >
                      2
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(7) }}
                      onClick={() => toggleSeat(7)}
                    >
                      7
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(8) }}
                      onClick={() => toggleSeat(8)}
                    >
                      8
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(5) }}
                      onClick={() => toggleSeat(5)}
                    >
                      5
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(6) }}
                      onClick={() => toggleSeat(6)}
                    >
                      6
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(11) }}
                      onClick={() => toggleSeat(11)}
                    >
                      11
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(12) }}
                      onClick={() => toggleSeat(12)}
                    >
                      12
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(9) }}
                      onClick={() => toggleSeat(9)}
                    >
                      9
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(10) }}
                      onClick={() => toggleSeat(10)}
                    >
                      10
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(15) }}
                      onClick={() => toggleSeat(15)}
                    >
                      15
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(16) }}
                      onClick={() => toggleSeat(16)}
                    >
                      16
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(13) }}
                      onClick={() => toggleSeat(13)}
                    >
                      13
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(14) }}
                      onClick={() => toggleSeat(14)}
                    >
                      14
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(19) }}
                      onClick={() => toggleSeat(19)}
                    >
                      19
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(20) }}
                      onClick={() => toggleSeat(20)}
                    >
                      20
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(17) }}
                      onClick={() => toggleSeat(17)}
                    >
                      17
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(18) }}
                      onClick={() => toggleSeat(18)}
                    >
                      18
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(23) }}
                      onClick={() => toggleSeat(23)}
                    >
                      23
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(24) }}
                      onClick={() => toggleSeat(24)}
                    >
                      24
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(21) }}
                      onClick={() => toggleSeat(21)}
                    >
                      21
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(22) }}
                      onClick={() => toggleSeat(22)}
                    >
                      22
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(27) }}
                      onClick={() => toggleSeat(27)}
                    >
                      27
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(28) }}
                      onClick={() => toggleSeat(28)}
                    >
                      28
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(25) }}
                      onClick={() => toggleSeat(25)}
                    >
                      25
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(26) }}
                      onClick={() => toggleSeat(26)}
                    >
                      26
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(31) }}
                      onClick={() => toggleSeat(31)}
                    >
                      31
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(32) }}
                      onClick={() => toggleSeat(32)}
                    >
                      32
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(29) }}
                      onClick={() => toggleSeat(29)}
                    >
                      29
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(30) }}
                      onClick={() => toggleSeat(30)}
                    >
                      30
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(35) }}
                      onClick={() => toggleSeat(35)}
                    >
                      35
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(36) }}
                      onClick={() => toggleSeat(36)}
                    >
                      36
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(33) }}
                      onClick={() => toggleSeat(33)}
                    >
                      33
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(34) }}
                      onClick={() => toggleSeat(34)}
                    >
                      34
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(37) }}
                      onClick={() => toggleSeat(37)}
                    >
                      37
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(38) }}
                      onClick={() => toggleSeat(38)}
                    >
                      38
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className="d-flex gap-1">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(39) }}
                      onClick={() => toggleSeat(39)}
                    >
                      39
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(40) }}
                      onClick={() => toggleSeat(40)}
                    >
                      40
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(41) }}
                      onClick={() => toggleSeat(41)}
                    >
                      41
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(42) }}
                      onClick={() => toggleSeat(42)}
                    >
                      42
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(43) }}
                      onClick={() => toggleSeat(43)}
                    >
                      43
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor(44) }}
                      onClick={() => toggleSeat(44)}
                    >
                      44
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 text-center">
                <p
                  style={{
                    backgroundColor: "#08080845",
                    padding: "10px",
                    borderRadius: "3px",
                  }}
                >
                  ₹ {calculateTotalAmount()}, For Seat No
                  {`(${selectedSeats.join(", ")})`}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="success" onClick={enterTravellersDetails}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#69CC4D", color: "white" }}
        >
          <Modal.Title>
            <h4>Select Your Choice of Seat</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{
                      backgroundColor: "#FDA4BA",
                      borderRadius: "50%",
                      width: "20px",
                    }}
                  >
                    <div>
                      <p className="ms-3">
                        <b>Selected</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{
                      backgroundColor: "#139c49",
                      borderRadius: "50%",
                      width: "20px",
                    }}
                  >
                    <div>
                      <p className="ms-3">
                        <b>Available</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{
                      backgroundColor: "#4F4F4F",
                      borderRadius: "50%",
                      width: "20px",
                    }}
                  >
                    <div>
                      <p className="ms-3">
                        <b>Booked</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3 p-4">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-end">
                <div className="d-flex gap-3">
                  <p
                    className="seats"
                    style={{ backgroundColor: getSeatBackgroundColor1(3) }}
                    onClick={() => toggleSeat1(3)}
                  >
                    3
                  </p>
                  <p
                    className="seats"
                    style={{ backgroundColor: getSeatBackgroundColor1(4) }}
                    onClick={() => toggleSeat1(4)}
                  >
                    4
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(1) }}
                      onClick={() => toggleSeat1(1)}
                    >
                      1
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(2) }}
                      onClick={() => toggleSeat1(2)}
                    >
                      2
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(7) }}
                      onClick={() => toggleSeat1(7)}
                    >
                      7
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(8) }}
                      onClick={() => toggleSeat1(8)}
                    >
                      8
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(5) }}
                      onClick={() => toggleSeat1(5)}
                    >
                      5
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(6) }}
                      onClick={() => toggleSeat1(6)}
                    >
                      6
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(11) }}
                      onClick={() => toggleSeat1(11)}
                    >
                      11
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(12) }}
                      onClick={() => toggleSeat1(12)}
                    >
                      12
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(9) }}
                      onClick={() => toggleSeat1(9)}
                    >
                      9
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(10) }}
                      onClick={() => toggleSeat1(10)}
                    >
                      10
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(15) }}
                      onClick={() => toggleSeat1(15)}
                    >
                      15
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(16) }}
                      onClick={() => toggleSeat1(16)}
                    >
                      16
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(13) }}
                      onClick={() => toggleSeat1(13)}
                    >
                      13
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(14) }}
                      onClick={() => toggleSeat1(14)}
                    >
                      14
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(19) }}
                      onClick={() => toggleSeat1(19)}
                    >
                      19
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(20) }}
                      onClick={() => toggleSeat1(20)}
                    >
                      20
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(17) }}
                      onClick={() => toggleSeat1(17)}
                    >
                      17
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(18) }}
                      onClick={() => toggleSeat1(18)}
                    >
                      18
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(23) }}
                      onClick={() => toggleSeat1(23)}
                    >
                      23
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(24) }}
                      onClick={() => toggleSeat1(24)}
                    >
                      24
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(21) }}
                      onClick={() => toggleSeat1(21)}
                    >
                      21
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(22) }}
                      onClick={() => toggleSeat1(22)}
                    >
                      22
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(27) }}
                      onClick={() => toggleSeat1(27)}
                    >
                      27
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(28) }}
                      onClick={() => toggleSeat1(28)}
                    >
                      28
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(25) }}
                      onClick={() => toggleSeat1(25)}
                    >
                      25
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(26) }}
                      onClick={() => toggleSeat1(26)}
                    >
                      26
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(31) }}
                      onClick={() => toggleSeat1(31)}
                    >
                      31
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(32) }}
                      onClick={() => toggleSeat1(32)}
                    >
                      32
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(29) }}
                      onClick={() => toggleSeat1(29)}
                    >
                      29
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(30) }}
                      onClick={() => toggleSeat1(30)}
                    >
                      30
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(35) }}
                      onClick={() => toggleSeat1(35)}
                    >
                      35
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(36) }}
                      onClick={() => toggleSeat1(36)}
                    >
                      36
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(33) }}
                      onClick={() => toggleSeat1(33)}
                    >
                      33
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(34) }}
                      onClick={() => toggleSeat1(34)}
                    >
                      34
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(37) }}
                      onClick={() => toggleSeat1(37)}
                    >
                      37
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(38) }}
                      onClick={() => toggleSeat1(38)}
                    >
                      38
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className="d-flex gap-1">
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(39) }}
                      onClick={() => toggleSeat1(39)}
                    >
                      39
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(40) }}
                      onClick={() => toggleSeat1(40)}
                    >
                      40
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(41) }}
                      onClick={() => toggleSeat1(41)}
                    >
                      41
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(42) }}
                      onClick={() => toggleSeat1(42)}
                    >
                      42
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(43) }}
                      onClick={() => toggleSeat1(43)}
                    >
                      43
                    </p>
                    <p
                      className="seats"
                      style={{ backgroundColor: getSeatBackgroundColor1(44) }}
                      onClick={() => toggleSeat1(44)}
                    >
                      44
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 text-center">
                <p
                  style={{
                    backgroundColor: "#08080845",
                    padding: "10px",
                    borderRadius: "3px",
                  }}
                >
                  ₹ {calculateTotalAmount()}, For Seat No
                  {`(${selectedSeats.join(", ")})`}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose1}
          >
            Close
          </Button>
          <Button variant="success" onClick={enterTravellersDetails1}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={show2} onHide={handleClose2}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#69CC4D", color: "white" }}
        >
          <Modal.Title>
            <h4>Yatra Traveller Details</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              {selectedSeats.map((seatNumber, index) => (
                <div className="col-md-12">
                  <p>
                    <b>Seat No: {seatNumber}</b>
                  </p>
                  <input
                    type="text"
                    className="vi_0"
                    placeholder="Enter Your Name"
                    // value={passengerName}
                    onChange={(e) => {
                      const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
                      if (!nameRegex.test(e.target.value)) {
                        // setpassengerName(e.target.value);
                        e.target.value = "";
                        return alert(
                          "Name is Invalid!!! Please enter valid name only!!!"
                        );
                      } else {
                        // setpassengerName("");
                        handleSeatChange(index, {
                          name: e.target.value,
                          seatno: seatNumber,
                        });
                      }
                    }}
                  />
                  <input
                    type="number"
                    className="vi_0 mt-2"
                    // value={passengerAge}
                    placeholder="Enter Your Age"
                    onChange={(e) => {
                      if (
                        Number(e.target.value) < 1 ||
                        Number(e.target.value) > 200
                      ) {
                        // setpassengerAge(0);
                        e.target.value = "";
                        return alert(
                          "Age is Invalid!!! Please enter valid Age only!!!"
                        );
                      } else {
                        // setpassengerAge(e.target.value);
                        handleSeatChange(index, { age: e.target.value });
                      }
                    }}
                  />
                  <select
                    className="vi_0 mt-2 mb-2"
                    // value={gender}
                    onChange={(e) => {
                      if (
                        e.target.value !== "Male" &&
                        e.target.value !== "Female" &&
                        e.target.value !== "Other"
                      ) {
                        // setgender("");
                        e.target.value = "";
                        return alert(
                          "Gender is Invalid!!! Please enter valid Gender only!!!"
                        );
                      } else {
                        // setgender(e.target.value);
                        handleSeatChange(index, {
                          gender: e.target.value,
                        });
                      }
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              ))}
              <div className="col-md-12 mt-4">
                <p>
                  <b>Contact Details</b>
                </p>
                <input
                  type="text"
                  className="vi_0"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="vi_0 mt-2"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  className="vi_0 mt-2"
                  placeholder="Enter Your Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="col-md-12 mt-4">
                <p>
                  <b>Select Your Pickup location With Time</b>
                </p>
                <select
                  name=""
                  id=""
                  className="vi_0"
                  onChange={(e) => setpickupLocSelectedValue(e.target.value)}
                >
                  <option value="">--select Pickup Location--</option>
                  {pickup
                    ?.filter((item) =>
                      item?.triptype.toLowerCase().includes("bus")
                    )
                    ?.map((ele) => {
                      return (
                        <option value={ele?.pickuplocation}>
                          {ele?.pickuplocation}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div
                className="col-md-12 text-center mt-3 d-flex justify-content-between"
                style={{
                  backgroundColor: "#08080845",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p>Total Amount</p>
                <p>₹{calculateTotalAmount()}</p>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              makePaymentB();
              // placeorderB()
            }}
          >
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="md" show={show3} onHide={handleClose3}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#69CC4D", color: "white" }}
        >
          <Modal.Title>
            <h4>Yathra Traveller Details</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              {selectedSeats.map((seatNumber, index) => (
                <div className="col-md-12">
                  <p>
                    <b>Seat No: {seatNumber}</b>
                  </p>
                  <input
                    type="text"
                    className="vi_0"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
                      if (!nameRegex.test(e.target.value)) {
                        // setpassengerName(e.target.value);
                        e.target.value = "";
                        return alert(
                          "Name is Invalid!!! Please enter valid name only!!!"
                        );
                      } else {
                        handleSeatChange1(index, {
                          name: e.target.value,
                          seatno: seatNumber,
                        });
                      }
                    }}
                  />
                  <input
                    type="text"
                    className="vi_0 mt-2"
                    placeholder="Enter Your Age"
                    onChange={(e) => {
                      if (
                        Number(e.target.value) < 1 ||
                        Number(e.target.value) > 200
                      ) {
                        // setpassengerAge(0);
                        e.target.value = "";
                        return alert(
                          "Age is Invalid!!! Please enter valid Age only!!!"
                        );
                      } else {
                        handleSeatChange1(index, { age: e.target.value });
                      }
                    }}
                  />
                  <select
                    className="vi_0 mt-2 mb-2"
                    onChange={(e) => {
                      if (
                        e.target.value !== "Male" &&
                        e.target.value !== "Female" &&
                        e.target.value !== "Other"
                      ) {
                        // setgender("");
                        e.target.value = "";
                        return alert(
                          "Gender is Invalid!!! Please enter valid Gender only!!!"
                        );
                      } else {
                        handleSeatChange1(index, {
                          gender: e.target.value,
                        });
                      }
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              ))}
              <div className="col-md-12 mt-4">
                <p>
                  <b>Contact Details</b>
                </p>
                <input
                  type="text"
                  className="vi_0"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="vi_0 mt-2"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  className="vi_0 mt-2"
                  placeholder="Enter Your Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="col-md-12 mt-4">
                <p>
                  <b>Select Your Pickup location With Time</b>
                </p>
                <select
                  name=""
                  id=""
                  className="vi_0"
                  onChange={(e) => setpickupLocSelectedValue1(e.target.value)}
                >
                  <option value="">--select Pickup Location--</option>
                  {pickup
                    ?.filter(
                      (item) => !item?.triptype.toLowerCase().includes("bus")
                    )
                    ?.map((ele) => {
                      return (
                        <option value={ele?.pickuplocation}>
                          {ele?.pickuplocation}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div
                className="col-md-12 text-center mt-3 d-flex justify-content-between"
                style={{
                  backgroundColor: "#08080845",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p>Total Amount</p>
                <p>₹{calculateTotalAmount()}</p>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              makePaymentF();
              // placeorderF();
            }}
          >
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LBookYathra;
