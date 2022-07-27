import React from 'react';
import { Apple } from '../../constant/Images';
import './AppleCard.css';

const AppleCard = () => {
    return (
        <div className="card">
            <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="avatar me-2">
                            <a href="/"> <img className="avatar-img rounded-circle" src={Apple} alt="apple-logo" /> </a>
                        </div>
                        <div>
                            <h6 className="card-title mb-0"> <a href="/" className="text-decoration-none apple"> Apple Education </a></h6>
                            <p className="mb-0 small">9 November at 23:29</p>
                        </div>
                    </div>
                    <a href="/" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                    </ul>
                </div>

            </div>

            <div className="card-body pb-0">
                <p>Find out how you can save time in the classNameroom this year. Earn recognition while you learn new skills on iPad and Mac. Start  recognition your first Apple Teacher badge today!</p>

                <ul className="nav nav-stack pb-2 small">
                    <li className="nav-item">
                        <a className="nav-link active text-secondary" href="/"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </a>
                    </li>
                    <li className="nav-item ms-sm-auto">
                        <a className="nav-link" href="/"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                    </li>
                </ul>

            </div>

            <div className="card-footer py-3 bg-white">

                <ul className="nav nav-fill nav-stack small">
                    <li className="nav-item">
                        <a className="nav-link mb-0 active" href="/"> <i className="bi bi-heart pe-1"></i>Liked (56)</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
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

export default AppleCard;