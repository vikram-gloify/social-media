import React from 'react'
import { images1, images2, images3, images4, images5 } from '../../constant/Images';
import './TinySlider.css';

const TinySlider = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col mt-2">
                    <img src={images1} className="card-img-top" alt="" />

                </div>
                <div className="col mt-2">

                    <img src={images2} className="card-img-top" alt="" />
                </div>
                <div className="col mt-2">

                    <img src={images3} className="card-img-top" alt="" />
                </div>
                <div className="col mt-2">
                    <img src={images4} className="card-img-top" alt="" />

                </div>
                <div className="col mt-2">

                    <img src={images5} className="card-img-top" alt="" />
                </div>

            </div>

        </div>

    )
}

export default TinySlider