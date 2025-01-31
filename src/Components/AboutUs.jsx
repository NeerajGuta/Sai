import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <Container className="mt-4">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> About Us</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>

        <div className="row align-items-center mb-5">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-6 mb-3"
          >
            <img
              src="./img/header-slider-2.webp"
              alt=""
              className="welcome-img img-trnsition"
            />
          </div>
          <div className="col-lg-6">
            {/* <p className='fw-bold mb-4' style={{ letterSpacing: '2px' }}>WELCOME TO OUR COMPANY</p> */}
            <h3 className="fw-bold mb-3">
              Namaste and a heartfelt welcome to Sri Siradi Sai Group, Is the
              One stop destination servicing to customers.
            </h3>
            <p className="mb-3">
              A Multiple Service Company, also known as a multi-service company,
              is an organization that offers a variety of services across
              different industries or sectors. These companies diversify their
              offerings to cater to a wide range of customer needs and
              potentially tap into multiple revenue streams. Here are some key
              points about multiple service companies.
            </p>
            {/* <button className='enquery-now' style={{ width: '120px' }}>Know More</button> */}
          </div>
        </div>

        <div className="row align-items-center mb-5 ">
          <div className="col-lg-6">
            {/* <p className='fw-bold mb-4' style={{ letterSpacing: '2px' }}>WELCOME TO OUR COMPANY</p> */}
            {/* <h3 className='fw-bold mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h3> */}
            <p className="mb-3">
              Sri Shiradi Sai Gold Loan is the most trusted Gold Loan company,
              well-known for its honest and transparent service. Paying the
              highest money with low interest for your precious metal is our
              primary goal. You can get gold loan with just a few steps &amp;
              less documentation process.
            </p>
            <p>
              We do not let our customers be waiting for their hard-earned money
              amid their tough moments, which is why we pay instant cash for
              gold. We have more than 5000 happy customers.
            </p>
            {/* <button className='enquery-now' style={{ width: '120px' }}>Know More</button> */}
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-6">
            <img
              src="./img/bussiness-img-4.webp"
              alt=""
              className="welcome-img img-trnsition"
            />
          </div>
        </div>

        <div className="row align-items-center ">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-lg-6 mb-3"
          >
            <img
              src="./img/bussiness-img-9.webp"
              alt=""
              className="welcome-img img-trnsition"
            />
          </div>
          <div className="col-lg-6">
            {/* <p className='fw-bold mb-4' style={{ letterSpacing: '2px' }}>WELCOME TO OUR COMPANY</p> */}
            <h3 className="fw-bold mb-3">Shirdi Sai Traveles </h3>
            <p className="mb-3">
              The Shirdi Sai Darshan tour offers a range of features and
              amenities to enhance the travel experience. These include
              AC/non-AC road transfers, tour escorts, security on the Bus,
              fresh-up destinations, and travel insurance. These provisions
              ensure a hassle-free and safe journey for all participants.
            </p>
            {/* <button className='enquery-now' style={{ width: '120px' }}>Know More</button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
