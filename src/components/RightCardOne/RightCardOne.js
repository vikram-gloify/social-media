import React from 'react';
import { right1, right2, right3, right4, placeholder } from '../../constant/Images';
import './RightCardOne.css';

const RightCardOne = () => {
    return (
        // Right Side One Card Section
        <article className='mt-2'>
            <div className="col-sm-6 col-lg-12">
                <div className="card">
                    <div className="card-header pb-0 border-0 ">
                        <h5 className="card-title  mb-0">Who to follow</h5>
                    </div>
                    <div className="card-body">
                        <div className="rightside gap-2 mb-3">
                            <div className="right">
                                <a href="/"><img className="right1-img rounded-circle" src={right1} alt="right1-img" /></a>
                            </div>
                            <div className="overflow-hidden">
                                <a className="h6 mb-0 text-decoration-none fw-bold card-down" href="/">Judy Nguyen </a>
                                <p className="mb-0 small text-truncate">News anchor</p>
                            </div>
                            <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                        </div>
                        <div className="rightside gap-2 mb-3">
                            <div className="right right-story">
                                <a href="/"> <img className="right2-img rounded-circle" src={right2} alt="right2-img" /> </a>
                            </div>
                            <div className="overflow-hidden">
                                <a className="h6 mb-0 text-decoration-none fw-bold card-down" href="/">Amanda Reed </a>
                                <p className="mb-0 small text-truncate">Web Developer</p>
                            </div>
                            <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                        </div>

                        <div className="rightside gap-2 mb-3">
                            <div className="right">
                                <a href="/"> <img className="right3-img rounded-circle" src={right3} alt="right3-img" /> </a>
                            </div>
                            <div className="overflow-hidden">
                                <a className="h6 mb-0 text-decoration-none fw-bold card-down" href="/">Billy Vasquez </a>
                                <p className="mb-0 small text-truncate">News anchor</p>
                            </div>
                            <a className="btn btn-primary rounded-circle icon-md ms-auto" href="/"><i className="bi bi-person-check-fill"> </i></a>
                        </div>

                        <div className="rightside gap-2 mb-3">
                            <div className="right">
                                <a href="/"> <img className="right4-img rounded-circle" src={right4} alt="right4-img" /> </a>
                            </div>
                            <div className="overflow-hidden">
                                <a className="h6 mb-0 text-decoration-none fw-bold card-down" href="/">Lori Ferguson </a>
                                <p className="mb-0 small text-truncate">Web Developer at Webestica</p>
                            </div>
                            <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                        </div>

                        <div className="rightside gap-2 mb-3">
                            <div className="right">
                                <a href="/"> <img className="placeholder-img rounded-circle" src={placeholder} alt="placeholder-img" /> </a>
                            </div>
                            <div className="overflow-hidden">
                                <a className="h6 mb-0 text-decoration-none fw-bold card-down" href="/">Carolyn Ortiz </a>
                                <p className="mb-0 small text-truncate">News anchor</p>
                            </div>

                            <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                        </div>

                        <div className="d-grid mt-3">
                            <a className="btn btn-sm btn-primary-soft" href="/">View more</a>
                        </div>
                    </div>

                </div>
            </div>

        </article>
    )
}

export default RightCardOne;