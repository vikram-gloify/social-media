import React, { Component } from "react";
import Slider from "react-slick";
import { Amanda, addComment, Larry, right3 } from "../../constant/Images";

export default class Responsive extends Component {
    render() {
        var settings = {
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow: (
                <div>
                    <div className="next-slick-arrow">
                        <button className="btn-icon-right">
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
                        slidesToShow: 3,
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
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="card">
                <div className="card-header bg-white active d-flex justify-content-between align-items-center border-0 pb-0">
                    <h6 className="card-title lori-ferguson mb-1">People you may know</h6>
                    <a href="/" className="btn btn-sm-header btn-primary-soft">See all</a >
                </div>

                <Slider {...settings} className="mt-3 mb-3">
                    <div className="scroll-card ps-3 " style={{ width: `15rem` }}>
                        <div className="card">
                            <div className="card-header bg-white border-0">
                                <img src={addComment} className="scroll-img rounded-circle" alt="add-comment" />
                            </div>
                            <div className="card-body card-body-h-p">
                                <h6 className="card-title  mb-1 "><a href="/" className="lori-ferguson"> Dennis Barrett </a></h6>
                                <small className="lh-sm">21 mutual connections</small>
                            </div>
                            <div className="card-footer card-footer-btn bg-white border-0">
                                <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                            </div>
                        </div>
                    </div>
                    <div className="scroll-card ps-3 " style={{ width: `15rem` }}>
                        <div className="card">
                            <div className="card-header  bg-white border-0">
                                <img src={Amanda} className="scroll-img rounded-circle" alt="Amanda" />
                            </div>
                            <div className="card-body card-body-h-p">
                                <h6 className="card-title  mb-1 "><a href="/" className="lori-ferguson"> Amanda Reed  </a></h6>
                                <small className="lh-sm">50 mutual connections</small>
                            </div>
                            <div className="card-footer card-footer-btn bg-white border-0">
                                <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                            </div>
                        </div>
                    </div>
                    <div className="scroll-card ps-3 " style={{ width: `15rem` }}>

                        <div className="card">
                            <div className="card-header  bg-white border-0">
                                <img src={Larry} className="scroll-img larry-border rounded-circle" alt="Larry" />
                            </div>
                            <div className="card-body card-body-h-p">
                                <h6 className="card-title  mb-1 "> <a href="/" className="lori-ferguson"> Larry Lawson </a> </h6>
                                <small className="lh-sm">33 mutual connections</small>
                            </div>
                            <div className="card-footer card-footer-btn bg-white border-0">
                                <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                            </div>
                        </div>
                    </div>
                    <div className="scroll-card ps-3 " style={{ width: `15rem` }}>

                        <div className="card">
                            <div className="card-header  bg-white border-0">
                                <img src={right3} className="scroll-img rounded-circle" alt="right3" />
                            </div>
                            <div className="card-body card-body-h-p">
                                <h6 className="card-title  mb-1 "> <a href="/" className="lori-ferguson"> Louis Crawford</a> </h6>
                                <small className="lh-sm">45 mutual connections</small>
                            </div>
                            <div className="card-footer card-footer-btn bg-white border-0">
                                <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                            </div>
                        </div>
                    </div>
                </Slider>


                <div className="card-footer bg-white border-0 mt-3">

                </div>
            </div>
        );
    }
}