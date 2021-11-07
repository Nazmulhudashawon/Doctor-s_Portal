import React from 'react';
import Services from './Services/Services';
import Navigation from '../Shared/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import Testimonial from './Testimonial/Testimonial';
import Contactform from './Contactform/Contactform';

const Home = () => {
    return (
        <div>
            
            <Navigation />
            <Banner></Banner>
            <Information> </Information>
            <Services />
            <AppointmentBanner />
            <Testimonial></Testimonial>
            <Contactform></Contactform>
            
        </div>
    );
};

export default Home;