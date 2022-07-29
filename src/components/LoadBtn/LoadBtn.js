import React from 'react';


const LoadBtn = () => {
    return (
        <a href="/" role="button" className="btn btn-loader btn-primary-soft active" data-bs-toggle="button" aria-pressed="true">
            <span className="load-text text-white"> Load more </span>
            <div className="load-icon">
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </a>
    )
}

export default LoadBtn;