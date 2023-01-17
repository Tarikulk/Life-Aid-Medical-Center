import React from 'react'; 
import obayedullah from "../../assets/leader/obayedullah.jpg"
import faruk from "../../assets/leader/faruk.jpg"
import mehedi from "../../assets/leader/mehedi.jpg"
import yaseen from "../../assets/leader/yaseen.jpg"

const Leaders = () => {
    return (
    <div className='mt-10 bg-gradient-to-r from-primary to-secondary text-white rounded-lg '>
            <h1 className='text-3xl text-center font-bold pt-5'>Our Leadership</h1>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full flex items-center">
    <img src={obayedullah} className="h-60 w-64 md:w-96 md:h-96 p-20 ml-10" alt='' />
    <div>
    <h1 className='text-3xl font-bold'>Md: Obayedullah Khan</h1>
    <hr className='mt-2 mb-5 w-80' />
    <p>CEO - Life Aid Medical Center</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-white text-black ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-white text-black ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full flex items-center">
  <img src={faruk} className="h-60 w-64 md:w-96 md:h-96 p-20 ml-10" alt='' />
    <div>
    <h1 className='text-3xl font-bold'>Md: Faruk Khan</h1>
    <hr className='mt-2 mb-5 w-80' />
    <p>Vice President – Life Aid Medical Center</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-white text-black ">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-white text-black ">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full flex items-center">
  <img src={mehedi} className="h-60 w-64 md:w-96 md:h-96 p-20 ml-10" alt='' />
    <div>
    <h1 className='text-3xl font-bold'>Md: Mehedi Khan</h1>
    <hr className='mt-2 mb-5 w-80' />
    <p>VP & Head – Human Resources, Life Aid Medical Center.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-white text-black ">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-white text-black ">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full flex items-center">
  <img src={yaseen} className="h-60 w-64 md:w-96 md:h-96 p-20 ml-10" alt='' />
    <div>
    <h1 className='text-3xl font-bold'>Md: Yaseen Khan</h1>
    <hr className='mt-2 mb-5 w-80' />
    <p>Chief Operating Officer, Life Aid Medical Center.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-white text-black ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-white text-black ">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Leaders;