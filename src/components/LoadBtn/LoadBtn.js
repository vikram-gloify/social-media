import React from 'react';
import './LoadBtn.css';

const LoadBtn = () => {
    return (
        <a href="/0" role="button" class="btn-loader btn-load primary-soft w-100 border-0 mb-3 active" data-bs-toggle="button" aria-pressed="true">
            <span class="load-text"> Load more </span>
            <div class="load-icon">
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </a>
    )
}

export default LoadBtn;