import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import Carousel from "react-grid-carousel";

const Gallery = () => {
  return (
    <div>
      <Container className="mt-4">
        <div data-aos="fade-right" data-aos-duration="3000" className="mb-5">
          <h2 className="all-home-head"> Gallery</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>

        <Carousel cols={3} rows={2} gap={20} loop>
          <Carousel.Item>
            <a href="../img/gallery-img-1.webp">
              {" "}
              <img width="100%" src="../img/gallery-img-1.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="../img/gallery-img-2.webp">
              <img width="100%" src="./img/gallery-img-2.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-3.webp">
              <img width="100%" src="./img/gallery-img-3.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-4.webp">
              <img width="100%" src="./img/gallery-img-4.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-5.webp">
              <img width="100%" src="./img/gallery-img-5.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-6.webp">
              <img width="100%" src="./img/gallery-img-6.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-7.webp">
              {" "}
              <img width="100%" src="./img/gallery-img-7.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-8.webp">
              <img width="100%" src="./img/gallery-img-8.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-9.webp">
              <img width="100%" src="./img/gallery-img-9.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-10.webp">
              <img width="100%" src="./img/gallery-img-10.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-11.webp">
              <img width="100%" src="./img/gallery-img-11.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-12.webp">
              <img width="100%" src="./img/gallery-img-12.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-13.webp">
              <img width="100%" src="./img/gallery-img-13.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-14.webp">
              <img width="100%" src="./img/gallery-img-14.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-15.webp">
              <img width="100%" src="./img/gallery-img-15.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-16.webp">
              <img width="100%" src="./img/gallery-img-16.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-17.webp">
              <img width="100%" src="./img/gallery-img-17.webp" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="./img/gallery-img-18.webp">
              <img width="100%" src="./img/gallery-img-18.webp" />
            </a>
          </Carousel.Item>

          {/* ... */}
        </Carousel>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mb-5 mt-4"
        >
          <h2 className="all-home-head"> Videos</h2>
          <ProgressBar
            animated
            now={100}
            style={{ height: "1px", width: "250px", margin: "auto" }}
          />
        </div>

        <Carousel cols={3} rows={1} gap={20} loop>
          <Carousel.Item>
            <img width="100%" src="./img/gallery-img-8.webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="./img/gallery-img-9.webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="./img/gallery-img-10.webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="./img/gallery-img-11.webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="./img/gallery-img-12.webp" />
          </Carousel.Item>

          {/* ... */}
        </Carousel>
      </Container>
    </div>
  );
};

export default Gallery;
