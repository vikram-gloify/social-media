import React from 'react';
import { right1, right2, right3, right4, placeholder } from '../../constant/Images';

const RightCardOne = () => {
    return (
        <>
            <div className="card mt-3">

                <div className="card-header bg-white pb-0 border-0">
                    <h5 className="card-title mb-0 mt-2">Who to follow</h5>
                </div>

                <div className="card-body">

                    <div className="right-side-profile gap-2 mb-3">

                        <div className="right-side">
                            <a href="/"><img className="right-side-img rounded-circle" src={right1} alt="" /></a>
                        </div>

                        <div className="overflow-hidden">
                            <a className="h6 mb-0 text-decoration-none  fw-text" href="/">Judy Nguyen </a>
                            <p className="mb-0 fw-200 text-truncate">News anchor</p>
                        </div>

                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                    </div>


                    <div className="right-side-profile gap-2 mb-3">

                        <div className="right-side avatar-story">
                            <a href="/"> <img className="right-side-img amanda rounded-circle" src={right2} alt="" /> </a>
                        </div>

                        <div className="overflow-hidden">
                            <a className="h6 mb-0 text-decoration-none  fw-text" href="/">Amanda Reed </a>
                            <p className="mb-0 fw-200 text-truncate">Web Developer</p>
                        </div>

                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                    </div>



                    <div className="right-side-profile gap-2 mb-3">

                        <div className="right-side">
                            <a href="/"> <img className="right-side-img rounded-circle" src={right3} alt="" /> </a>
                        </div>

                        <div className="overflow-hidden">
                            <a className="h6 mb-0 text-decoration-none  fw-text" href="/">Billy Vasquez </a>
                            <p className="mb-0 fw-200 text-truncate">News anchor</p>
                        </div>

                        <a className="btn btn-primary rounded-circle icon-md ms-auto" href="/"><i className="bi bi-person-check-fill"> </i></a>
                    </div>



                    <div className="right-side-profile gap-2 mb-3">

                        <div className="right-side">
                            <a href="/"> <img className="right-side-img rounded-circle" src={right4} alt="" /> </a>
                        </div>

                        <div className="overflow-hidden">
                            <a className="h6 mb-0 text-decoration-none  fw-text" href="/">Lori Ferguson </a>
                            <p className="mb-0 fw-200 text-truncate">Web Developer at Webestica</p>
                        </div>

                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                    </div>

                    <div className="right-side-profile gap-2 mb-3">

                        <div className="right-side">
                            <a href="/"> <img className="right-side-img rounded-circle" src={placeholder} alt="" /> </a>
                        </div>

                        <div className="overflow-hidden">
                            <a className="h6 mb-0 text-decoration-none  fw-text" href="/">Carolyn Ortiz </a>
                            <p className="mb-0 fw-200 text-truncate">News anchor</p>
                        </div>

                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
                    </div>

                    <div className="d-grid mt-3">
                        <a className="btn btn-sm btn-primary-soft" href="/">View more</a>
                    </div>
                </div>

            </div>
        </>

    )
}

export default RightCardOne;