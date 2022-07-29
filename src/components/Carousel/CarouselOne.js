import React, { Component } from "react";
import Slider from "react-slick";
import { images1, images2, images3, images4, images5 } from "../../constant/Images";



// React Slick Carousel And Slider


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "primary" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "primary" }}
//             onClick={onClick}
//         />
//     );
// }

// class Base CustomArrows 
export default class CustomArrows extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };
        return (

            //  Slider one React Slick 
            <Slider {...settings}>
                <div className="span w-100 ps-2 pe-2 rounded">
                    <span><i className="fa-solid fa-plus align-content-center"></i></span>
                    <h6 className="slider-react-post align-content-center"> Post a Story </h6>
                </div>
                <div className="ps-2">
                    <img src={images1} className="w-100 rounded" alt="" />
                    <h6 className="text-white" id="slider-react">Judy Nguyen</h6>
                </div>
                <div className="ps-2">
                    <img src={images2} className="w-100 rounded" alt="" />
                    <h6 className="text-white" id="slider-react">Samuel Bishop</h6>
                </div>
                <div className="ps-2">
                    <img src={images3} className="w-100 rounded" alt="" />
                    <h6 className="text-white" id="slider-react">Carolyn Ortiz</h6>
                </div>
                <div className="ps-2">
                    <img src={images4} className="w-100 rounded" alt="" />
                    <h6 className="text-white" id="slider-react">Amanda Reed</h6>

                </div>
                <div className="ps-2">
                    <img src={images5} className="w-100 rounded" alt="" />
                    <h6 className="text-white" id="slider-react">Lori Stevens</h6>
                </div>
            </Slider>

        );
    }
}