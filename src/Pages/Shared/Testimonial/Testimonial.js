import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/people1.png"
import people2 from "../../../assets/people2.png"
import people3 from "../../../assets/people3.png"
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id:1, 
            name:"Winson Herry",
            location: "California",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people1
        },
        {
            _id:2, 
            name:"Winson Herry",
            location: "California",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people2
        },
        {
            _id:3, 
            name:"Winson Herry",
            location: "California",
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people3
        },
    ]

    return (
        <div className='my-20 mx-5 md:mx-20'>
            <section className='my-20'>
             <div className='flex justify-between items-center'>
                <div>
                    <h4 className="text-2xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                      <img src={quote} className="w-24 lg:w-48" alt="" />
                </figure>
             </div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
             </div>
        </section>
        </div>
    );
};

export default Testimonial;