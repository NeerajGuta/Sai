import React from "react";
import { useState } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import axios from "axios";

export default function CbmLogin() {
  const navigate = useNavigate();

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [PasswordShow, setPasswordShow] = useState(false);
  const [confirmpasswordshow, setconfirmpasswordshow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginCBM = async () => {
    if (!email) {
      alert("Please Enter Your Email Id ");
      return;
    }

    if (!password) {
      alert("Please Enter Your Password");
    } else {
      try {
        const config = {
          url: "/logincbm",
          method: "post",
          baseURL: "http://saisathish.info/api/v1",
          headers: { "content-type": "application/json" },
          data: {
            email: email,
            password: password,
          },
        };

        let res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          sessionStorage.setItem(
            "CBMData",
            JSON.stringify(res.data.iscbmAvail)
          );
          setEmail("");
          setPassword("");
          navigate("/add-agents-cbm");
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  return (
    <div>
      <div className="login-container">
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
                <b>CBM Login</b>
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
                onClick={LoginCBM}
                className="header-search"
                style={{ width: "100%", backgroundColor: "orange" }}
              >
                Login
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
