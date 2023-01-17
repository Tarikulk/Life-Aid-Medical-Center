import React from 'react';
import AboutBanner from './AboutBanner';
import AboutUs from './AboutUs';
import CoreValues from './CoreValues';
import Expertise from './Expertise';
import Leaders from './Leaders';

const About = () => {
    return (
        <div className='my-20 mx-10'>
            <AboutBanner></AboutBanner>
            <AboutUs></AboutUs>
            <CoreValues></CoreValues>
            <Expertise></Expertise>
            <Leaders></Leaders>
        </div>
    );
};

export default About;