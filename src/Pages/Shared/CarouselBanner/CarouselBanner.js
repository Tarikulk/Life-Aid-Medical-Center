import React from 'react';
import Banner1 from "../../../assets/Banner1.jpg"
import Banner2 from "../../../assets/Banner2.jpg"
import Banner3 from "../../../assets/Banner3.jpg"
import Banner4 from "../../../assets/Banner4.jpg"

const CarouselBanner = () => {
    return (
        <div className='mx-20 mt-10'>
            <div className="carousel w-full rounded-lg ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Banner1} className="h-60 md:w-full md:h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={Banner2} className="h-60 md:w-full md:h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={Banner3} className="h-60 md:w-full md:h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={Banner4} className="h-60 md:w-full md:h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-primary bg-gradient-to-r from-primary to-secondary text-white ">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default CarouselBanner;