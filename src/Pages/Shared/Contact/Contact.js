import React from 'react';
import appointment from '../../../assets/appointment.png'
import typing from "../../../Components/Lotties/Lotties.json"
import Lottie from "lottie-react"

const Contact = () => {
    return (
        <section className="rounded-lg  my-20 mx-5 md:mx-20  bg-gradient-to-r from-primary to-secondary text-white">
  <div className="hero py-6  flex justify-around">
        <div className=' w-94 h-64 md:w-96 md:h-96'>
            <Lottie animationData={typing}></Lottie>
        </div>
    <div className="card  w-full max-w-sm shadow-2xl">
      <form action="https://formsubmit.co/ullahtarik300@gmail.com" method="POST" className="card-body">
        <div className="form-control"> 
          <input type="text" placeholder="email" className="input input-bordered text-black" />
        </div>
        <div className="form-control"> 
          <input type="text" placeholder="subject" className="input input-bordered text-black" /> 
        </div>
        <div className="form-control"> 
        <textarea className="h-30 textarea textarea-bordered text-black" placeholder="Bio"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-white text-secondary hover:bg-sky-300 hover:text-white">Send</button>
        </div>
      </form>
  </div>
</div>
        </section>
    );
};

export default Contact;