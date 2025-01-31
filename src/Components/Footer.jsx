import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  AiOutlineMail,
  AiOutlineAppstoreAdd,
  AiOutlineWhatsApp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Aos from "aos";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div>
      <div className="margin-top me-0">
        <MDBFooter
          style={{ backgroundColor: "rgb(241 190 5)", color: "#000" }}
          className=" text-center text-lg-left"
        >
          <MDBContainer className="pt-4">
            <MDBRow className="justify-content-evenly">
              <MDBCol lg="6" md="12" className="mb-4 text-start">
                <h5 className="text-uppercase fs-3 fw-bold">
                  {" "}
                  Our Purpose and Mission{" "}
                </h5>

                <p className="mb-4">
                  Our mission is to spread the timeless wisdom of Shirdi Sai
                  Baba, fostering love, unity, and inner peace among our members
                  and the wider community. Through prayer, meditation, service,
                  and study, we aim to deepen our connection with the divine and
                  live our lives in alignment with Baba&#39;s teachings.
                </p>

                {/* <div className="ms-3" style={{ fontSize: "12px" }}>
                  <p
                    className="text-start "
                    style={{ color: "#000", fontSize: "12px" }}
                  >
                    Book your Sai Yatra through our Mobile Application
                  </p>
                  <p className="text-start" style={{ color: "green" }}>
                    Now Available in Google Play Store
                  </p>
                </div> */}
                {/* <div>
                  <a href="/">
                    <img
                      src="./img/playstore.png"
                      alt=""
                      style={{ width: "40%" }}
                    />
                  </a>
                </div> */}
              </MDBCol>

              <MDBCol
                lg="2"
                md="6"
                className="mb-4"
                style={{ textAlign: "justify" }}
              >
                <div>
                  <h5 className="text-uppercase mb-4 fw-bold letter-space">
                    Quick Links
                  </h5>
                  <ul className="list-unstyled text-dark">
                    <li>
                      <a href="#" className="text-dark">
                        <AiOutlineArrowRight /> Home
                      </a>
                    </li>
                    <li>
                      <a href="/listofbusiness" className="text-dark">
                        <AiOutlineArrowRight /> List Of Business
                      </a>
                    </li>
                    <li>
                      <a href="/service" className="text-dark">
                        <AiOutlineArrowRight /> Services
                      </a>
                    </li>
                    <li>
                      <a href="/aboutus" className="text-dark">
                        <AiOutlineArrowRight /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy" className="text-dark">
                        <AiOutlineArrowRight />
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms-condition" className="text-dark">
                        <AiOutlineArrowRight /> Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/disclaimer" className="text-dark">
                        <AiOutlineArrowRight /> Disclaimer
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCol>

              <MDBCol
                lg="3"
                md="6"
                className="mb-4 mb-md-0"
                style={{ textAlign: "justify" }}
              >
                <h5 className="text-uppercase mb-4 fw-bold letter-space">
                  Contact
                </h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/contact" className="text-dark">
                      <AiOutlineMail
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />{" "}
                      saisatishmulti@gmail.com
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="/contact" className="text-dark">
                      <CiLocationOn
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />
                      No 01, 1st Floor Govindappa Complex,Near AtoZ Mart,Shiva
                      Mandir Road, Yelahanka New Town, Bangalore, Karnataka
                      560064
                    </a>
                  </li>

                  {/* <li className='mb-2'>
                                        <a href='#!' className='text-dark'>
                                            <AiOutlineAppstoreAdd style={{ fontSize: '25px', marginRight: '10px' }} /> Appoinment
                                        </a>
                                    </li> */}

                  <li className="mb-2">
                    <a href="/contact" className="text-dark">
                      <AiOutlineWhatsApp
                        style={{ fontSize: "25px", marginRight: "10px" }}
                      />{" "}
                      +91-7019774617 <br />{" "}
                      <span className="ms-5">+91-7996988679</span>
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* <MDBContainer className=" pb-0">
            <section className="mb-4">
              <h3 className="text-center fw-semibold">Follow Us On</h3>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#333333" }}
                href="#!"
                role="button"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </section>
          </MDBContainer> */}

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a className="text-dark" href="#">
              Designed & Developed By Parnets
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Footer;
