import React from 'react'
import './CarouselOne.css';

const CarouselOne = () => {
    return (
        <div className="tiny-slider arrow-hover overflow-hidden">
            <div className="tns-outer" id="tns1-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1 to 5</span>  of 6</div><div id="tns1-mw" className="tns-ovh"><div className="tns-inner" id="tns1-iw"><div className="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl="4" data-items-lg="3" data-items-md="3" data-items-sm="3" data-items-xs="2" data-gutter="12" data-edge="30" id="tns1" style={{ transform: `translate3d(0 %, 0px, 0px) ` }}>


                <div className="tns-item tns-slide-active" id="tns1-item0">

                    <div className="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center">
                        <div>
                            <a className="stretched-link btn btn-light rounded-circle icon-md" href="/"><i className="fa-solid fa-plus"></i></a>
                            <h6 className="mt-2 mb-0 small">Post a Story</h6>
                        </div>
                    </div>

                </div>


                <div className="tns-item tns-slide-active" id="tns1-item1">

                    <div className="card card-overlay-bottom border-0 position-relative h-150px tiny-sliderOne">
                        <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">

                                <a href="/" className="stretched-link text-white small text-decoration-none text-center">Judy Nguyen</a>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="tns-item tns-slide-active" id="tns1-item2">

                    <div className="card card-overlay-bottom border-0 position-relative h-150px tiny-sliderTwo">
                        <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">


                                <a href="/" className="stretched-link text-white small text-decoration-none text-center">Samuel Bishop</a>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="tns-item tns-slide-active" id="tns1-item3">

                    <div className="card card-overlay-bottom border-0 position-relative h-150px tiny-sliderThird">
                        <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">

                                <a href="/" className="stretched-link text-white small text-decoration-none text-center">Carolyn Ortiz</a>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="tns-item tns-slide-active" id="tns1-item4">

                    <div className="card card-overlay-bottom border-0 position-relative h-150px tiny-sliderFour">
                        <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">

                                <a href="/" className="stretched-link text-white small text-decoration-none text-center">Amanda Reed</a>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="tns-item" id="tns1-item5" aria-hidden="true" tabindex="-1">

                    <div className="card card-overlay-bottom border-0 position-relative h-150px tiny-sliderFive">
                        <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">

                                <a href="/" className="stretched-link text-white small text-decoration-none text-center">Lori Stevens</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div></div></div><div className="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns1" aria-label="Carousel Page 1 (Current Slide)" className="tns-nav-active"></button><button type="button" data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2" className="" tabindex="-1"></button><button type="button" data-nav="2" tabindex="-1" aria-controls="tns1" style={{ display: `none` }} aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabindex="-1" aria-controls="tns1" style={{ display: `none` }} aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabindex="-1" aria-controls="tns1" style={{ display: `none` }} aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabindex="-1" aria-controls="tns1" style={{ display: `none` }} aria-label="Carousel Page 6"></button></div><div className="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1" disabled=""><i className="fa-solid fa-chevron-left"></i></button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1"><i className="fa-solid fa-chevron-right"></i></button></div></div>
        </div>
    )
}

export default CarouselOne;