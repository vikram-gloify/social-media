import React from 'react';
// import CarouselOne from '../Carousel/CarouselOne';
import AppleCard from '../MainContentCards/AppleCard';
import MainContentCardsOne from '../MainContentCards/MainContentCardsOne';
import MainContentCardTwo from '../MainContentCards/MainContentCardTwo';
import MainFeedCard from '../MainContentCards/MainFeedCard';
import MainSecondCard from '../MainSecondCard/MainSecondCard';
import ScrollCard from '../MainContentCards/ScrollCard';
// import LoadBtn from '../LoadBtn/LoadBtn';
import MainFeedCardTwo from '../MainContentCards/MainFeedCardTwo';
import MainFeedCardThree from '../MainContentCards/MainFeedCardThree';
import MainFeedCardFour from '../MainContentCards/MainFeedCardFour';
import MainFeedCardFive from '../MainContentCards/MainFeedCardFive';


const MainContent = () => {
    return (
        <>
            <div className="mt-3">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    {/* Slider Section */}
                    {/* <CarouselOne /> */}
                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* Upload Section */}
                        <MainSecondCard />

                    </div>

                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainContentCardsOne />

                    </div>

                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainContentCardTwo />

                    </div>

                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainFeedCard />
                    </div>

                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <AppleCard />
                    </div>

                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <ScrollCard />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainFeedCardTwo />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainFeedCardThree />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainFeedCardFour />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section */}
                        <MainFeedCardFive />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* News Feed Section  loadBtn */}
                        {/* <LoadBtn /> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainContent