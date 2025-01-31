import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";

const Enquiry = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Subject, setSubject] = useState("");
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
            Enquiry Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className="fw-bold mb-1 business-img-text ">
                List Of Business / Services
              </label>
              <Form.Select
                aria-label="Default select example"
                style={{ border: "1px solid #dcf334" }}
                className="mb-3"
                onChange={(e) => setSubject(e.target.value)}
              >
                <option>Select The Business / Service</option>
                <option
                  value="Sri Shirdi Sai Travels"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Travels
                </option>
                <option
                  value="Sri Shirdi Sai Kankana Bhagya"
                  className="select-green"
                >
                  Sri Shirdi Sai Kankana Bhagya
                </option>
                <option
                  value="Sri Shirdi Sai Udyoga Mandir"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Udyoga Mandir
                </option>
                <option
                  value="Sri Shirdi Sai Gold Loan"
                  className="select-green"
                >
                  Sri Shirdi Sai Gold Loan
                </option>
                <option
                  value="Sri Shirdi Sai Pan India Real Estate"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Pan India Real Estate
                </option>
                <option
                  value="Sri Shirdi Sai Scrap Dealers"
                  className="select-green"
                >
                  Sri Shirdi Sai Scrap Dealers
                </option>
                <option
                  value="Sri Shirdi Sai Devlopers"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Devlopers
                </option>
                <option
                  value="Sri Shirdi Sai Pg For Ladies"
                  className="select-green"
                >
                  Sri Shirdi Sai Pg For Ladies
                </option>
                <option
                  value="Sri Shirdi Sai Electric Vehicles"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Electric Vehicles
                </option>
                <option
                  value="Sri Shirdi Sai Home Appliances"
                  className="select-green"
                >
                  Sri Shirdi Sai Home Appliances
                </option>
                <option
                  value="Sri Shirdi Sai Janaasha Bank"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Janaasha Bank
                </option>
                <option
                  value="Sri Shirdi Sai Bore Wells"
                  className="select-green"
                >
                  Sri Shirdi Sai Bore Wells
                </option>
                <option
                  value="Sri Shirdi Sai Charitable Trust Service"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Charitable Trust Service
                </option>
                <option
                  value="Sri Shirdi Sai Mediac Broad casting Service"
                  className="select-green"
                >
                  Sri Shirdi Sai Mediac Broad casting Service
                </option>
                <option
                  value="Sri Shirdi Sai Nath Micro Service"
                  className="select-yellow"
                >
                  Sri Shirdi Sai Nath Micro Service
                </option>
                <option
                  value="Sri Shirdi Sai Ai Multi Service"
                  className="select-green"
                >
                  Sri Shirdi Sai Ai Multi Service
                </option>
              </Form.Select>
            </div>

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
export default Enquiry;
