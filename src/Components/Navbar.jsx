import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { BsStopwatch, BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { faCaretDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarScroll() {
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
          <div className="header-s">
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
                      <BsWhatsapp />
                    </div>
                  </a>
                  <div className="text-d text-end me-2">
                    <div className="time-d">WhatsApp</div>
                    <div className="time-text" style={{ color: "#004bab" }}>
                      +91 7996988679
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-0 me-1">
          <nav className="navigation">
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
                  ? "navigation-menu expanded"
                  : "navigation-menu mx-auto"
              }
              style={{ marginTop: "12px" }}
            >
              <ul className="navbar-mobile">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/aboutus"> About Us</a>
                </li>

                <div className="d-flex justify-content-center">
                  <div className="dropdown">
                    <a href="/listofbusiness">
                      <button class="dropbtn d-flex gap-2 align-items-center">
                        List Of Business <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </a>
                    <div
                      class="dropdown-content"
                      style={{ overflowY: "scroll", height: "300px" }}
                    >
                      <a
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
                      >
                        Sai Travelers
                      </a>

                      <a
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
                              description1: `<b>Shri Shiradi Sai Kanakana bhagya the World No. 1 Matchmaking Service.</b>
                                                        `,
                            },
                          })
                        }
                      >
                        Sai Kankana bhagya
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "UDYOGA MANDIRA",
                              Title: "SHRI SHIRDI SAI UDYOGA MANDIRA",
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
                      >
                        Sai Udyoga Mandir
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "GOLD LOAN",
                              Title: "SHRI SHIRDI SAI GOLD LOAN",
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
                      >
                        Sai Gold Loan
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "PAN INDIA REAL ESTATE",
                              Title: " SHRI SHIRDI SAI PAN INDIA REAL ESTATE",
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
                      >
                        Sai Real Estate
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "SCRAP DEALER",
                              Title: " SHRI SHIRDI SAI SCRAP DEALER",
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
                      >
                        Sai Scrap Dealer
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "DEVLOPERS",
                              Title: "SHRI SHIRDI SAI DEVLOPERS",
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
                              description3: `<li><b>Our Policy</b></li>
                                                     <li><b>Satisfy our customers needs and expectations.</b> </li>
                                                      <li><b> Meet all commitments to customers on time with our quality work.</b></li>`,
                            },
                          })
                        }
                      >
                        Sai Devlopers
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "LADIES PG",
                              Title: " SHRI SHIRDI SAI PG FOR LADIES",
                              Image: "../img/bussiness-img-8.webp",
                              description: `Sri Shiradi Sai A Ladies PG, or Paying Guest designed to cater to female residents, especially
                                                        students and working professionals. It is a popular choice for women who are living away from
                                                        their hometowns and need a safe and convenient place to stay. Sri Shiradi Sai PG for Ladies is
                                                        one stop solution for this.`,
                              description1: `<b>Facilities of Sri Shirdi Sai Pg For Ladies:</b>`,
                              description2: `<ul><li><b>Accommodation:</b> Sri Shiradi Sai Ladies PGs offer different types of accommodation,
                                                        such as single rooms, double sharing, or triple sharing rooms. The rooms are usually
                                                        furnished with basic amenities like beds, cupboards, and study tables.</li>
                                                        <li><b> Meals:</b> We provide meal services, including breakfast, lunch, and dinner. Some may offer
                                                        a choice between vegetarian and non-vegetarian options.</li>
                                                        <li><b> Safety and Security:</b> Our PG have security measures like CCTV cameras, restricted
                                                        access, and sometimes even dedicated security personnel to ensure the safety of the
                                                        residents.</li>
                                                        <li><b>Housekeeping:</b> Regular cleaning and housekeeping services are typically provided in
                                                        Ladies PGs to maintain cleanliness and hygiene.</li>
                                                        <li><b>Facilities:</b> We have additional facilities such as Wi-Fi, laundry services, power backup,
                                                        and recreational areas like TV rooms or common spaces for socializing.</li>
                                                        <li><b>Rules and Regulations:</b> We follow some specific rules and regulations to maintain a
                                                        peaceful and comfortable living environment. These rules may include restrictions on
                                                        guests, noise levels, and curfew timings.</li>
                                                         <li><b>Duration of Stay:</b> We offer both short-term and long-term accommodation options.
                                                        Residents can choose to stay for the duration of their studies or work assignments.</li>
                                                        <li><b>Booking and Availability:</b> It advisable to book a PG well in advance, especially during
                                                        peak admission seasons in educational institutions, as the demand for such
                                                        accommodations can be high.</li></ul>`,
                            },
                          })
                        }
                      >
                        Sai PG For Ladies
                      </a>

                      <a
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
                      >
                        Sai Electric Vehicales
                      </a>

                      <a
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
                      >
                        Sai Home Appliances
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "JANAASHA BANK",
                              Title: " SHRI SHIRDI SAI JANAASHA BANK LIMITED",
                              Image: "../img/bussiness-img-12.jpg",
                              description: `Welcome to Sri Shiradi Sai Janaasha Bank Limited.`,
                              description1: `At Janaash Bank, we believe in more than just managing money; we believe in enriching lives. With a
                                                 heritage that long years of trust and excellence, we have been dedicated to serving our valued clients
                                                 and contributing to their financial success.`,
                              description2: `OUR MISSION`,
                              description3: `Our mission is clear: to provide exceptional financial services, tailored to your unique needs. We are
                                                 committed to helping our clients achieve their financial goals, offering expert guidance, innovative
                                                 solutions, and unwavering support.`,
                              description4: `Why Choose Us ?`,
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
                                                  <li><b>Community Focus:</b> We are proud to be an integral part of the communities we serve. We support
                                                 local initiatives, charities, and projects, contributing to the growth and prosperity of the regions we call
                                                 home. </li></ul>   
                                                   <p><b>Visit Us Today</b></p>
                                                   <p>
                                                   We invite you to experience the difference of banking with Shri Shiradi Sai Janaasha Bank
                                                   Limited. Visit our nearest branch or contact our dedicated team of financial advisors to
                                                   discuss how we can assist you in achieving your financial goals.
                                                   </p>
                                                 `,
                            },
                          })
                        }
                      >
                        Sai Janaasha Bank
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutbusiness", {
                            state: {
                              Head: "BORE WELLS",
                              Title: " SHRI SHIRDI SAI BORE WELLS",
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
                      >
                        Sai Bore Wells
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="dropdown">
                    <a href="/service">
                      <button class="dropbtn d-flex gap-2 align-items-center">
                        Services <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </a>
                    <div class="dropdown-content">
                      <a
                        onClick={() =>
                          navigate("/aboutservice", {
                            state: {
                              Head: " CHARITABLE TRUST",
                              Title: "SHRI SHIRDI SAIDEEPA CHARITABLE TRUST",
                              Image: "../img/service-img-1.webp",
                              description: `Sai Charitable Trust, a beacon of hope and compassion dedicated to making a
                                                     positive impact on the lives of those in need. With unwavering commitment and a
                                                     heartfelt mission, we have been serving our community for many years.`,
                              description1: `<p><b>Our Mission</b></p>
                                                     At Sai Charitable Trust, our mission is to bring about meaningful change in the lives
                                                     of underprivileged individuals and communities. We believe in the power of
                                                     compassion, education, and community development to create a better world for all.`,
                              description2: `<ul><li><b>Compassion:</b> We approach our work with empathy and a deep concern for the well-
                                                     being of those we serve. Compassion is at the heart of everything we do.</li>
                                                      <li> <b>Education:</b> We believe that education is a powerful tool for transformation. We are
                                                     dedicated to providing educational opportunities to children and adults alike.</li></ul>`,
                              description3: `<ul><li><b>Community Development:</b> We actively engage with communities to identify their
                                                     needs and work collaboratively to develop sustainable solutions that empower
                                                     individuals and improve overall living conditions.</li>
                                                      <b><li>Transparency:</b> Sai Charitable Trust operates with complete transparency and
                                                     accountability. We ensure that every donation and resource is used effectively and
                                                     responsibly. </li></ul>`,
                              description4: `<ul><li><b>Education for All:</b> We provide access to quality education for underprivileged
                                                     children, empowering them to break the cycle of poverty and achieve their dreams.</li>
                                                      <li><b>Healthcare Support:</b> We offer medical assistance and healthcare awareness
                                                     programs to ensure that vulnerable individuals receive the care they need.</li>
                                                      <li><b>Empowerment Programs:</b> Our vocational training and skill development initiatives
                                                     enable adults to gain meaningful employment and support their families.</li>
                                                      <li><b>Community Outreach:</b> We actively engage with the community, organizing events,
                                                     workshops, and awareness campaigns to address various social issues.</li></ul>`,
                            },
                          })
                        }
                      >
                        Sai Charitable Trust
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutservice", {
                            state: {
                              Head: "TV4 KANNADA NEWS ",
                              Title: "SHRI TV4 KANNADA NEWS CHANNEL",
                              Image: "../img/service-img-2.webp",
                              description: `Sri Shiradi Tv 4 Kannada News Channel is dedicated to serving our community with
                                                     timely, accurate, and insightful news coverage. Our mission is to inform, engage,
                                                     and empower our viewers, helping them make informed decisions about their lives
                                                     and their neighbourhoods.`,
                              description1: `We proudly serve the region, delivering news that matters most to the people who
                                                     call this place home. From breaking stories to in-depth features, we are committed to
                                                     highlighting the issues, events, and achievements that shape our community.`,
                              description2: `<ul><li><b>Our Team:</b> Our team of experienced journalists and dedicated professionals works
                                                     tirelessly to bring you the news that impacts your life. Our reporters are deeply
                                                     rooted in the community, ensuring that we capture the stories that matter to you.</li></ul>`,
                              description3: `<ul><li>We encourage our viewers to be part of the conversation. Share your thoughts,
                                                     stories, and ideas with us. Your input helps shape our coverage and makes our
                                                     community stronger. Connect with us on social media</li></ul>`,
                            },
                          })
                        }
                      >
                        Tv4 Kannada News Channel
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aboutservice", {
                            state: {
                              Head: "MICRO SERVICES ASSOCIATION",
                              Title:
                                "SHRI SHIRDI SAI NATHA MICRO SERVICES ASSOCIATION",
                              Image: "../img/service-img-3.webp",
                              description:
                                "<ul><li>Shri Shiradi Sai Nath Micro Services Association is aims to provide small-scale finance and services to individuals and businesses in low-income or underserved communities. It is often associated with helping people who lack access to traditional banking services and cannot obtain loans or other financial assistance through conventional means.</li><li><b>Purpose:</b> The primary goal of Micro Service Association is to alleviate poverty and promote economic development by providing financial resources to individuals and small businesses who would otherwise have limited or no access to formal financial institutions.</li></ul>",
                            },
                          })
                        }
                      >
                        Sai Micor Services
                      </a>

                      <a
                        onClick={() =>
                          navigate("/aimultiservice", {
                            state: {
                              Head: "AI MULTI",
                              Title: "SHRI SHIRDI SAI AI MULTI SERVICES",
                              Image: "../img/service-img-4.webp",
                              description:
                                "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero perferendis voluptatem id tempora dicta minima consequatur voluptatum culpa doloribus! ipsum dolor sit amet consectetur adipisicing elit. Sit laborum dolorum culpa incidunt eos cum placeat aut. Quidem aliquid animi facilis provident et vitae maiores consequuntur. ",
                            },
                          })
                        }
                      >
                        Sai Ai Multi Service
                      </a>
                    </div>
                  </div>
                </div>

                <li>
                  <a href="/gallery"> Gallery</a>
                </li>
                <li>
                  <a href="/contact"> Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="book-now-btn">
              <ul className="d-flex sirdi-yatra">
                <li>
                  <a
                    onClick={() => {
                      navigate("/admin");
                      handleShow();
                    }}
                    className="sirdi-yatra-btn"
                  >
                    {" "}
                    Admin <br /> Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/cbmlogin");
                      handleShow1();
                    }}
                    className="sirdi-raksha-btn"
                  >
                    {" "}
                    CBM <br /> Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/login")}
                    className="sirdi-raksha-btn"
                  >
                    {" "}
                    Booking Agent <br /> Login
                  </a>
                </li>
              </ul>
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
}

export default NavbarScroll;
