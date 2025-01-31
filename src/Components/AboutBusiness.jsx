import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

const AboutBusiness = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state } = useLocation();

  const [Subject, setSubject] = useState(state?.Title);
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");

  const sendmail = async () => {
    try {
      if (!Subject) return alert("Please Select Business / Services");
      if (!Name) return alert("Please Enter Your Name");
      if (!Number) return alert("Please Enter Your Number");
      if (!Email) return alert("Please Enter Your Email");
      if (!Msg) return alert("Do Not leave Empty Comment Section");

      const config = {
        url: "/sendmailforenquiry",
        method: "post",
        baseURL: "http://saisathish.info/api/user",
        headers: { "content-type": "application/Json" },
        data: {
          subject: Subject,
          name: Name,
          mobile: Number,
          email: Email,
          comment: Msg,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        alert("Mail Sent Successfully");
        window.location.assign("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <h2
          data-aos="fade-right"
          data-aos-duration="3000"
          className="all-home-head"
        >
          {state?.Head}
        </h2>

        <div className="row ">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-lg-6 mb-3"
          >
            <img src={state?.Image} alt="" className="about-business-img" />
          </div>
          <div className="col-lg-6">
            <h4 className="business-img-text mb-4">{state?.Title}</h4>
            <p className="mb-2" style={{ textAlign: "justify" }}>
              {state?.description}
            </p>
            <p className="mb-2" style={{ textAlign: "justify" }}>
              {state?.description1 ? parse(state?.description1) : ""}
            </p>

            <p className="mb-2" style={{ textAlign: "justify" }}>
              {state?.description2 ? parse(state?.description2) : ""}
            </p>

            <p className="mb-2" style={{ textAlign: "justify" }}>
              {state?.description3 ? parse(state?.description3) : ""}
            </p>
          </div>
          <p
            className="mb-2"
            style={{ textAlign: "justify", fontWeight: "bold" }}
          >
            {state?.description4}
          </p>

          <p style={{ textAlign: "justify" }}>
            {state?.description5 ? parse(state?.description5) : ""}
          </p>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleShow}
              className="enquery-now mt-5"
              style={{ width: "300px" }}
            >
              Enquiry Now
            </button>
          </div>
        </div>
      </Container>

      {/* ENQUERY NOW MODAL */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="business-img-text mb-0">
            Enquiry Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <div className="col-lg-3">
              <img
                src={state?.Image}
                alt=""
                style={{ width: "100%", marginBottom: "15px" }}
              />
            </div>
            <div className="col-lg-9">
              <h4 className="business-img-text fs-3">{state?.Title}</h4>
            </div>
          </div>

          <div>
            <h6 className="business-img-text">Personal Details</h6>
            <div>
              <input
                style={{ border: "1px solid #dcf334" }}
                type="text"
                className="form-control  mb-3"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                style={{ border: "1px solid #dcf334" }}
                type="number"
                className="form-control mb-3"
                placeholder="Number"
                aria-label="Number"
                aria-describedby="basic-addon1"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div>
              <input
                style={{ border: "1px solid #dcf334" }}
                type="email"
                className="form-control mb-3"
                placeholder="Email ID"
                aria-label="Email ID"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                style={{ border: "1px solid #dcf334" }}
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
                onChange={(e) => setMsg(e.target.value)}
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
              onClick={sendmail}
            >
              Send Mail
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AboutBusiness;
