import axios from "axios";
import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { HiEyeOff } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ForgotPassword() {
  const [email, setemail] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const otpSend = async () => {
    // e.preventDefault()
    if (!email) {
      return alert("Email id required !!!");
    }
    try {
      const config = {
        url: "/adminsendmail",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: { email: email },
      };
      let res = await axios(config);
      if (res.status == 200) {
        alert("Otp send your email");
        handleShow();
        // window.sessionStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      alert(error.response.data.error);
      console.log(error);
    }
  };

  const [otp, setOtp] = useState("");
  const otpVerification = async () => {
    // e.preventDefault()
    try {
      const config = {
        url: "/otpverification",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: { email: email, otp: otp },
      };
      let res = await axios(config);

      if (res.status == 200) {
        alert("Otp Verify Successfully");
        handleShow1();
        // window.sessionStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      alert(error.response.data.error);
      console.log(error);
    }
  };
  const [npasswords, setnpasswords] = useState("");
  const [confirmpasswords, setconfirmpasswords] = useState("");
  const resetpasswords = async () => {
    if (!npasswords) return alert("New password required !!!");
    if (npasswords != confirmpasswords)
      return alert("Confirm password did't match !!!");
    try {
      const config = {
        url: "/adminnewpassword",
        method: "put",
        baseURL: "http://saisathish.info/api/Admin",
        header: { "content-type": "application/json" },
        data: { email: email, password: npasswords },
      };
      await axios(config).then((res) => {
        // console.log(res);
        alert("Successfully reset your passwords");
        handleClose1();
        window.location.assign("/admin");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="add">
        <div className="container">
          <div className="fw_90">
            <div className="add_0">
              <div className="im09">
                <img
                  src="./assets/logo.webp"
                  alt="adminlogo"
                  className="di_90"
                />
              </div>
              <div className="add-90">
                <form>
                  <div className="sd_00 mb-2">
                    <label>Email</label> <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="name_0"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="sd_00 mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        // handleShow();
                        otpSend();
                      }}
                    >
                      Send Otp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {" "}
          <div className="sd_00 mb-2">
            <label>OTP</label> <br />
            <input
              type="email"
              placeholder="Enter Otp Number"
              className="name_0"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button
            variant="primary"
            onClick={() => {
              otpVerification();
            }}
          >
            Verify Otp
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {" "}
          <div className="sd_00 mb-2">
            <label>New Password</label> <br />
            <input
              type="email"
              placeholder="Enter new password"
              className="name_0"
              value={npasswords}
              onChange={(e) => setnpasswords(e.target.value)}
              required
            />
          </div>
          <div className="sd_00 mb-2">
            <label>Confirm Password</label> <br />
            <input
              type="email"
              placeholder="Enter confirm password"
              className="name_0"
              value={confirmpasswords}
              onChange={(e) => setconfirmpasswords(e.target.value)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={resetpasswords}>
            Sumbit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ForgotPassword;
