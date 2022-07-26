import React from 'react'
import { mainProfile } from '../../constant/Images';
import './MainSecondCard.css';

const MainSecondCard = () => {
    return (
        <div className="card card-body">
            <div className="d-flex mb-3">

                <div className="avatar avatar-xs me-2">
                    <a href="/"> <img className="avatar-img rounded-circle" src={mainProfile} alt="" /> </a>
                </div>

                <form className="w-100">
                    <textarea className="form-control pe-4 border-0" rows="2" data-autoresize="" placeholder="Share your thoughts..."></textarea>
                </form>
            </div>

            <ul className="nav nav-pills nav-stack small fw-normal">
                <li className="nav-item ms-2">
                    <a className="nav-link bg-light text-MainSecondCard py-1 px-2 mb-0" href="/" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="bi bi-image-fill text-success pe-2"></i>Photo</a>
                </li>
                <li className="nav-item  ms-2">
                    <a className="nav-link bg-light text-MainSecondCard py-1 px-2 mb-0" href="/" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i className="bi bi-camera-reels-fill text-info pe-2"></i>Video</a>
                </li>
                <li className="nav-item  ms-2">
                    <a href="/" className="nav-link bg-light text-MainSecondCard py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="bi bi-calendar2-event-fill text-danger pe-2"></i>Event </a>
                </li>
                <li className="nav-item  ms-2">
                    <a className="nav-link bg-light text-MainSecondCard py-1 px-2 mb-0" href="/" data-bs-toggle="modal" data-bs-target="#modalCreateFeed"> <i className="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling /Activity</a>
                </li>
                <li className="nav-item dropdown ms-lg-auto">
                    <a className="nav-link bg-light text-MainSecondCard py-1 px-2 mb-0" href="/" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots"></i>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll</a></li>
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Help</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}

export default MainSecondCard;