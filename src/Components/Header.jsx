import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NavbarScroll from './Navbar';

function Header() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <NavbarScroll />

            <Carousel className='mb-5' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                <img src="./img/header-slider-1.webp" alt="" className='header-carousel header-slider-rspns'  />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                  <img src="./img/header-slider-2.webp" alt=""className='header-carousel header-slider-rspns' />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                <img src="./img/header-slider-3.webp" alt="" className='header-carousel header-slider-rspns'/>
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </>


    );
}

export default Header;