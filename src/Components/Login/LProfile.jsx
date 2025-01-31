import React, { useEffect } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./Styles/LProfile.css";
import { useNavigate } from "react-router-dom";

const LProfile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const [PasswordShow, setPasswordShow] = useState(false);
  const [confirmpasswordshow, setconfirmpasswordshow] = useState(false);

  const [show5, setShow5] = useState();
  const [show6, setShow6] = useState();

  const [isVisible, setIsVisible] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [address, setAddress] = useState("");

  const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
  const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const upadateprofile = async () => {
    if (name) {
      if (!nameRegex.test(name)) {
        return alert("Name is Invalid!!! Please enter valid name only!!!");
      }
    }
    if (number) {
      if (!phoneNumberRegex.test(number)) {
        return alert(
          "Mobile number is Invalid!!! Please enter valid mobile number only!!!"
        );
      }
    }
    if (email) {
      if (!emailRegex.test(email)) {
        return alert(
          "Email-id is Invalid!!! Please enter valid Email-id only!!!"
        );
      }
    }

    if (password && cpassword) {
      if (password !== cpassword) {
        return alert(
          "Password and confirm password is not matching!!! Please try again..."
        );
      }
      if (!passwordRegex.test(password)) {
        return alert(
          "Password is not strong!!! Password must contain min 8 digit atleast one upper case , one lowe case ,one numberic and one special characte"
        );
      }
    }
    try {
      const config = {
        url: "/UpdateUser",
        method: "put",
        baseURL: "http://saisathish.info/api/User",
        headers: { "content-type": "application/json" },
        data: {
          id: user?._id,
          name: name,
          phone: number,
          email: email,
          address: address,
          password: password,
        },
      };

      let res = await axios(config);

      if (res.status === 200) {
        console.log(res.data.success, "jijijijijijijij");
        alert("Update Success");
        handleClose5();
        // navigate("/LoginHome");
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    if (!user) {
      return alert("Please login first");
    }
  }, [user]);

  return (
    <div>
      <Container className="mt-3">
        <div className="row justify-content-between">
          {/* {User?.map((item) => {
            return ( */}

          <div className="profile-container text-center col-lg-4 mb-3">
            <img
              src={`http://saisathish.info/Product/${user?.agentprofile}`}
              alt="Admin"
              className="mt-5"
              width="70%"
              height="200px"
            />

            <h5 className="user-name">{user?.name}</h5>
          </div>

          <div className="profile-container-2 col-lg-8">
            <div className="profile-content-display">
              <div className="profile-user-deatils">
                <label className="profile-user-title">Full Name</label>
                <p className="profile-user-subtitle">{user?.name}</p>
              </div>
              <div className="profile-user-deatils">
                <label className="profile-user-title">Phone Number</label>
                <p className="profile-user-subtitle">{user?.phone}</p>
              </div>
              <div className="profile-user-deatils">
                <label className="profile-user-title">Email ID</label>
                <p className="profile-user-subtitle">{user?.email}</p>
              </div>
            </div>

            <div className="profile-content-display">
              <div className="profile-user-deatils">
                <label className="profile-user-title">Address</label>
                <p className="profile-user-subtitle">
                  {user?.address}, {user?.address2}
                </p>
              </div>
            </div>

            {/* <div className="profile-content-display">
                <div className="profile-user-deatils">
                  <label className="profile-user-title">Country</label>
                  <p className="profile-user-subtitle">{User?.Contury}</p>
                </div>
                <div className="profile-user-deatils">
                  <label className="profile-user-title">State</label>
                  <p className="profile-user-subtitle">{User?.State}</p>
                </div>
                <div className="profile-user-deatils">
                  <label className="profile-user-title">City</label>
                  <p className="profile-user-subtitle">{User?.City}</p>
                </div>
                <div className="profile-user-deatils">
                  <label className="profile-user-title">Pincode</label>
                  <p className="profile-user-subtitle">{User?.Pincode}</p>
                </div>
              </div> */}

            <div>
              <div className="edit-change-button">
                <Button
                  className="header-search"
                  onClick={() => {
                    // editRegUser();
                    handleShow5();
                  }}
                >
                  Edit Profile
                </Button>
                {/* <Button
                    className="header-search"
                    style={{ width: "auto" }}
                    onClick={() => {
                      handleShow6();
                    }}
                  >
                    Change Password
                  </Button> */}
              </div>
            </div>
          </div>

          {/* );
           })} */}
        </div>
      </Container>

      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 style={{ textAlign: "center" }}>Edit Your Profile</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="col-lg-12 mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-lg-12 mb-3">
              <label>Phone No</label>

              <input
                type="text"
                className="form-control"
                placeholder={user?.phone}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="col-lg-12 mb-3">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-lg-12 mb-3">
              <label htmlFor="">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder={user?.address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-lg-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              />
            </div>
          </Row>

          <div className="mb-4">
            <Button
              className="header-search"
              style={{ width: "100%" }}
              onClick={() => {
                upadateprofile();
              }}
            >
              Update
            </Button>
            {/* {isVisible && (
                <div className="popup-content">Profile Update Successfully</div>
              )} */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LProfile;
