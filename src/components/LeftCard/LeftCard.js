import React from 'react';
// import Images Constant Images.js
import { Avatar, calender, chat, cog, earth, feed, LeftBg, notification, person } from '../../constant/Images';

const Card = () => {
    return (

        <>
        {/* Left article background Image  */}
            <div className="card mt-3" >
                <div className="card-header" style={{
                    background: `url(${LeftBg})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`,
                }}>

                </div>
                <div className="card-body">
                    <div className="profile-img profile-img-lg ms-5 mb-3">
                        {/* Avatar Icon */}
                        <a href="/"><img className="profile-avatar rounded img-responsive" src={Avatar} alt="profile-left-img" /></a>
                    </div>
                    {/* Heading  */}
                    <h5 className="card-title text-head text-center">Sam Lanson</h5>
                    <p className="card-subtitle mb-2 fw-light text-center">Web Developer at Webestica</p>
                    <p className="mt-3 fw-light text-center">I'd love to change the world, but they won’t give me the source code.</p>
                    {/* Like and post and follower section */}
                    <div className="like-post-follower gap-2 gap-xl-3 justify-content-center">

                        <div>
                            <h6 className="mb-0 text-center">256</h6>
                            <small className="fw-light">Post</small>
                        </div>

                        <div className="vr ms-2 me-2"></div>

                        <div>
                            <h6 className="mb-0 text-center">2.5K</h6>
                            <small className="fw-light">Followers</small>
                        </div>

                        <div className="vr  ms-2 me-2"></div>

                        <div>
                            <h6 className="mb-0 text-center">365</h6>
                            <small className="fw-light">Following</small>
                        </div>
                    </div>
                    <hr />
                    {/* list feed Icon and text  */}
                    <ul className="list-unstyled">
                        <li> <img className="svg" src={feed} alt="feed" /> <a href="/" className="fw-text text-decoration-none">Feed</a></li>
                        <li> <img className="svg" src={person} alt="connection" /> <a href="/" className="fw-text text-decoration-none">Connections</a></li>
                        <li> <img className="svg" src={earth} alt="latest-news" /> <a href="/" className="fw-text text-decoration-none">Latest News</a></li>
                        <li> <img className="svg" src={calender} alt="event" /> <a href="/" className="fw-text text-decoration-none">Events</a></li>
                        <li> <img className="svg" src={chat} alt="group" /> <a href="/" className="fw-text text-decoration-none">Groups</a></li>
                        <li> <img className="svg" src={notification} alt="notifications" /> <a href="/" className="fw-text text-decoration-none">Notifications</a></li>
                        <li> <img className="svg" src={cog} alt="setting" /> <a href="/" className="fw-text text-decoration-none">Settings</a></li>
                    </ul>
                </div>
                <div className="card-footer text-center" style={{ backgroundColor: `white` }} >
                    <a href="/" className="text-primary text-decoration-none">View Profile</a>
                </div>
            </div>
            {/* card down list in setting and same list */}
            <ul className="nav small mt-4 justify-content-center lh-1">
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none">About</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none">Setting</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none">Support</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none">Docs</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none">Help</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none">Privacys & Terms</a>
                </li>
            </ul>
            {/* copy right section */}
            <p className="small text-center text-website mt-1">©2022 <a className="text-body text-website text-decoration-none" href="/"> Webestica </a></p>
        </ >
    )
}

export default Card;