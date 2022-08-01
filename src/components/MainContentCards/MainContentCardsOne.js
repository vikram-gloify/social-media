import React from 'react'
import { addComment, Avatar, lori, mainContent, right1, right2 } from '../../constant/Images';


const MainContentCardsOne = () => {
    return (
        <div className="card">
            <div className="card-header bg-white border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="d-flex align-items-center" >

                        <div className="avatar  avatar-story me-2">
                            <a href="/"> <img className="feed-news-img lori-img rounded-circle" src={right1} alt="" /> </a>
                        </div>
                        <div>
                            <div className="nav nav-divider">
                                <h6 className="nav-item card-title mb-0"> <a href="/" className="lori-ferguson"> Lori Ferguson </a></h6>
                                <span className="nav-item"> 2hr</span>
                            </div>
                            <small className="mb-0">Web Developer at Webestica</small>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="/" className="btn  three-dots py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
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

            <div className="card-body mt-2">
                <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>

                <img className="card-img" src={mainContent} alt="Post" />

                <ul className="nav nav-stack py-3 small">
                    <li className="nav-item">
                        <a className="nav-link active" href="/"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                    </li>

                    <li className="nav-item dropdown ms-sm-auto">
                        <a className="nav-link mb-0" href="/" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
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
                        <a href="/"> <img className="feed-comment rounded-circle" src={addComment} alt="" /> </a>
                    </div>

                    <form className="w-100">
                        <textarea data-autoresize="" className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                    </form>
                </div>

                <ul className="comment-wrap list-unstyled">

                    <li className="comment-item">
                        <div className="d-flex position-relative">

                            <div className="avatar avatar-xs">
                                <a href="/"><img className="feed-comment rounded-circle" src={right2} alt="" /></a>
                            </div>
                            <div className="ms-2">

                                <div className="bg-light rounded-start-top-0 p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1"> <a href="/" className="frances"> Frances Guerrero </a></h6>
                                        <small className="ms-2">5hr</small>
                                    </div>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                </div>

                                <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" > Like (3)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"> Reply</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" > View 5 replies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="comment-item-nested list-unstyled ps-5">

                            <li className="comment-item">
                                <div className="d-flex">

                                    <div className="avatar avatar-xs">
                                        <a href="/"><img className="feed-comment  rounded-circle" src={lori} alt="" /></a>
                                    </div>

                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1"> <a href="/" className="frances"> Lori Stevens </a> </h6>
                                                <small className="ms-2">2hr</small>
                                            </div>
                                            <p className="mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                        </div>

                                        <ul className="nav nav-divider py-2">
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


                            <li className="comment-item">
                                <div className="d-flex">

                                    <div className="avatar avatar-story avatar-xs">
                                        <a href="/"><img className="feed-comment billy-img rounded-circle" src={Avatar} alt="" /></a>
                                    </div>

                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1"> <a href="/" className="frances"> Billy Vasquez </a> </h6>
                                                <small className="ms-2">15min</small>
                                            </div>
                                            <p className=" mb-0">Wishing calling is warrant settled was lucky.</p>
                                        </div>

                                        <ul className="nav nav-divider py-2">
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"> Like</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"> Reply</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <a href="/" role="button" className="btn btn-link btn-link-loader text-decoration-none btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                            <div className="spinner-dots me-2">
                                <i class="bi bi-three-dots"></i>
                            </div>
                            Load more replies
                        </a>

                    </li>


                    <li className="comment-item">
                        <div className="d-flex">

                            <div className="avatar avatar-xs">
                                <a href="/"><img className="feed-comment rounded-circle" src={right2} alt="" /></a>
                            </div>

                            <div className="ms-2">
                                <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1"> <a href="/" className="frances"> Frances Guerrero </a> </h6>
                                        <small className="ms-2">4min</small>
                                    </div>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                </div>

                                <ul className="nav nav-divider pt-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link like" href="/"> Like (1)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link like" href="/"> Reply</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link like" href="/"> View 6 replies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>

            <div className="card-footer bg-white border-0 pt-0">

                <a href="/" role="button" className="btn btn-link btn-link-loader text-decoration-none  btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                    <div className="spinner-dots me-2">
                        <i class="bi bi-three-dots"></i>
                    </div>
                    Load more comments
                </a>
            </div>

        </div>
    )
}

export default MainContentCardsOne;