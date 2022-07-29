import React from 'react';


const Chat = () => {
    return (
        <>
            {/* Chat Feed Fixed icon */}
            <a className="icon-md chat-btn btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5" data-bs-toggle="offcanvas" href="#offcanvasChat" role="button" aria-controls="offcanvasChat">
                <span class='bi bi-chat-left-text-fill' style={{ color: `white` }}></span>
            </a>
        </>
    )
}

export default Chat;