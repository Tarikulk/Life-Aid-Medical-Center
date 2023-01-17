import React from 'react';
import CarouselBanner from '../../Shared/CarouselBanner/CarouselBanner';
import Contact from '../../Shared/Contact/Contact';
import Doctors from '../../Shared/Doctors/Doctors';
import InfoCards from '../../Shared/InfoCard/InfoCards';
import Services from '../../Shared/Services/Services';
import Subscribe from '../../Shared/Subscribe/Subscribe';
import Testimonial from '../../Shared/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <Services></Services>
            <Doctors></Doctors>
            <InfoCards></InfoCards>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;