import React from 'react';
import './Chat.css';

const Chat = () => {
    return (
        <section>
            <a className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5" data-bs-toggle="offcanvas" href="#offcanvasChat" role="button" aria-controls="offcanvasChat">
                <span class='bi bi-chat-left-text-fill' style={{ color: `white` }}></span>
            </a>
        </section>
    )
}

export default Chat;