import React from "react";
import { useState } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
// import "../styles/login.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
// import loginlogo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  //   const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  // const [show, setShow] = useState();
  // const [show1, setShow1] = useState();
  // const [show2, setShow2] = useState();
  // const [show3, setShow3] = useState();
  // const [show4, setShow4] = useState();

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);

  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  // const handleClose4 = () => setShow4(false);
  // const handleShow4 = () => setShow4(true);

  const [PasswordShow, setPasswordShow] = useState(false);
  const [confirmpasswordshow, setconfirmpasswordshow] = useState(false);

  //==============================================
  // const notify = (data) => toast.success(data);
  // const notify1 = (data) => toast.warn(data);
  // const notify2 = (data) => toast.error(data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginAgent = async () => {
    console.log(email, password);
    if (!email) {
      alert("Please Enter Your Email Id ");
      return;
    }

    if (!password) {
      alert("Please Enter Your Password");
    } else {
      try {
        const config = {
          url: "/UserLogin",
          method: "post",
          baseURL: "http://saisathish.info/api/User",
          headers: { "content-type": "application/json" },
          data: {
            email: email,
            password: password,
          },
        };

        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data.success);
          alert("Login Successfully");
          sessionStorage.setItem("user", JSON.stringify(res.data.success));
          setEmail("");
          setPassword("");
          navigate("/LoginHome");
        }
      } catch (error) {
        console.log("error", error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  // const handleToggle = () => {
  //   if (type === "password") {
  //     setIcon(eye);
  //     setType("text");
  //   } else {
  //     setIcon(eyeOff);
  //     setType("password");
  //   }
  // };
  return (
    <div>
      <div className="login-container">
        {/* <ToastContainer
            position="top-center"
            autoClose={10000}
            closeOnClick
            pauseOnHover
            draggable
          /> */}
        <Container>
          <div className="login-bg">
            <div className="login mb-4">
              <img
                src="../img/logo.webp"
                alt=""
                className="footer-logo"
                style={{ width: "100%", height: "100px" }}
              />
              <center className="mt-2">
                <b>Booking Agent Login</b>
              </center>
              {/* <p className="text-secondary">Enter Your Details</p> */}
            </div>

            <div className="mb-4">
              <InputGroup className="mb-4">
                <Form.Control
                  className="login-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <div className="col-lg-12 mb-3">
                <InputGroup className="col-lg-3 mb-3">
                  <Form.Control
                    type={PasswordShow ? "text" : "password"}
                    className="login-input"
                    placeholder="Password"
                    aria-describedby="basic-addon1"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  {PasswordShow ? (
                    <button
                      style={{ width: "10%", border: "1px solid #DEDEDE" }}
                      onClick={() => setPasswordShow(!PasswordShow)}
                      className="passbtn"
                    >
                      <FaEye style={{ color: "#778700" }} />
                    </button>
                  ) : (
                    <button
                      style={{ width: "10%", border: "1px solid #DEDEDE" }}
                      onClick={() => setPasswordShow(!PasswordShow)}
                      className="passbtn"
                    >
                      <FaEyeSlash style={{ color: "#778700" }} />
                    </button>
                  )}
                </InputGroup>
              </div>
            </div>

            <div className="mb-4">
              <Button
                // onClick={() => navigate("/LoginHome")}
                onClick={LoginAgent}
                className="header-search"
                style={{ width: "100%", backgroundColor: "orange" }}
              >
                Login
              </Button>
            </div>

            {/* <div className="text-center mb-4">
                <p>
                  <span
                    onClick={handleShow}
                    style={{ color: "#d81d4a", cursor: "pointer" }}
                  >
                    Forgot Password
                  </span>{" "}
                  | Are you a new user ? |{" "}
                  <span
                    style={{
                      color: "#d81d4a",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </span>
                </p>
              </div> */}
          </div>
        </Container>
      </div>

      {/* OTP VERIFICATion */}

      {/* <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src={loginlogo}
              alt=""
              className="footer-logo"
              style={{
                width: "60%",
                height: "160px",
                margin: "auto",
                display: "flex",
              }}
            />
            <h4 style={{ textAlign: "center" }}>Verification</h4>
            <p style={{ textAlign: "center" }}>
              We will Send you an <b>One Time Password</b> <br></br>on this mobile
              number
            </p>
            <Row>
              <div
                className="col-lg-6 mb-3"
                style={{ textAlign: "center", margin: "auto", display: "flex" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>
            </Row>
  
            <div className="mb-4">
              <Button
                className="header-search"
                style={{ width: "100%" }}
                onClick={handleShow4}
              >
                Get OTP
              </Button>
            </div>
          </Modal.Body>
        </Modal> */}

      {/* Enter OTP Modal */}
      {/* <Modal show={show4} onHide={handleClose4}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src={loginlogo}
              alt=""
              className="footer-logo"
              style={{
                width: "48%",
                height: "160px",
                margin: "auto",
                display: "flex",
              }}
            />
            <h4 style={{ textAlign: "center" }}>OTP Verification</h4>
            <p style={{ textAlign: "center" }}>
              Enter the OTP Sent to<b>+91 - 8804574992</b>
            </p>
            <Row>
              <div
                className="col-lg-6 mb-3"
                style={{ textAlign: "center", margin: "auto", display: "flex" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter The OTP"
                />
              </div>
            </Row>
  
            <div className="mb-4">
              <Button
                onClick={() => {
                  navigate("/register");
                }}
                className="header-search"
                style={{ width: "100%" }}
              >
                Verify and Proceed
              </Button>
            </div>
          </Modal.Body>
        </Modal> */}

      {/* Forgot Password Modal */}

      {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="login mb-4">
              <h4 style={{ color: "orange" }}>Forgot Password</h4>
              <p className="text-secondary">Enter Your Email</p>
            </div>
  
            <InputGroup className="mb-4">
              <Form.Control
                className="login-input"
                type="email"
                placeholder="Email Id"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
  
            <div className="mb-4">
              <Button
                onClick={handleShow1}
                className="header-search"
                style={{ width: "100%" }}
              >
                Send Mail
              </Button>
            </div>
          </Modal.Body>
        </Modal> */}

      {/* OTP Modal */}

      {/* <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="login mb-4">
              <h4>
                Enter Your <span className="text-danger">OTP</span>
              </h4>
            </div>
            <InputGroup className="mb-4">
              <Form.Control
                className="login-input"
                type="text"
                placeholder="Enter OTP"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
  
            <div className="mb-4">
              <Button
                onClick={handleShow2}
                className="header-search"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal> */}

      {/* New Password */}

      {/* <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="login mb-4">
              <h4>
                Enter New <span className="text-danger"> Password </span>
              </h4>
            </div>
            <InputGroup className="mb-4">
              <Form.Control
                className="login-input"
                type="password"
                placeholder="New Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
  
            <InputGroup className="mb-4">
              <Form.Control
                className="login-input"
                type="password"
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
  
            <div className="mb-4">
              <Button className="header-search" style={{ width: "100%" }}>
                Save
              </Button>
            </div>
          </Modal.Body>
        </Modal> */}
    </div>
  );
};

export default Login;
