import React from 'react';

const Service = ({service}) => {

    const {image, name, description} = service

    return (
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300">
            <div className="card bg-base-100">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p> 
            </div>
            </div>        
        </div>
    );
};

export default Service;