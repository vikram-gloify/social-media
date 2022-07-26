import React from 'react'
import MainContentCardsOne from '../MainContentCards/MainContentCardsOne';
import MainContentCardTwo from '../MainContentCards/MainContentCardTwo';
import MainSecondCard from '../MainSecondCard/MainSecondCard';
import TinySlider from '../TinySlider/TinySlider';

const MainContent = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col">
                    <TinySlider />
                </div>
                <div className="row mt-3">
                    <div className="col">

                        <MainSecondCard />

                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col">

                        <MainContentCardsOne />

                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col">

                        <MainContentCardTwo />

                    </div>

                </div>
            </div>

        </section>
    )
}

export default MainContent