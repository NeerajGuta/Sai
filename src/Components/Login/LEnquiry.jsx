import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LEnquiry = () => {
  const agentDetails = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [comment, setComment] = useState("");
  let [user, setUser] = useState({});

  const Enquirypost = async () => {
    user = JSON.parse(agentDetails);
    if (!name) {
      alert("Please Enter Your  Name");
      return;
    } else {
      const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
      if (!nameRegex.test(name)) {
        return alert("Name is Invalid!!! Please enter valid name only!!!");
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

    if (!mobile) {
      alert("Enter Contact Number");
      return;
    } else {
      const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
      if (!phoneNumberRegex.test(mobile)) {
        return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
      }
    }
    if (!comment) {
      alert("Enter Comment");
      return;
    } else {
      try {
        const config = {
          url: "/AddEnquire",
          method: "post",
          baseURL: "http://saisathish.info/api/Admin",
          headers: { "content-type": "application/json" },
          data: {
            userId: user?._id,
            name: name,
            email: email,
            mobile: mobile,
            enquiretype: enquiry,
            enquireCommenets: comment,
          },
        };

        let res = await axios(config);

        if (res.status === 200) {
          console.log(res.data.success);
          alert("Submitted enquiry successfully");
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

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    }
  }, [agentDetails]);

  const buttonWidth = 70;

  return (
    <div>
      <Container>
        <div
          onClick={handleShow}
          style={{
            marginLeft: buttonWidth,
            whiteSpace: "nowrap",
          }}
        >
          <div className="scroll_top_button active_0 kk ">
            <img
              src="../img/customer-service.png"
              alt=""
              style={{ width: "30px", height: "30px" }}
            />

            <p style={{ fontSize: "12px", color: "#000", fontWeight: "bold" }}>
              Enquiry Now
            </p>
          </div>
        </div>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="business-img-text mb-0">
            <p style={{ color: "#69CC4D" }}> Enquiry Now</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label>Name</label>
              <input
                style={{ border: "1px solid #69CC4D" }}
                type="text"
                className="form-control  mb-3"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Phone No</label>
              <input
                style={{ border: "1px solid #69CC4D" }}
                type="number"
                className="form-control mb-3"
                placeholder="Number"
                aria-label="Number"
                aria-describedby="basic-addon1"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div>
              <label>Email ID</label>
              <input
                style={{ border: "1px solid #69CC4D" }}
                type="email"
                className="form-control mb-3"
                placeholder="Email ID"
                aria-label="Email ID"
                aria-describedby="basic-addon1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Enquire </label>
              <textarea
                style={{ border: "1px solid #69CC4D" }}
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div>
            {" "}
            <button
              className="enquery-now "
              style={{ width: "300px" }}
              onClick={Enquirypost}
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default LEnquiry;
