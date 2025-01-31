import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { state } = useLocation();

  const [Subject, setSubject] = useState("Contact Us");
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

  return (
    <div>
      <Container className="mt-4">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> Contact Us</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>

        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.1764043381856!2d77.53774972636448!3d13.076812405896385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae235f0a8b57a7%3A0xaea5b061a969b5d1!2sParnets%20software!5e0!3m2!1sen!2sin!4v1692872970433!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="row ">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-lg-6"
            style={{ backgroundColor: "#dcf334", padding: "20px" }}
          >
            <h4 className="mb-4" style={{ letterSpacing: "2px" }}>
              OUR INFORMATION
            </h4>

            <div className="row mb-4 justify-content-evenly">
              <div className="col-lg-4 mb-3">
                <h6 className="mb-2">Office Address</h6>
                <p>
                  No 01, 1st Floor Govindappa Complex,Near AtoZ Mart,Shiva
                  Mandir Road, Yelahanka New Town, Bangalore, Karnataka 560064
                </p>
              </div>
              <div className="col-lg-4">
                <h6 className="mb-2">General Enquiry</h6>
                <p>saisatishmulti@gmail.com</p>
              </div>
            </div>

            <div className=" row mb-3 justify-content-evenly">
              <div className="col-lg-4 mb-3">
                <h6 className="mb-2">Call Us</h6>
                <p s>
                  +91-7019774617 <br /> +91-7996988679
                </p>
              </div>
              <div className="col-lg-4">
                <h6 className="mb-2">Our Timing</h6>
                <p>
                  Mon - Sun : <br /> 06:00 AM - 11:00 PM / <br /> 12:00 AM -
                  12:00 AM
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-lg-6"
            style={{ padding: "20px" }}
          >
            <h4 className="mb-4" style={{ letterSpacing: "2px" }}>
              ENQUIRY FORM
            </h4>

            <div class="mb-3 row justify-content-evenly">
              <input
                type="text"
                className="form-control input-width col-lg-6"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                className="form-control input-width col-lg-6"
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
                className="form-control mb-4"
                placeholder="Email ID"
                aria-label="Email ID"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                style={{ border: "1px solid #dcf334" }}
                class="form-control mb-4"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="enquery-now "
                style={{ width: "150px" }}
                onClick={sendmail}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
