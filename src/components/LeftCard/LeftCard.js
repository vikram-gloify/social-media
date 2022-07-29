import React from 'react';
import { Avatar, calender, chat, cog, earth, feed, LeftBg, notification, person } from '../../constant/Images';

const Card = () => {
    return (

        <>
            <div className="card mt-3">
                <div className="card-header" style={{
                    background: `url(${LeftBg})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`,
                }}>

                </div>
                <div className="card-body">
                    <div className="avatar ms-5 mb-3">
                        <a href="/"><img className="avatar-profile rounded" src={Avatar} alt="profile-left-img" /></a>
                    </div>
                    <h5 className="card-title text-head text-center">Sam Lanson</h5>
                    <p className="card-subtitle mb-2 fw-light text-center">Web Developer at Webestica</p>
                    <p className="mt-3 fw-light text-center">I'd love to change the world, but they won’t give me the source code.</p>

                    <div className="hstack gap-2 gap-xl-3 justify-content-center">

                        <div>
                            <h6 className="mb-0 ">256</h6>
                            <small className="fw-light">Post</small>
                        </div>

                        <div className="vr"></div>

                        <div>
                            <h6 className="mb-0 ">2.5K</h6>
                            <small className="fw-light">Followers</small>
                        </div>

                        <div className="vr"></div>

                        <div>
                            <h6 className="mb-0 ">365</h6>
                            <small className="fw-light">Following</small>
                        </div>
                    </div>
                    <hr />
                    <ul className="list-unstyled">
                        <li> <img className="svg" src={feed} alt="feed" /> <a href="/" className="card-down  text-decoration-none">Feed</a></li>
                        <li> <img className="svg" src={person} alt="connection" /> <a href="/" className="card-down  text-decoration-none">Connections</a></li>
                        <li> <img className="svg" src={earth} alt="latest-news" /> <a href="/" className="card-down  text-decoration-none">Latest News</a></li>
                        <li> <img className="svg" src={calender} alt="event" /> <a href="/" className="card-down  text-decoration-none">Events</a></li>
                        <li> <img className="svg" src={chat} alt="group" /> <a href="/" className="card-down  text-decoration-none">Groups</a></li>
                        <li> <img className="svg" src={notification} alt="notifications" /> <a href="/" className="card-down  text-decoration-none">Notifications</a></li>
                        <li> <img className="svg" src={cog} alt="setting" /> <a href="/" className="card-down  text-decoration-none">Settings</a></li>
                    </ul>
                </div>
                <div className="card-footer text-center" style={{ backgroundColor: `white` }} >
                    <a href="/" className="text-primary text-decoration-none">View Profile</a>
                </div>
            </div>
            <ul className="nav small mt-4 justify-content-center lh-1">
                <li className="nav-link">
                    <a href="/" className="card-down text-decoration-none">About</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="card-down text-decoration-none">Setting</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="card-down text-decoration-none">Support</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="card-down text-decoration-none">Docs</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="card-down text-decoration-none">Help</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="card-down text-decoration-none">Privacys & Terms</a>
                </li>
            </ul>
            <p className="small text-center mt-1">©2022 <a className="text-body text-decoration-none" target="_blank" href="/"> Webestica </a></p>
        </ >
    )
}

export default Card;