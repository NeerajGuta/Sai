import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Modal, ProgressBar } from "react-bootstrap";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [counterOn, setCounterOn] = useState(false);

  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");

  const { state } = useLocation();

  const [Subject, setSubject] = useState("Contact Us");
  const [Subject1, setSubject1] = useState(Title);
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

  const sendmail1 = async () => {
    try {
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
          subject: Title,
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
      <Container>
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> About Us</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>
        <div className="row align-items-center ">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-6 mb-4"
          >
            <img
              src="./img/welcome-img.JPG"
              alt=""
              className="welcome-img img-trnsition"
            />
          </div>
          <div className="col-lg-6">
            <p className="fw-bold mb-3" style={{ letterSpacing: "2px" }}>
              WELCOME TO SHRI SIRDI SAI GROUP
            </p>
            <p className="mb-2">
              Namaste and a heartfelt welcome to Sri Siradi Sai Group, Is the
              One stop destination servicing to customers.
            </p>
            <p className="mb-2">
              Mr. Dr. Sai Satish Thotaiah is founder of Sri siradi sai Group.
              Mr. Dr. Sai Satish Thotaiah is a true inspiration. He has
              dedicated his life to helping others, and he has made a real
              difference in the lives of many people with the multiple business
              and services.
            </p>
            <p className="mb-2">
              At Sri Siradi Sai Group, we are a family bound by our love and
              devotion to Shirdi Sai Baba, and we are delighted to have you join
              our spiritual journey. Whether you are a long-time devotee or a
              newcomer seeking spiritual guidance and support, you are now a
              cherished member of our community.
            </p>
            <a href="/aboutus">
              <button className="enquery-now" style={{ width: "120px" }}>
                Know More
              </button>{" "}
            </a>
          </div>
        </div>
      </Container>

      {/* WELCOME PAGE */}
      <Container className="margin-top">
        <div className="row justify-content-evenly ">
          <div className="col-lg-2 counter-up-border mb-3">
            <div className="counter-up">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                </h5>
              </ScrollTrigger>
              <FontAwesomeIcon icon={faPlus} />
              <span className="fw-bold text-dark">Years</span>
            </div>
            <p>Professional Experience</p>
          </div>

          <div className="col-lg-3 counter-up-border mb-3">
            <div className="counter-up">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={300} duration={2} delay={0} />
                  )}
                </h5>
              </ScrollTrigger>
              <FontAwesomeIcon icon={faPlus} />
              <span className="fw-bold text-dark">Profiles</span>
            </div>
            <p>Employees in team</p>
          </div>

          <div className="col-lg-3 counter-up-border mb-3">
            <div className="counter-up">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={21} duration={2} delay={0} />
                  )}
                </h5>
              </ScrollTrigger>
              <FontAwesomeIcon icon={faPlus} />
              <span className="fw-bold text-dark">Locations</span>
            </div>
            <p>Sites in development</p>
          </div>

          <div className="col-lg-3 counter-up-border mb-3">
            <div className="counter-up">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h5>
                  {counterOn && (
                    <CountUp start={0} end={45} duration={2} delay={0} />
                  )}
                </h5>
              </ScrollTrigger>
              <FontAwesomeIcon icon={faPlus} />
              <span className="fw-bold text-dark">Profiles</span>
            </div>
            <p>Benifites</p>
          </div>
        </div>
      </Container>

      {/* List of Business */}

      <Container className="margin-top">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> List Of Business</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "300px", margin: "auto" }}
          />
        </div>
        <div className="row mb-5 justify-content-evenly gap-4">
          <Card
            id="TV4"
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-lg-3 col-md-6 img-trnsition mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: " SAI TRAVELERS",
                    Title: "SHRI SHIRDI SAI TRAVELERS",
                    Image: "../img/bussiness-img-1.webp",
                    description: `The Shirdi Sai Darshan tour offers a range of features and amenities to enhance the travel experience. These include AC/non-AC road transfers, tour escorts, security on the Bus, fresh-up destinations, and travel insurance. These provisions ensure a hassle-free and safe journey for all participants.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-1.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SHIRDI SAI TREVELERS
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-1.webp");
                setTitle("TV4 KANNADA NEWS CHANNEL");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="KANKANA"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-lg-3 col-md-6 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "KANKANA BHAGYA",
                    Title: "SHRI SHIRDI SAI KANKANA BHAGYA",
                    Image: "../img/bussiness-img-2.webp",
                    description: `Shri Shiradi Sai Kanakana bhagya is a trusted matchmaking service created for
                                  parents who are looking for a life partner for their loved ones. Unlike other
                                  Matrimonial services, we focus on providing trustworthy detailed family and
                                  background information to help you take the next step with confidence. With over
                                  50+ community sites, you can find a match from your own community. Many couples
                                  face a myriad of issues that can strain their relationships, from communication
                                  problems to financial stress and lifestyle differences`,
                    description1: `Shri Shiradi Sai Kanakana bhagya the World No. 1 Matchmaking Service.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-2.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SHRI SHIRDI SAI KANKANA BHAGYA
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-2.webp");
                setTitle("  SHRI SHIRDI SAI KANKANA BHAGYA");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="UDYOGA"
            data-aos="fade-up"
            data-aos-duration="2500"
            className="col-lg-3 col-md-6 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "UDYOGA MANDIRA",
                    Title: "SRI SHIRDI SAI UDYOGA MANDIRA",
                    Image: "../img/bussiness-img-3.webp",
                    description: `Sri Shiradi Sai Udyoga Mandira is a well-experienced placement HR consultancy
                                    solution with service offerings which include recruitment process outsourcing,
                                    managed recruitment services, search services, staffing services and support
                                    services.`,
                    description1: `Our consultants follow a rigorous HR-led recruitment process to identify the most
                                    suitable candidates &amp; Our aim is to recruit the best candidates for all the
                                    Organisations with a keen desire to provide growth.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-3.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI UDYOGA MANDIRA
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-3.webp");
                setTitle("SRI SHIRDI SAI UDYOGA MANDIRA");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="GOLD"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-3 col-md-6 img-trnsition mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "GOLD LOAN",
                    Title: "SRI SHIRDI SAI GOLD LOAN",
                    Image: "../img/bussiness-img-4.webp",
                    description: `Sri Shiradi Sai Gold Loan is the most trusted Gold Loan company, well-known for its
                                      honest and transparent service. Paying the highest money with low interest for your
                                      precious metal is our primary goal. You can get gold loan with just a few steps &amp; less
                                      documentation process.`,
                    description1: `We do not let our customers be waiting for their hard-earned money amid their tough
                                      moments, which is why we pay instant cash for gold. We have more than 5000
                                      happy customers.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-4.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI GOLD <br /> LOAN
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-4.webp");
                setTitle("SRI SHIRDI SAI GOLD LOAN");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>
        </div>

        <div className="row mb-5 justify-content-evenly gap-4">
          <Card
            id="ESTATE"
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-lg-3 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "PAN INDIA REAL ESTATE",
                    Title: " SRI SHIRDI SAI PAN INDIA REAL ESTATE",
                    Image: "../img/bussiness-img-5.webp",
                    description: `We are in Pan India Real Estate business from many years Sri Shiradi Sai Pan India
            Real Estate are a strong team of professionals having Vastu experience in getting
            the right property according to the requirement of our customers.`,
                    description1: `We are here to provide a luxurious property solution where you can find any kind of
            luxurious property from minimum price to maximum price in entire Pan India.`,
                    description2: `Industrial Lands-Ware House-Agricultural Lands etc…. have plenty of properly
            verified lands for Rent-Sell-Buy. Ideal options for corporate companies and
            individuals as well. Call right now for great deals!`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-5.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI PAN INDIA REAL ESTATE
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-5.webp");
                setTitle(" SRI SHIRDI SAI PAN INDIA REAL ESTATE");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="SCRAP"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-lg-3 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "SCRAP DEALER",
                    Title: " SRI SHIRDI SAI SCRAP DEALER",
                    Image: "../img/bussiness-img-6.webp",
                    description: `We into Scrap Buy and Selling business from many years and we primarily deal with
              various types of scrap materials, including ferrous metals (such as iron and steel)
              and non-ferrous metals (such as aluminium, copper, brass, and stainless steel).
              often collect scrap materials from a variety of sources, including individuals,
              construction sites, manufacturing facilities, and businesses. Some may even offer
              pickup services to collect large quantities of scrap.`,
                    description1: `We have a scrapyard and involve sorting, cleaning, and sometimes shredding or
              cutting the materials into smaller pieces to prepare them for recycling facilities or
              metal smelters, where they are melted down and reused to produce new products.`,
                    description2: `Recycling scrap materials also reduces greenhouse gas emissions and processed in
              an environmentally responsible and safe manner.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-6.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI SCRAP <br /> DEALER
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-6.webp");
                setTitle(" SRI SHIRDI SAI SCRAP DEALER");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="DEVLOPERS"
            data-aos="fade-up"
            data-aos-duration="2500"
            className="col-lg-3 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "DEVLOPERS",
                    Title: "SRI SHIRDI SAI DEVLOPERS",
                    Image: "../img/bussiness-img-7.webp",
                    description: `We strive to surpass our customers’ expectations in various services being
              offered. A home is the dream of every family and probably the most important asset created by
              the people”. We at Sai Developers strive to fulfil the dreams of the people to have an asset for their
              lifetime.`,
                    description1: `We Sai Developers, attribute our success to sincerity and transparency in all our transactions. All our
              properties are safe and secure as investment options and completely hassle free in terms of
              legalities. We realize that an investment today is for the benefit of generations to come and we take
              all care to ensure that it is a prized asset for ever.`,
                    description2: `Our High Standard of Quality is maintained throughout the development process and after
              sales. Our Procedures and methodology are well defined and documented to ensure Quality
              service to our clients.`,
                    description3: `Our Policy  
               Satisfy our customers needs and expectations. 
               Meet all commitments to customers on time with our quality work.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-7.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI <br /> DEVLOPERS
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-7.webp");
                setTitle(" SRI SHIRDI SAI DEVLOPERS");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="PG"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-3 img-trnsition mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "LADIES PG",
                    Title: " SRI SHIRDI SAI PG FOR LADIES",
                    Image: "../img/bussiness-img-8.webp",
                    description: `Sri Shiradi Sai A Ladies PG, or Paying Guest designed to cater to female residents, especially
             students and working professionals. It is a popular choice for women who are living away from
             their hometowns and need a safe and convenient place to stay. Sri Shiradi Sai PG for Ladies is
             one stop solution for this.`,
                    description1: `Facilities of Sri Shirdi Sai Pg For Ladies:`,
                    description2: `<ul><li><b>Accommodation:</b> Sri Shiradi Sai Ladies PGs offer different types of accommodation,
             such as single rooms, double sharing, or triple sharing rooms. The rooms are usually
             furnished with basic amenities like beds, cupboards, and study tables.
             <li> <b>Meals:</b> We provide meal services, including breakfast, lunch, and dinner. Some may offer
             a choice between vegetarian and non-vegetarian options.</li>
             <li> <b>Safety and Security:</b> Our PG have security measures like CCTV cameras, restricted
             access, and sometimes even dedicated security personnel to ensure the safety of the
             residents.</li>
             <li><b>Housekeeping:</b> Regular cleaning and housekeeping services are typically provided in
             Ladies PGs to maintain cleanliness and hygiene.</li>
             <li> <b>Facilities:</b> We have additional facilities such as Wi-Fi, laundry services, power backup,
             and recreational areas like TV rooms or common spaces for socializing.</li>
              <li><b>Rules and Regulations:</b> We follow some specific rules and regulations to maintain a
             peaceful and comfortable living environment. These rules may include restrictions on
             guests, noise levels, and curfew timings.</li>
              <li><b>Duration of Stay:</b> We offer both short-term and long-term accommodation options.
             Residents can choose to stay for the duration of their studies or work assignments.</li>
             <li> <b>Booking and Availability:</b> It advisable to book a PG well in advance, especially during
             peak admission seasons in educational institutions, as the demand for such
             accommodations can be high.</li></ul>`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-8.webp"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI PG FOR <br /> LADIES
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-8.webp");
                setTitle(" SRI SHIRDI SAI PG FOR LADIES");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>
        </div>

        <div className="row justify-content-evenly gap-4">
          <Card
            id="ELECTRIC"
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-lg-3 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "ELECTRIC VEHICLE",
                    Title: "ELECTRIC VEHICLE ALL OVER KARNATAKA",
                    Image: "../img/bussiness-img-10.jpg",
                    description: `At Sri Shiradi Sai Electric Vehicle, were not just a dealership; were you go-to
             destination for all things automotive. With a passion and commitment to exceptional
             customer service, weve been serving the all over Karnataka.`,
                    description1: `Our mission is simple to provide you with the best selection of high-quality vehicles,
             exceptional service, and unbeatable value. We understand that buying an Electric
             Vehicle is a significant decision, and were here to make your experience smooth,
             transparent, and enjoyable.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-10.jpg"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                ELECTRIC VEHICLE ALL OVER KARNATAKA
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-10.jpg");
                setTitle("  ELECTRIC VEHICLE ALL OVER KARNATAKA");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="APPLIANCES"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-lg-3 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "HOME APPLIANCES",
                    Title: " HOME APPLIANCES ALL OVER KARNATAKA",
                    Image: "../img/bussiness-img-11.jpg",
                    description: `Sri Shiradi Sai Home appliances are essential devices and equipment designed to perform
               various tasks within a household, making daily life more convenient, efficient, and
               comfortable. These appliances can be found in all over Karnataka.`,
                    description1: `1. Kitchen Appliances,  2. Laundry Appliances, 3. Cleaning Appliances, 4. Climate Control Appliances, 5. Entertainment Appliances, 6. Personal Care Appliances, 7. Smart Appliances, 8. Energy-Efficient Appliances,  `,
                    description2: `Choosing Sri Shiradi Sai Home Appliance its impact your daily life, from
               saving time and your Money.`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-11.jpg"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                HOME APPLIANCES ALL OVER KARNATAKA
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-11.jpg");
                setTitle("HOME APPLIANCES ALL OVER KARNATAKA");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="BANK"
            data-aos="fade-up"
            data-aos-duration="2500"
            className="col-lg-3 img-trnsition  mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "JANAASHA BANK",
                    Title: " SRI SHIRDI SAI JANAASHA BANK LIMITED",
                    Image: "../img/bussiness-img-12.jpg",
                    description: `Welcome to Sri Shiradi Sai Janaasha Bank Limited.`,
                    description1: `At Janaash Bank, we believe in more than just managing money; we believe in enriching lives. With a
            heritage that long years of trust and excellence, we have been dedicated to serving our valued clients
            and contributing to their financial success.`,
                    description2: `OUR MISSION`,
                    description3: `Our mission is clear: to provide exceptional financial services, tailored to your unique needs. We are
            committed to helping our clients achieve their financial goals, offering expert guidance, innovative
            solutions, and unwavering support.`,

                    description4: `Why Choose us ?`,
                    description5: `<ul><li><b>Personalized Service:</b> We understand that every individual and business is unique. Thats why we
            take the time to get to know you and your financial aspirations, tailoring our services to match your
            specific requirements.</li>
            <li><b>Financial Expertise:</b> Our team of experienced financial experts is always at your service. Whether
            you need assistance with wealth management, investments, or financial planning, we have the
            knowledge and experience to guide you.</li>
             <li><b>Security and Trust:</b> Security is paramount when it comes to your finances. Rest assured that your
            assets are protected with the latest security measures, and your trust is well-placed in [Your Private
            Banks Name].</li>
             <li><b>Innovation:</b> We embrace innovation to stay at the forefront of the banking industry. We provide
            convenient digital banking options while maintaining a strong commitment to personalized, human-
            cantered service.</li>
           <li> <b>Community Focus:</b> We are proud to be an integral part of the communities we serve. We support
            local initiatives, charities, and projects, contributing to the growth and prosperity of the regions we call
            home.</li> </ul>
            <p><b>Visit Us Today</b></p>
            <p>
            We invite you to experience the difference of banking with Shri Shiradi Sai Janaasha Bank
            Limited. Visit our nearest branch or contact our dedicated team of financial advisors to
            discuss how we can assist you in achieving your financial goals.
            </p>`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-12.jpg"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI JANAASHA BANK LIMITED
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-12.jpg");
                setTitle("SRI SHIRDI SAI JANAASHA BANK LIMITED");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>

          <Card
            id="BORE"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-3 img-trnsition mb-3"
            style={{ width: "15rem", border: "none", padding: "0px" }}
          >
            <Card.Body
              onClick={() =>
                navigate("/aboutbusiness", {
                  state: {
                    Head: "BORE WELLS",
                    Title: " SRI SHIRDI SAI BORE WELLS",
                    Image: "../img/bussiness-img-13.jpg",
                    description: `About Sai Bore Wells`,
                    description1: `Welcome to Sri Shiradi Sai Bore Wells, your trusted partner for comprehensive bore
                well solutions. we have been at the forefront of providing high-quality bore well
                drilling and related services to our valued clients.`,
                    description2: `<b>Our Mission</b>`,
                    description3: `At Sai Bore Wells, our mission is to offer efficient, reliable, and sustainable solutions
                for your water needs. We are dedicated to delivering bore well services that not only
                meet but exceed your expectations, ensuring a consistent and safe water supply for
                homes, farms, industries, and communities.`,
                    description4: `Why Choose Sai Bore Wells?`,
                    description5: `<ul><li><b>Expertise:</b> Our team of skilled professionals boasts extensive experience in bore
                well drilling, pump installation, and maintenance. We have successfully completed
                numerous projects, earning the trust of our clients.</li>
                 <li><b>Cutting-Edge Technology:</b> We stay updated with the latest advancements in bore
                well technology and equipment. This allows us to provide you with the most efficient
                and cost-effective solutions.</li>
                 <li><b>Quality Assurance:</b> Sai Bore Wells is committed to maintaining the highest
                standards of quality and safety in all our operations. We use only the best materials
                and follow best practices to ensure long-lasting, trouble-free bore wells.</li>
                 <li><b>Customer-Centric Approach:</b> We understand that each clients requirements are
                unique. Thats why we take a personalized approach, working closely with you to
                design and execute bore well projects that align with your specific needs.</li>
                 <li><b>Transparent Pricing:</b> Our pricing is competitive and transparent, with no hidden
                costs. We believe in providing value for your investment while maintaining
                affordability.</li></ul>`,
                  },
                })
              }
              style={{ padding: "0px", cursor: "pointer" }}
            >
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <img
                  src="./img/bussiness-img-13.jpg"
                  alt=""
                  className="business-img"
                />
              </Card.Subtitle>
              <Card.Text className="business-img-text">
                SRI SHIRDI SAI <br /> BORE WELLS
              </Card.Text>
            </Card.Body>
            <Card.Link
              onClick={() => {
                setImage("./img/bussiness-img-13.jpg");
                setTitle(" SRI SHIRDI SAI BORE WELLS");
                handleShow();
              }}
              className="enquery-now"
            >
              Enquiry Now
            </Card.Link>
          </Card>
        </div>
      </Container>

      <Container className="margin-top">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> Our Services</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>

        <div className="row justify-content-evenly mb-5">
          <Card
            data-aos="fade-up"
            data-aos-duration="1500"
            className="col-lg-3 mb-3"
            style={{ width: "16rem", padding: "0px", minHeight: "435px" }}
          >
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src="./img/service-img-1.webp"
            />
            <Card.Body>
              <Card.Title className="business-img-text text-start">
                {" "}
                SRI SHIRDI SAIDEEPA CHARITABLE TRUST
              </Card.Title>
              <Card.Text className="mb-2" style={{ textAlign: "justify " }}>
                Sai Charitable Trust, a beacon of hope and compassion dedicated
                to making a positive ...
              </Card.Text>
              <button
                className="enquery-now"
                style={{ width: "120px" }}
                onClick={() =>
                  navigate("/aboutservice", {
                    state: {
                      Head: " CHARITABLE TRUST",
                      Title: "SRI SHIRDI SAIDEEPA CHARITABLE TRUST",
                      Image: "../img/service-img-1.webp",
                      description: `Sai Charitable Trust, a beacon of hope and compassion dedicated to making a
                                        positive impact on the lives of those in need. With unwavering commitment and a
                                        heartfelt mission, we have been serving our community for many years.`,
                      description1: `<p><b>Our Mission :</b></p>
                                        At Sai Charitable Trust, our mission is to bring about meaningful change in the lives
                                        of underprivileged individuals and communities. We believe in the power of
                                        compassion, education, and community development to create a better world for all.`,
                      description2: `<ul><li><b>Compassion:</b> We approach our work with empathy and a deep concern for the well-
                                        being of those we serve. Compassion is at the heart of everything we do.</li>
                                        <li><b>Education:</b> We believe that education is a powerful tool for transformation. We are
                                        dedicated to providing educational opportunities to children and adults alike.</li></ul>`,
                      description3: `<ul><li><b>Community Development:</b> We actively engage with communities to identify their
                                        needs and work collaboratively to develop sustainable solutions that empower
                                        individuals and improve overall living conditions.</li>
                                         <li><b>Transparency:</b> Sai Charitable Trust operates with complete transparency and
                                        accountability. We ensure that every donation and resource is used effectively and
                                        responsibly.</li></ul>`,
                      description4: `<ul><li><b>Education for All:</b> We provide access to quality education for underprivileged
                                        children, empowering them to break the cycle of poverty and achieve their dreams.</li>
                                         <li><b>Healthcare Support:</b> We offer medical assistance and healthcare awareness
                                        programs to ensure that vulnerable individuals receive the care they need.</li>
                                        <li><b> Empowerment Programs:</b> Our vocational training and skill development initiatives
                                        enable adults to gain meaningful employment and support their families.</li>
                                        <li><b>Community Outreach:</b> We actively engage with the community, organizing events,
                                        workshops, and awareness campaigns to address various social issues.</li></ul>`,
                    },
                  })
                }
              >
                Know More
              </button>
            </Card.Body>
          </Card>

          <Card
            data-aos="fade-up"
            data-aos-duration="2000"
            className="col-lg-3 mb-3"
            style={{ width: "16rem", padding: "0px", minHeight: "435px" }}
          >
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src="./img/service-img-2.webp"
            />
            <Card.Body>
              <Card.Title className="business-img-text text-start">
                {" "}
                SRI SHIRDI SAIDEEPA MEDIA BRODCASTING SERVICES{" "}
              </Card.Title>
              <Card.Text className="mb-2">
                Sri Shiradi Tv 4 Kannada News Channel is dedicated to serving
                our community ...
              </Card.Text>
              <button
                className="enquery-now"
                style={{ width: "120px" }}
                onClick={() =>
                  navigate("/aboutservice", {
                    state: {
                      Head: "TV4 KANNADA NEWS",
                      Title: "SHRI TV4 KANNADA NEWS CHANNEL",
                      Image: "../img/service-img-2.webp",
                      description: `Sri Shiradi Tv 4 Kannada News Channel is dedicated to serving our community with
                                     timely, accurate, and insightful news coverage. Our mission is to inform, engage,
                                     and empower our viewers, helping them make informed decisions about their lives
                                     and their neighbourhoods.`,
                      description1: `We proudly serve the region, delivering news that matters most to the people who
                                     call this place home. From breaking stories to in-depth features, we are committed to
                                     highlighting the issues, events, and achievements that shape our community.`,
                      description2: `Our Team: Our team of experienced journalists and dedicated professionals works
                                     tirelessly to bring you the news that impacts your life. Our reporters are deeply
                                     rooted in the community, ensuring that we capture the stories that matter to you.`,
                      description3: `We encourage our viewers to be part of the conversation. Share your thoughts,
                                     stories, and ideas with us. Your input helps shape our coverage and makes our
                                     community stronger. Connect with us on social media`,
                    },
                  })
                }
              >
                Know More
              </button>
            </Card.Body>
          </Card>

          <Card
            data-aos="fade-up"
            data-aos-duration="2500"
            className="col-lg-3 mb-3"
            style={{ width: "16rem", padding: "0px", minHeight: "435px" }}
          >
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src="./img/service-img-3.webp"
            />
            <Card.Body>
              <Card.Title className="business-img-text text-start">
                {" "}
                SRI SHIRDI SAI NATHA MICRO SERVICES ASSOCIATION
              </Card.Title>
              <Card.Text className="mb-2">
                Shri Shiradi Sai Nath Micro Services Association is aims to
                provide small-scale ...
              </Card.Text>
              <button
                className="enquery-now"
                style={{ width: "120px" }}
                onClick={() =>
                  navigate("/aboutservice", {
                    state: {
                      Head: "MICRO SERVICES ASSOCIATION",
                      Title: "SRI SHIRDI SAI NATHA MICRO SERVICES ASSOCIATION",
                      Image: "../img/service-img-3.webp",
                      description:
                        "Shri Shiradi Sai Nath Micro Services Association is aims to provide small-scale finance services to individuals and businesses in low-income or underserved communities. It is often associated with helping people who lack access to traditional banking services and cannot obtain loans or other financial assistance through conventional means. <br /> <b> Purpose:</b> The primary goal of Micro Service Association is to alleviate poverty and promote economic development by providing financial resources to individuals and small businesses who would otherwise have limited or no access to formal financial institutions. ",
                    },
                  })
                }
              >
                Know More
              </button>
            </Card.Body>
          </Card>

          <Card
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-3 mb-3"
            style={{ width: "16rem", padding: "0px", minHeight: "435px" }}
          >
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src="./img/service-img-4.webp"
            />
            <Card.Body>
              <Card.Title className="business-img-text text-start">
                SRI SHIRDI SAI AI MULTI SERVICES
              </Card.Title>
              <Card.Text className="mb-2">
                one-stop destination servicing customers to get all the
                governament providing ID cards and Loans
              </Card.Text>
              <button
                className="enquery-now"
                style={{ width: "120px" }}
                onClick={() =>
                  navigate("/aimultiservice", {
                    state: {
                      Head: "AI MULTI",
                      Title: "SRI SHIRDI SAI AI MULTI SERVICES",
                      Image: "../img/service-img-4.webp",
                      description:
                        "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero perferendis voluptatem id tempora dicta minima consequatur voluptatum culpa doloribus! ipsum dolor sit amet consectetur adipisicing elit. Sit laborum dolorum culpa incidunt eos cum placeat aut. Quidem aliquid animi facilis provident et vitae maiores consequuntur",
                    },
                  })
                }
              >
                Know More
              </button>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container className="margin-top">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> Gallery</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>

        <div class="row">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            class="col-lg-4  mb-3 mb-lg-0"
          >
            <img
              src="./img/gallery-img-1.webp"
              class="w-100 shadow-1-strong rounded mb-4 img-trnsition"
              alt="Boat on Calm Water"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="col-lg-4 mb-3 mb-lg-0"
          >
            <img
              src="./img/gallery-img-2.webp"
              class="w-100  shadow-1-strong rounded mb-4 img-trnsition"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            class="col-lg-4 mb-3 mb-lg-0"
          >
            <img
              src="./img/gallery-img-3.webp"
              class="w-100   shadow-1-strong rounded mb-4 img-trnsition"
              alt="Mountains in the Clouds"
            />
          </div>
        </div>

        <div class="row">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            class="col-lg-4  mb-3 mb-lg-0"
          >
            <img
              src="./img/gallery-img-4.webp"
              class="w-100 shadow-1-strong rounded mb-4 img-trnsition"
              alt="Boat on Calm Water"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="col-lg-4 mb-3 mb-lg-0"
          >
            <img
              src="./img/gallery-img-5.webp"
              class="w-100  shadow-1-strong rounded mb-4 img-trnsition"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            class="col-lg-4 mb-3 mb-lg-0"
          >
            <img
              src="./img/gallery-img-6.webp"
              class="w-100   shadow-1-strong rounded mb-4 img-trnsition"
              alt="Mountains in the Clouds"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <a href="/gallery">
            {" "}
            <button className="enquery-now " style={{ width: "150px" }}>
              View More
            </button>
          </a>
        </div>
      </Container>

      <Container className="margin-top">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> Contact Us</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>
        <div className="row ">
          <div
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

          <div className="col-lg-6" style={{ padding: "20px" }}>
            <h4 className="mb-4" style={{ letterSpacing: "2px" }}>
              ENQUIRY FORM
            </h4>

            <div class="mb-3 row justify-content-evenly">
              <input
                type="text"
                className="form-control input-width col-lg-6 s"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                className="form-control input-width col-lg-6 "
                placeholder="Number"
                aria-label="Number"
                aria-describedby="basic-addon1"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                style={{ border: "1px solid #dcf334", height: "45px" }}
                type="email"
                className="form-control  mb-4"
                placeholder="Email ID"
                aria-label="Email ID"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                style={{ border: "1px solid #dcf334" }}
                className="form-control mb-4 "
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
                src={Image}
                alt=""
                style={{ width: "100%", marginBottom: "15px" }}
              />
            </div>
            <div className="col-lg-9">
              <h4 className="business-img-text fs-3"> {Title}</h4>
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
              onClick={sendmail1}
            >
              Send Mail
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
