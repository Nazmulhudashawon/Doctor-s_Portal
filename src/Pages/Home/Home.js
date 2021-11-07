import React from 'react';
import Services from './Services/Services';
import Navigation from '../Shared/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Information from './Information/Information';

const Home = () => {
    return (
        <div>
            
            <Navigation />
            <Banner></Banner>
            <Information> </Information>
            <Services />
            <AppointmentBanner />
            
        </div>
    );
};

export default Home;