import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DoctorsDetails = () => {

    const doctorsDetails = useLoaderData();
     
    const {available, dayAvailable, degree, fees, img, name, position} = doctorsDetails;

    return (
        <div className='mt-20 mx-10'>
            <div className="card lg:card-side bg-base-100 shadow-2xl">
            <figure>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            {/* <div className="h-96 w-72"> */}
           <img src={img} className="w-full h-96 object-cover group-hover:rotate-3 group-hover:scale-125 transition:transform duration-500" alt="img" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      
            </div>
            </figure>
            <div className="card-body w-80">
                <h2 className="card-title font-bold">Name: {name}</h2>
                <h2 className='font-bold'>Qualification: <span className="text-xs"> {degree}</span></h2>
                <h2 className="card-title font-bold">Appointment Time: {dayAvailable}</h2> 
                <h2 className="card-title font-bold">Available on: {available}</h2> 
                <h2 className="card-title font-bold">Appointment Charge: {fees}</h2> 
                <h2 className="card-title font-bold">Position: {position}</h2> 
            </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;