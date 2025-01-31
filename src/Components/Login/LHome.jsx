import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import LLListOfBusiness from "./LLListOfBusiness";
// import NavbarScroll from './NavBar';

const LHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel className="" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="./img/gallery-img-5.webp"
            alt=""
            className="header-carousel header-slider-rspns"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./img/gallery-img-4.webp"
            alt=""
            className="header-carousel header-slider-rspns"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./img/gallery-img-2.webp"
            alt=""
            className="header-carousel header-slider-rspns"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <LLListOfBusiness /> */}
    </>
  );
};

export default LHome;
