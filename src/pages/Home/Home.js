import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
// import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSide';




const Home = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <LeftSide />
                </div>
                {/* <div className="col-md-8 col-lg-6">
                    <MainContent />

                </div> */}
                <div className="col-lg-3">
                    <RightSide />
                </div>

            </div>

        </div>
    )
}

export default Home;