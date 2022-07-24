import React from 'react';
import './RightSide.css';

const RightSide = () => {
  return (
    <article>
      <div className="row g-4">
        <div className="col-sm-6 col-lg-12">
          <div className="card">

            <div className="card-header pb-0 border-0 ">
              <h5 className="card-title  mb-0">Who to follow</h5>
            </div>
            <div className="card-body">
              <div className="hstack gap-2 mb-3">
                <div className="avatar">
                  <a href="/"><img className="avatar-img rounded-circle" src="../../assets/images/04 (1).jpg" alt="" /></a>
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 text-decoration-none fw-bold text-dark" href="/">Judy Nguyen </a>
                  <p className="mb-0 small text-truncate">News anchor</p>
                </div>
                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
              </div>
              <div className="hstack gap-2 mb-3">
                <div className="avatar avatar-story">
                  <a href="/"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /> </a>
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 text-decoration-none fw-bold text-dark" href="/">Amanda Reed </a>
                  <p className="mb-0 small text-truncate">Web Developer</p>
                </div>
                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
              </div>

              <div className="hstack gap-2 mb-3">
                <div className="avatar">
                  <a href="/"> <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" /> </a>
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 text-decoration-none fw-bold text-dark" href="/">Billy Vasquez </a>
                  <p className="mb-0 small text-truncate">News anchor</p>
                </div>
                <a className="btn btn-primary rounded-circle icon-md ms-auto" href="/"><i className="bi bi-person-check-fill"> </i></a>
              </div>

              <div className="hstack gap-2 mb-3">
                <div className="avatar">
                  <a href="/"> <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" /> </a>
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 text-decoration-none fw-bold text-dark" href="/">Lori Ferguson </a>
                  <p className="mb-0 small text-truncate">Web Developer at Webestica</p>
                </div>
                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="/"><i className="fa-solid fa-plus"> </i></a>
              </div>

              <div className="hstack gap-2 mb-3">
                <div className="avatar">
                  <a href="/"> <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="" /> </a>
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 text-decoration-none fw-bold text-dark" href="/">Carolyn Ortiz </a>
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

        <div className="col-sm-6 col-lg-12">
          <div className="card">

            <div className="card-header pb-0 border-0">
              <h5 className="card-title mb-0">Today’s news</h5>
            </div>

            <div className="card-body">

              <div className="mb-3">
                <h6 className="mb-0"><a href="/" className="text-decoration-none fw-bold text-dark">Ten questions you should answer truthfully</a></h6>
                <small>2hr</small>
              </div>

              <div className="mb-3">
                <h6 className="mb-0"><a href="/" className="text-decoration-none fw-bold text-dark">Five unbelievable facts about money</a></h6>
                <small>3hr</small>
              </div>

              <div className="mb-3">
                <h6 className="mb-0"><a href="/" className="text-decoration-none fw-bold text-dark">Best Pinterest Boards for learning about business</a></h6>
                <small>4hr</small>
              </div>

              <div className="mb-3">
                <h6 className="mb-0"><a href="/" className="text-decoration-none fw-bold text-dark">Skills that you can learn from business</a></h6>
                <small>6hr</small>
              </div>

              <a href="/" role="button" className="btn btn-link text-decoration-none btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                <div className="spinner-dots me-2">
                  <span className="spinner-dot"></span>
                  <span className="spinner-dot"></span>
                  <span className="spinner-dot"></span>
                </div>
                View all latest news
              </a>
            </div>

          </div>
        </div>

      </div>

    </article>
  )
}

export default RightSide;