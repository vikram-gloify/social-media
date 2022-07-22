import React from 'react';
import { Avatar, calender, chat, cog, earth, feed, notification, person } from '../../constant/Images';
import './Card.css';

const Card = () => {
    return (

        <article className='mt-5'>
            <div className="card">
                <div className="card-heading">

                    <img src={Avatar} alt="profile-logo" className="profile-logo" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">Sam Lanson</h5>
                    <small className="card-subtitle mb-2">Web Developer at Webestica</small>
                    <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                    <div className="hstack gap-2 gap-xl-3 justify-content-center">

                        <div>
                            <h6 className="mb-0 fw-bold">256</h6>
                            <small>Post</small>
                        </div>

                        <div className="vr"></div>

                        <div>
                            <h6 className="mb-0 fw-bold">2.5K</h6>
                            <small>Followers</small>
                        </div>

                        <div className="vr"></div>

                        <div>
                            <h6 className="mb-0 fw-bold">365</h6>
                            <small>Following</small>
                        </div>
                    </div>
                    <hr />
                    <ul className="list-unstyled">
                        <li> <img className="svg" src={feed} alt="feed" /> <a href="/" className="text-dark fw-bold text-decoration-none">Feed</a></li>
                        <li> <img className="svg" src={person} alt="connection" /> <a href="/" className="text-dark fw-bold text-decoration-none">Connections</a></li>
                        <li> <img className="svg" src={earth} alt="latest-news" /> <a href="/" className="text-dark fw-bold text-decoration-none">Latest News</a></li>
                        <li> <img className="svg" src={calender} alt="event" /> <a href="/" className="text-dark fw-bold text-decoration-none">Events</a></li>
                        <li> <img className="svg" src={chat} alt="group" /> <a href="/" className="text-dark fw-bold text-decoration-none">Groups</a></li>
                        <li> <img className="svg" src={notification} alt="notifications" /> <a href="/" className="text-dark fw-bold text-decoration-none">Notifications</a></li>
                        <li> <img className="svg" src={cog} alt="setting" /> <a href="/" className="text-dark fw-bold text-decoration-none">Settings</a></li>
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <a href="/" className="text-primary text-decoration-none">View Profile</a>
                </div>
            </div>
            <ul className="nav small mt-4 justify-content-center lh-1">
                <li className="nav-link">
                    <a href="/" className="text-dark text-decoration-none">About</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="text-dark text-decoration-none">Setting</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="text-dark text-decoration-none">Support</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="text-dark text-decoration-none">Docs</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="text-dark text-decoration-none">Help</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="text-dark text-decoration-none">Privacys & Terms</a>
                </li>
            </ul>
            <p className="small text-center mt-1">©2022 <a className="text-body text-decoration-none" target="_blank" href="/"> Webestica </a></p>
        </article>
    )
}

export default Card;