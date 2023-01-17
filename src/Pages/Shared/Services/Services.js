import React from 'react';
import cavity from "../../../assets/cavity.png"
import fluoride from "../../../assets/fluoride.png"
import whitening from "../../../assets//whitening.png"
import Service from './Service';

const servicesData = [
    {
        id : 1, 
        image: cavity,
        name: "Cavity Filling",
        description: "Get cure from cavity by taking a Cavity filling services from our special Dentists.",
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
    {
        id : 2, 
        image: whitening,
        name: "Teeth Whitening",
        description: "You will benefit from teeth cleaning services from our expert Doctors",
        bgClass: "bg-accent"
    },
    {
        id : 3, 
        image: fluoride,
        name: "Fluoride Treatment",
        description: "Get Fluoride Treatment From Our Special Doctors.",
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
]

const Services = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-2xl text-primary text-center'>Our Services</h1>
            <h1 className='text-3xl text-accent text-center'>Services We Provide</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 mx-5 md:mx-20'>
                 {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                 }
            </div>
        </div>
    );
};

export default Services;