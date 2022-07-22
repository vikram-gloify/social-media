import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSide';



const Home = () => {
    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='lg-3'>
                        <LeftSide />
                    </div>
                    <div className='lg-6'>
                        <MainContent />
                    </div>
                    <div className='lg-3'>
                        <RightSide />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;