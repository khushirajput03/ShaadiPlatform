import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export const ServicePart1 = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] font-forum">

      <img
        src="https://i.pinimg.com/736x/a4/5b/e7/a45be7e59f815c7cc38b8052f3ba4169.jpg"
        alt="Contact"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-forum">
          OUR SERVICE
        </h1> 
  
        <h2 className="text-white text-sm sm:text-base flex items-center gap-3 mt-4">
          Home <FaArrowRightLong className="mt-[2px]" /> Service
        </h2>

      </div>
    </div>
  );
};
