import React from 'react'
import { WebLogo, WebPoster } from '../../constant/Images'

const MainFeedCardFour = () => {
    return (
        <div className="card">

            <div className="card-header bg-white border-0 pt-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">

                        <div className="avatar me-2">
                            <a href="/"> <img className="feed-news-img rounded-circle" src={WebLogo} alt="" /> </a>
                        </div>
                        <div>
                            <h6 className="card-title mb-0"> <a href="/" className="text-decoration-none lori-ferguson"> Webestica </a></h6>
                            <p className="small mb-0">9 December at 10:00 </p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="/" className="text-secondary btn three-dots py-1 px-2" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
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
            <span className="webestica-boder"></span>
            <div className="card-body pt-4">
                <p className="mb-0">The next-generation blog, news, and magazine theme for you to start sharing your content today with beautiful aesthetics! This minimal &amp; clean Bootstrap 5 based theme is ideal for all types of sites that aim to provide users with content. <a href="/" className="text-decoration-none"> /bootstrap</a> <a href="/" className="text-decoration-none"> /webestica </a> <a href="/" className="text-decoration-none"> /getbootstrap</a> <a href="/" className="text-decoration-none"> /bootstrap5 </a></p>
            </div>
            <a href="/"> <img src={WebPoster} alt="" className="w-100" /> </a>
            <div className="card-body position-relative bg-light">
                <a href="/" className="small text-decoration-none stretched-link">https://blogzine.webestica.com</a>
                <h6 className="mb-0 mt-1">Blogzine - Blog and Magazine Bootstrap 5 Theme</h6>
                <p className="mb-0 small">Bootstrap based News, Magazine and Blog Theme</p>
            </div>
            <div className="card-footer py-3">

                <ul className="nav nav-fill nav-stack small">
                    <li className="nav-item">
                        <a className="nav-link mb-0 active" href="/"> <i className="bi bi-heart pe-1"></i>Liked (56)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mb-0" href="/"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link mb-0" id="feedActionShare7" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare7">
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mb-0" href="/"> <i className="bi bi-send-fill pe-1"></i>Send</a>
                    </li>
                </ul>

            </div>


        </div>
    )
}

export default MainFeedCardFour