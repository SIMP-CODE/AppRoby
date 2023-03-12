
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slide extends Component {
    render() {
        return(
            <Carousel autoPlay={300} infiniteLoop={true}>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide2.png'} alt="slide"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide3.png'} alt="slide"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide4.png'} alt="slide"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide5.png'} alt="slide"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide6.png'} alt="slide"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide7.png'} alt="slide"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/slide/car-slide1.png'} alt="slide"/>
                </div>
            </Carousel>
        );
    }
};

export default Slide