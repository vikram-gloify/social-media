import React from 'react';
import RightCardOne from '../RightCardOne/RightCardOne';
import RightCardTwo from '../RightCardTwo/RightCardTwo';
import './RightSide.css';

const RightSide = () => {
  return (
    <div className="container-fluid">
      <div className="row g-3">
        <div className="col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

          <RightCardOne />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
          <RightCardTwo />

        </div>

      </div>

    </div>
  )
}

export default RightSide;