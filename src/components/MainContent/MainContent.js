import React from 'react'
import CarouselOne from '../Carousel/CarouselOne';
import AppleCard from '../MainContentCards/AppleCard';
import MainContentCardsOne from '../MainContentCards/MainContentCardsOne';
import MainContentCardTwo from '../MainContentCards/MainContentCardTwo';
import MainFeedCard from '../MainContentCards/MainFeedCard';
import MainSecondCard from '../MainSecondCard/MainSecondCard';
import ScrollCard from '../MainContentCards/ScrollCard';
import LoadBtn from '../LoadBtn/LoadBtn';


const MainContent = () => {
    return (
        <section className="container-fluid">
            <div className="mt-3">
                <div className="col">
                    <CarouselOne />
                </div>
                <div className="mt-3">
                    <div className="col">

                        <MainSecondCard />

                    </div>

                </div>
                <div className="mt-3">
                    <div className="col">

                        <MainContentCardsOne />

                    </div>

                </div>
                <div className="mt-3">
                    <div className="col">

                        <MainContentCardTwo />

                    </div>

                </div>
                <div className="mt-3">
                    <div className="col">

                        <MainFeedCard />
                    </div>

                </div>
                <div className="mt-3">
                    <div className="col">
                        <AppleCard />
                    </div>

                </div>
                <div className="mt-3">
                    <div className="col">
                        <ScrollCard />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="col">
                        <LoadBtn />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MainContent