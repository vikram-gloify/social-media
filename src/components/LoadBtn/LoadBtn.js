import React from 'react';
import './LoadBtn.css';

const LoadBtn = () => {
    return (
        <a href="/" role="button" className="btn btn-loader btn-primary-soft active" data-bs-toggle="button" aria-pressed="true">
            <span className="load-text"> Load more </span>
            <div className="load-icon">
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </a>
    )
}

export default LoadBtn;