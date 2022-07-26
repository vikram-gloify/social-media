import React from 'react';


const RightCardTwo = () => {
    return (
        <article className="rightCardTwo">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="card">

                    <div className="card-header bg-white pb-0 border-0">
                        <h5 className="card-title mb-0 mt-2">Today’s news</h5>
                    </div>

                    <div className="card-body">

                        <div className="mb-3">
                            <h6 className="mb-0"><a href="/" className="card-down text-decoration-none fw-text">Ten questions you should answer truthfully</a></h6>
                            <small>2hr</small>
                        </div>

                        <div className="mb-3">
                            <h6 className="mb-0"><a href="/" className="card-down text-decoration-none fw-text">Five unbelievable facts about money</a></h6>
                            <small>3hr</small>
                        </div>

                        <div className="mb-3">
                            <h6 className="mb-0"><a href="/" className="card-down text-decoration-none fw-text">Best Pinterest Boards for learning about business</a></h6>
                            <small>4hr</small>
                        </div>

                        <div className="mb-3">
                            <h6 className="mb-0"><a href="/" className="card-down text-decoration-none fw-text">Skills that you can learn from business</a></h6>
                            <small>6hr</small>
                        </div>

                        <a href="/" role="button" className="btn btn-link text-decoration-none btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                            <div className="spinner-dots me-2">
                                <i className="bi bi-three-dots"></i>
                            </div>
                            View all latest news
                        </a>
                    </div>

                </div>
            </div>



        </article>
    )
}

export default RightCardTwo