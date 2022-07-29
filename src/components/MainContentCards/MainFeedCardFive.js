import React from 'react'
import { addComment, lori, poster, right2 } from '../../constant/Images'

const MainFeedCardFive = () => {
    return (
        <div className="card">
            <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">

                        <div className="avatar avatar-story me-2">
                            <a href="/"> <img className="avatar-img rounded-circle" src={addComment} alt="" /> </a>
                        </div>

                        <div>
                            <div className="nav nav-divider">
                                <h6 className="nav-item card-title mb-0"> <a href="/" className="text-decoration-none joan-text"> Joan Wallace </a></h6>
                                <span className="nav-item small"> 1day</span>
                            </div>
                            <p className="mb-0 small">12 January at 12:00</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="/" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction2">
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-body pb-0">
                <p>Comfort reached gay perhaps chamber his <a href="/" className="text-decoration-none">#internship</a>  <a href="/" className="text-decoration-none">#hiring</a> <a href="/" className="text-decoration-none">#apply</a> </p>
            </div>


            <video className="overflow-hidden fullscreen-video w-100" loop controls autoplay="" muted>
                <source src={poster} type="video/mp4" />
                <source src={poster} type="video/ogg" />
            </video>



            <div className="card-body pt-0">
                <ul className="nav nav-stack py-3 small">
                    <li className="nav-item">
                        <a className="nav-link active" href="/"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                    </li>
                    <li className="nav-item dropdown ms-sm-auto">
                        <a className="nav-link mb-0" href="/" id="cardShareAction9" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction9">
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                        </ul>
                    </li>
                </ul>


                <div className="d-flex mb-3">

                    <div className="avatar avatar-xs me-2">
                        <a href="/"> <img className="video-img rounded-circle" src={addComment} alt="" /> </a>
                    </div>


                    <form className="position-relative w-100">
                        <textarea data-autoresize="" className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>


                    </form>
                </div>

                <ul className="comment-wrap list-unstyled mb-0">

                    <li className="comment-item">
                        <div className="d-flex">

                            <div className="avatar avatar-xs">
                                <a href="/"><img className="video-img rounded-circle" src={right2} alt="" /></a>
                            </div>
                            <div className="ms-2">

                                <div className="bg-light rounded-start-top-0 p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1"> <a href="/" className="text-decoration-none joan-text"> Frances Guerrero </a></h6>
                                        <small className="ms-2">5hr</small>
                                    </div>
                                    <p className="small mb-0">Preference any astonished unreserved Mrs.</p>
                                </div>

                                <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"> Like (3)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"> Reply</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"> View 5 replies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="comment-item-nested list-unstyled ps-5">

                            <li className="comment-item">
                                <div className="d-flex">

                                    <div className="avatar avatar-xs">
                                        <a href="/"><img className="video-img rounded-circle" src={lori} alt="" /></a>
                                    </div>

                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1"> <a href="/" className="text-decoration-none joan-text"> Lori Stevens </a> </h6>
                                                <small className="ms-2">2hr</small>
                                            </div>
                                            <p className="small mb-0">Dependent on so extremely delivered by. Yet ﻿no jokes worse her why.</p>
                                        </div>
                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"> Like (5)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"> Reply</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="card-footer bg-white border-0 pt-0">
                <a href="/" role="button" className="btn btn-link text-decoration-none btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                    <div className="spinner-dots me-2">
                        <i class="bi bi-three-dots"></i>
                    </div>
                    Load more comments
                </a>
            </div>

        </div>
    )
}

export default MainFeedCardFive