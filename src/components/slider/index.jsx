import slide1 from "../assets/img/slide-car1.jpg"
import slide2 from "../assets/img/slide-car2.jpg"
import slide3 from "../assets/img/slide-car3.jpg"
import slide4 from "../assets/img/slide-car4.jpg"
import slide5 from "../assets/img/slide-car5.jpg"

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slide extends Component {
    render() {
        return(
            <Carousel autoPlay={300} infiniteLoop={true}>
                <div>
                    <img src={slide1} alt="slide"/>
                </div>
                <div>
                    <img src={slide2} alt="slide"/>
                </div>
                <div>
                    <img src={slide3} alt="slide"/>
                </div>
                <div>
                    <img src={slide4} alt="slide"/>
                </div>
                <div>
                    <img src={slide5} alt="slide"/>
                </div>
            </Carousel>
        );
    }
};

export default Slide