import React from 'react';
import Banner from './Banner';
import HowWorks from './HowWorks';
import OurServices from './OurServices';
import Brands from './Brandns/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <OurServices></OurServices>
            <Brands></Brands>
        </div>
    );
};

export default Home;