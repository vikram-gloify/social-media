import React from 'react';
import RightCardOne from '../RightCardOne/RightCardOne';
import RightCardTwo from '../RightCardTwo/RightCardTwo';


const RightSide = () => {
  return (
    // Right Side article
    <div className="container-fluid">

      <div className="row g-3">
        {/* Left Side */}
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <RightCardOne />
        </div>
        {/* Right Side*/}
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <RightCardTwo />
        </div>

      </div>

    </div>
  )
}

export default RightSide;