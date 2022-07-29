import React, { Component } from "react";
import Slider from "react-slick";
import { images1, images2, images3, images4, images5 } from "../../constant/Images";



export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true
        };
        return (
            <div>

                <Slider {...settings}>
                    <div className="w-100 ps-3 bg-white p-5 border-dash  rounded">
                        <span className="align-item-center"><i className="fa-solid fa-plus align-content-center"></i><h6 className="slider-react-post align-content-center"> Post a Story </h6></span>
                    </div>
                    <div className="ps-3">

                        <span><img src={images1} className="w-100 rounded" alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Judy Nguyen</h6></span>
                    </div>
                    <div className="ps-3">

                        <span><img src={images2} className="w-100 rounded" alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Samuel Bishop</h6></span>
                    </div>
                    <div className="ps-3">

                        <span><img src={images3} className="w-100 rounded" alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Carolyn Ortiz</h6></span>
                    </div>
                    <div className="ps-3">

                        <span><img src={images4} className="w-100 rounded" alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Amanda Reed</h6></span>

                    </div>
                    <div className="ps-3">

                        <span><img src={images5} className="w-100 rounded" alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Lori Stevens</h6></span>
                    </div>
                </Slider>
            </div>
        );
    }
}