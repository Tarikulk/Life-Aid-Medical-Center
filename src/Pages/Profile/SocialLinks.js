import React from 'react';
import {HiExternalLink} from "react-icons/hi"

const SocialLinks = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 mx-5 md:mx-20 mt-10'>
            <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="card-body">
                <a href="https://github.com/Tarikulk" target="_blank" className='text-xl font-bold flex justify-center items-center w-full h-full text-white'>
                    <span className='pr-2'>Visit My Github</span> 
                    <HiExternalLink></HiExternalLink>
                </a>                
            </div>
            </div>
            <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="card-body">
            <a href="https://www.linkedin.com/in/obayed123/" target="_blank" className='text-xl font-bold flex justify-center items-center w-full h-full text-white'>
                    <span className='pr-2'>Visit My Linkedin</span> 
                    <HiExternalLink></HiExternalLink>
                </a>  
            </div>
            </div>
            <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="card-body">
            <a href="https://www.facebook.com/profile.php?id=100076316173944" target="_blank" className='text-xl font-bold flex justify-center items-center w-full h-full text-white'>
                    <span className='pr-2'>Visit My Facebook</span> 
                    <HiExternalLink></HiExternalLink>
                </a>  
            </div>
            </div>
        </div>
    );
};

export default SocialLinks;