import React from "react";
import { Card, Container, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container className="mt-5">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> Services</h2>
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
              <Card.Text className="mb-2">
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
                      description1: `<p><b>Our Mission:</b></p>
                                        At Sai Charitable Trust, our mission is to bring about meaningful change in the lives
                                        of underprivileged individuals and communities. We believe in the power of
                                        compassion, education, and community development to create a better world for all.`,
                      description2: `<ul><li><b>Compassion:</b> We approach our work with empathy and a deep concern for the well-
                                        being of those we serve. Compassion is at the heart of everything we do.</li>
                                        <li><b> Education:</b> We believe that education is a powerful tool for transformation. We are
                                        dedicated to providing educational opportunities to children and adults alike.</li></ul>`,
                      description3: `<ul><li><b>Community Development:</b> We actively engage with communities to identify their
                                        needs and work collaboratively to develop sustainable solutions that empower
                                        individuals and improve overall living conditions.</li>
                                        <li><b>Transparency:</b> Sai Charitable Trust operates with complete transparency and
                                        accountability. We ensure that every donation and resource is used effectively and
                                        responsibly.</li>`,
                      description4: `<ul><li><b>Education for All:</b> We provide access to quality education for underprivileged
                                        children, empowering them to break the cycle of poverty and achieve their dreams.</li>
                                        <li><b> Healthcare Support:</b> We offer medical assistance and healthcare awareness
                                        programs to ensure that vulnerable individuals receive the care they need.</li>
                                        <li><b> Empowerment Programs:</b> Our vocational training and skill development initiatives
                                        enable adults to gain meaningful employment and support their families.</li>
                                        <li><b> Community Outreach:</b> We actively engage with the community, organizing events,
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
                SRI SHIRDI TV4 KANNADA NEWS CHANNEL{" "}
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
                        "Shri Shiradi Sai Nath Micro Services Association is aims to provide small-scale finance and services to individuals and businesses in low-income or underserved communities. It is often   associated with helping people who lack access to traditional banking services and cannot  obtain loans or other financial assistance through conventional means.",
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
    </div>
  );
};

export default Service;
