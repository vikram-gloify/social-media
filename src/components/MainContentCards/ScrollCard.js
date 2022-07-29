import React, { Component } from "react";
import Slider from "react-slick";
import { Amanda, addComment, Larry, right3 } from "../../constant/Images";

export default class SimpleSlider extends Component {
    render() {
        const settings = {

            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            responsive: null
        };

        return (




            <div className="col">
                <div className="card">
                    <div className="card-header  d-flex justify-content-between align-items-center border-0 pb-0">
                        <h6 className="card-title mb-1">People you may know</h6>
                        <a href="/" className="btn btn-sm-header btn-primary-soft">See all</a >
                    </div>



                    <Slider {...settings} className="mt-4">

                        <div className="scroll-card ps-3">
                            <div className="card">
                                <div className="card-header bg-white border-0">
                                    <img src={addComment} className="scroll-img rounded-circle" alt="add-comment" />
                                </div>
                                <div className="card-body card-body-h-p">
                                    <h6 className="card-title mb-1 "> Dennis Barrett </h6>
                                    <p className=" small lh-sm">21 mutual connections</p>
                                </div>
                                <div className="card-footer card-footer-btn bg-white border-0">
                                    <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                                </div>
                            </div>
                        </div>
                        <div className="scroll-card ps-3">
                            <div className="card">
                                <div className="card-header  bg-white border-0">
                                    <img src={Amanda} className="scroll-img rounded-circle" alt="Amanda" />
                                </div>
                                <div className="card-body card-body-h-p">
                                    <h6 className="card-title mb-1 "> Amanda Reed </h6>
                                    <p className=" small lh-sm">50 mutual connections</p>
                                </div>
                                <div className="card-footer card-footer-btn bg-white border-0">
                                    <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                                </div>
                            </div>
                        </div>
                        <div className="scroll-card ps-3">

                            <div className="card">
                                <div className="card-header  bg-white border-0">
                                    <img src={Larry} className="scroll-img larry-border rounded-circle" alt="Larry" />
                                </div>
                                <div className="card-body card-body-h-p">
                                    <h6 className="card-title mb-1 "> Larry Lawson </h6>
                                    <p className=" small lh-sm">33 mutual connections</p>
                                </div>
                                <div className="card-footer card-footer-btn bg-white border-0">
                                    <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                                </div>
                            </div>
                        </div>
                        <div className="scroll-card ps-3">

                            <div className="card">
                                <div className="card-header  bg-white border-0">
                                    <img src={right3} className="scroll-img rounded-circle" alt="right3" />
                                </div>
                                <div className="card-body card-body-h-p">
                                    <h6 className="card-title mb-1 "> Louis Crawford </h6>
                                    <p className=" small lh-sm">45 mutual connections</p>
                                </div>
                                <div className="card-footer card-footer-btn bg-white border-0">
                                    <a href="/" className="btn btn-sm btn-primary-soft">Add friend</a >
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="card-footer bg-white border-0 mb-3">
                    </div>
                </div>
            </div>

        );
    }
}