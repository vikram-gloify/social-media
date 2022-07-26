import React from 'react';
import LeftCard from '../LeftCard/LeftCard';
import './LeftSide.css';

const LeftSide = () => {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    {/* Left Side Single Card Section  */}
                    <LeftCard />
                </div>

            </div>
        </div>

    )
}

export default LeftSide;