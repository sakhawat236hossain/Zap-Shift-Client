import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';



const ReviewCart = ({review}) => {

    const  {userName, user_photoURL, ratings, review: reviewText} = review;
   return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl p-6 relative">
      {/* Quote icon */}
      <FaQuoteLeft className="text-3xl  mb-4" />

      {/* Testimonial text */}
      <p className=" mb-6">
       {reviewText}
      </p>
<div className='border-t border-dashed border-gray-500 my-4'></div>
      {/* Author section */}
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold">
          <img className='rounded-full' src={user_photoURL} alt="" />
        </div>
        <div className="ml-4">
          <h3 className=" font-semibold">{userName}</h3>
          <p className=" text-sm">{ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;