import React from 'react';

const InfoCard = ({card}) => {

    const {icon, name, description, bgClass} = card

    return (
        <div className={`card p-6 md:card-side ${bgClass} shadow-xl text-white group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p> 
        </div>
        </div> 
    );
};

export default InfoCard;