import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState();
    useEffect(() =>{
        fetch("https://simmi-foundation-assignment-server.vercel.app/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
        })
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-primary text-center'>Our Doctors</h1>
            <h1 className='text-3xl text-accent text-center'>Doctors We Have</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 mx-5 md:mx-20'>
                {
                    doctors?.map(doctor => <Doctor
                    key={doctor._id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;