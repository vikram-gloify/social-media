import React, { Component } from "react";
import Slider from "react-slick";
import { images1, images2, images3, images4, images5 } from "../../constant/Images";



export default class MultipleItems extends Component {

    render() {
        var settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: (
                <div>
                    <div className="next-slick-arrow">
                        <button className="btn-icon-right ">
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            ),
            prevArrow: (
                <div>
                    <div className="prev-slick-arrow">
                        <button className="btn-icon-left">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                    </div>
                </div>
            ),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]

        };

        return (
            <div className="slick-slider">


                <Slider {...settings} >
                    <div className="slider-img active bg-white ps-3 carousel-item border-dash">
                        <i id="icon-bg" className=" mt-5 ms-4 fa-solid rounded-circle icon-poster fa-plus align-center"></i><h6 className="slider-react-post align-center"> Post a Story </h6>
                    </div>
                    <div className="ps-3 carousel-item">

                        <img className="slider-img" src={images1} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Judy Nguyen</h6>
                    </div>
                    <div className="ps-3 carousel-item">

                        <img className="slider-img" src={images2} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Samuel Bishop</h6>
                    </div>
                    <div className="ps-3 carousel-item">

                        <img className="slider-img" src={images3} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Carolyn Ortiz</h6>
                    </div>
                    <div className="ps-3 carousel-item">

                        <img className="slider-img" src={images4} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Amanda Reed</h6>

                    </div>
                    <div className="ps-3 carousel-item">

                        <img className="slider-img" src={images5} alt="" /><h6 className="text-white style-text" id="slider-react-carousel">Lori Stevens</h6>
                    </div>
                </Slider>





            </div>
        );
    }
}