import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    console.log(doctor)
    const {img, name, degree, _id} = doctor

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                {/* <img src={img} alt="Shoes" /> */}
            <figure>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            {/* <div className="h-96 w-72"> */}
           <img src={img} style={{height:"200px", width:"400px"}} className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition:transform duration-500" alt="img" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%] group-hover:translate-y-0 transition-all">
                <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'> 
                {degree}
                </p>
            </div>
            </div>
            </figure>
            <div className="card-body">
                <div className="card-actions justify-between items-center">
                <h2 className="card-title">Name: {name}</h2>
                <Link to={`/doctors/${_id}`} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Details</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Doctor;