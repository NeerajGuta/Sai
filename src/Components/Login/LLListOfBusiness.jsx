import React, { useState } from "react";
import { Card, Container, Modal, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LLListOfBusiness = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");

  return (
    <div>
      <Container className="mt-5">
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
                    description2: `Accommodation: Sri Shiradi Sai Ladies PGs offer different types of accommodation,
                                 such as single rooms, double sharing, or triple sharing rooms. The rooms are usually
                                 furnished with basic amenities like beds, cupboards, and study tables.
                                  Meals: We provide meal services, including breakfast, lunch, and dinner. Some may offer
                                 a choice between vegetarian and non-vegetarian options.
                                  Safety and Security: Our PG have security measures like CCTV cameras, restricted
                                 access, and sometimes even dedicated security personnel to ensure the safety of the
                                 residents.
                                  Housekeeping: Regular cleaning and housekeeping services are typically provided in
                                 Ladies PGs to maintain cleanliness and hygiene.
                                  Facilities: We have additional facilities such as Wi-Fi, laundry services, power backup,
                                 and recreational areas like TV rooms or common spaces for socializing.
                                  Rules and Regulations: We follow some specific rules and regulations to maintain a
                                 peaceful and comfortable living environment. These rules may include restrictions on
                                 guests, noise levels, and curfew timings.
                                  Duration of Stay: We offer both short-term and long-term accommodation options.
                                 Residents can choose to stay for the duration of their studies or work assignments.
                                  Booking and Availability: It advisable to book a PG well in advance, especially during
                                 peak admission seasons in educational institutions, as the demand for such
                                 accommodations can be high.`,
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
                    description: `<b>Janaasha Bank </b> : Welcome to Sri Shiradi Sai Janaasha Bank Limited.`,
                    description1: `At Janaash Bank, we believe in more than just managing money; we believe in enriching lives. With a
                                heritage that long years of trust and excellence, we have been dedicated to serving our valued clients
                                and contributing to their financial success.`,
                    description2: `OUR MISSION`,
                    description3: `Our mission is clear: to provide exceptional financial services, tailored to your unique needs. We are
                                committed to helping our clients achieve their financial goals, offering expert guidance, innovative
                                solutions, and unwavering support.`,
                    description4: `Why Choose ?`,
                    // description5: `Personalized Service:`,
                    // description6: `We understand that every individual and business is unique. Thats why we
                    // take the time to get to know you and your financial aspirations, tailoring our services to match your
                    // specific requirements.`,
                    // `Financial Expertise: Our team of experienced financial experts is always at your service. Whether
                    //             you need assistance with wealth management, investments, or financial planning, we have the
                    //             knowledge and experience to guide you.
                    //             Security and Trust: Security is paramount when it comes to your finances. Rest assured that your
                    //             assets are protected with the latest security measures, and your trust is well-placed in [Your Private
                    //             Banks Name].
                    //             Innovation: We embrace innovation to stay at the forefront of the banking industry. We provide
                    //             convenient digital banking options while maintaining a strong commitment to personalized, human-
                    //             cantered service.
                    //             Community Focus: We are proud to be an integral part of the communities we serve. We support
                    //             local initiatives, charities, and projects, contributing to the growth and prosperity of the regions we call
                    //             home.`,
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
                    description2: `Our Mission`,
                    description3: `At Sai Bore Wells, our mission is to offer efficient, reliable, and sustainable solutions
                                    for your water needs. We are dedicated to delivering bore well services that not only
                                    meet but exceed your expectations, ensuring a consistent and safe water supply for
                                    homes, farms, industries, and communities.`,
                    description4: `Why Choose Sai Bore Wells?`,
                    description5: `Expertise: Our team of skilled professionals boasts extensive experience in bore
                                    well drilling, pump installation, and maintenance. We have successfully completed
                                    numerous projects, earning the trust of our clients.
                                     Cutting-Edge Technology: We stay updated with the latest advancements in bore
                                    well technology and equipment. This allows us to provide you with the most efficient
                                    and cost-effective solutions.
                                     Quality Assurance: Sai Bore Wells is committed to maintaining the highest
                                    standards of quality and safety in all our operations. We use only the best materials
                                    and follow best practices to ensure long-lasting, trouble-free bore wells.
                                     Customer-Centric Approach: We understand that each clients requirements are
                                    unique. Thats why we take a personalized approach, working closely with you to
                                    design and execute bore well projects that align with your specific needs.
                                     Transparent Pricing: Our pricing is competitive and transparent, with no hidden
                                    costs. We believe in providing value for your investment while maintaining
                                    affordability.`,
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
              />
              <input
                style={{ border: "1px solid #dcf334" }}
                type="number"
                className="form-control mb-3"
                placeholder="Number"
                aria-label="Number"
                aria-describedby="basic-addon1"
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
              />
              <textarea
                style={{ border: "1px solid #dcf334" }}
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div>
            {" "}
            <button className="enquery-now " style={{ width: "300px" }}>
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LLListOfBusiness;
