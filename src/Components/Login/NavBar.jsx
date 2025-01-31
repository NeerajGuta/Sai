import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { BsStopwatch, BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import {
  faCaretDown,
  faLocationDot,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";

const NavBar = () => {
  const user =JSON.parse(sessionStorage.getItem("user"));


  const logOut = () => {
    window.location.assign("/login");
   alert("Successfully Logout");
  
   sessionStorage.removeItem("user");
   
 };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [navigation, setnavigation] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setnavigation("fixed top-0 left-0 z-50")
        : setnavigation("relative");
    }
  };

  return (
    <>
      <div
        className=""
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "999",
          backgroundColor: "white",
        }}
      >
        <div className="container-fluid p-0">
          <div className="header-ss">
            <div className="left-h">
              <a href="/contact" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faLocationDot} className="fs-5 me-2" />
                <span>No 01, 1st Floor Govindappa Complex</span>
              </a>
            </div>
            <div className="right-h">
              <div className="wraperr-f">
                <div
                  className="number-respns"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="icon-d">
                    <AiOutlinePhone />
                  </div>
                  <div className="text-d text-end">
                    <div className="time-d">Mobile</div>
                    <div className="time-text" style={{ color: "#004bab" }}>
                      +91 7019774617
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="https://wa.aisensy.com/NrYdLC">
                    <div className="icon-d" style={{ color: "#3dd065" }}>
                      <CiMail />
                    </div>
                  </a>
                  <div className="text-d text-end me-2">
                    <div className="time-d">Mail</div>
                    <div className="time-text" style={{ color: "#004bab" }}>
                      saisatishmulti@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-0 me-1">
          <nav className="navigationL">
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              {/* icon from Heroicons.com */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div>
              <img
                src="./img/logo.webp"
                alt=""
                className="logo-rspns"
                style={{ height: "90px", width: "150px" }}
              />
            </div>

            <div
              className={
                isNavExpanded
                  ? "navigation-menuu expanded"
                  : "navigation-menu mx-auto"
              }
              style={{ marginTop: "12px" }}
            >
              <ul className="navbar-mobile">
                <li>
                  <a href="/LoginHome">Home</a>
                </li>

                <li>
                  <a href="/LoginBookYatra">Book Yatra</a>
                </li>

                <li>
                  <a href="/LoginBuy"> Buy Kavacha</a>
                </li>
                <li>
                  <a href="/LoginBookedDetails">Booked Details</a>
                </li>
                <li>
                  <a href="/LoginOrderHistroy">Order Histroy</a>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <div
                style={{ marginRight: "10px", fontSize: "23px" }}
                onClick={() => navigate("/LoginCart")}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#3DD065" }}
                />
              </div>
              <div className="dropdown">
                {/* <a href="/">
                  <button class="dropbtn d-flex gap-2 align-items-center">
                    List Of Business <FontAwesomeIcon icon={faCaretDown} />
                  </button>
                </a> */}
                <div className="d-flex gap-2 ">
                  <FaRegUserCircle
                    style={{
                      borderRadius: "100%",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  <p style={{cursor:"pointer"}}>
                    {user?.name} <FontAwesomeIcon icon={faCaretDown} />
                  </p>
                </div>
                <div
                  class="dropdown-content"
                  style={{ overflowY: "scroll", height: "99px",cursor:"pointer" }}
                >
                  <a onClick={() => navigate("/LoginProfile")}>Profile</a>

                  <a onClick={() => logOut()}>Logout</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* SAI YANTRA GET NOW MODAL */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title className='business-img-text mb-0'>SAI YANTRA</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <p
              className="text-center "
              style={{ color: "#000", fontSize: "18px" }}
            >
              Book your Sai Yatra through our Mobile Application
            </p>
            <p className="text-center" style={{ color: "green" }}>
              Now Available in Google Play Store
            </p>
          </div>
          <div>
            <a href="/">
              <img src="./img/playstore.png" alt="" style={{ width: "100%" }} />
            </a>
          </div>
        </Modal.Body>
      </Modal>

      {/* SAI Raksha Kavach MODAL */}

      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title className='business-img-text mb-0'>SAI YANTRA</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <p
              className="text-center "
              style={{ color: "#000", fontSize: "18px" }}
            >
              Get SHRI Sai Raksha Kavacha through our Mobile Application
            </p>
            <p className="text-center" style={{ color: "green" }}>
              Now Available in Google Play Store
            </p>
          </div>
          <div>
            <a href="/">
              <img src="./img/playstore.png" alt="" style={{ width: "100%" }} />
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {/* <div > <button className='enquery-now ' style={{ width: '300px' }}>Get Now</button></div> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
