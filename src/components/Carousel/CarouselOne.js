import React, { Component } from "react";
import Slider from "react-slick";
import { images1, images2, images3, images4, images5 } from "../../constant/Images";



export default class MultipleItems extends Component {
    render() {
        var settings = {
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,

        };
        return (
            <div>

                <Slider {...settings}>
                    <div className="slider-img bg-white ps-3 border-dash">
                        <i className="fa-solid fa-plus align-center"></i><h6 className="slider-react-post align-center"> Post a Story </h6>
                    </div>
                    <div className="ps-3">

                        <img className="slider-img" src={images1} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Judy Nguyen</h6>
                    </div>
                    <div className="ps-3">

                        <img className="slider-img" src={images2} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Samuel Bishop</h6>
                    </div>
                    <div className="ps-3">

                        <img className="slider-img" src={images3} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Carolyn Ortiz</h6>
                    </div>
                    <div className="ps-3">

                        <img className="slider-img" src={images4} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Amanda Reed</h6>

                    </div>
                    <div className="ps-3">

                        <img className="slider-img" src={images5} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Lori Stevens</h6>
                    </div>
                </Slider>
            </div>
        );
    }
}