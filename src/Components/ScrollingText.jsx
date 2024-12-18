import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const ScrollingText = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true, 
        });
      }, []);
  return (
    <div className="header flex flex-col items-center space-y-4 bg-transparent mt-72" >
      {/* Scroll Left */}
      <div className="w-full overflow-hidden"data-aos="slide-up">
        <div className="flex animate-marquee-left space-x-8">
          <p className="text-6xl font-bold text-white">Transformation/</p>
          <p className="text-6xl font-bold text-white">Motivation/</p>
          <p className="text-6xl font-bold text-white">Progress/</p>
          <p className="text-6xl font-bold text-white">Fitness/</p>
          <p className="text-6xl font-bold text-white">Transformation/</p>
          <p className="text-6xl font-bold text-white">Motivation/</p>
          <p className="text-6xl font-bold text-white">Progress/</p>
          <p className="text-6xl font-bold text-white">Fitness/</p>
          <p className="text-6xl font-bold text-white">Transformation/</p>
          <p className="text-6xl font-bold text-white">Motivation/</p>
          <p className="text-6xl font-bold text-white">Progress/</p>
          <p className="text-6xl font-bold text-white">Fitness/</p>
          <p className="text-6xl font-bold text-white">Transformation/</p>
          <p className="text-6xl font-bold text-white">Motivation/</p>
          <p className="text-6xl font-bold text-white">Progress/</p>
          <p className="text-6xl font-bold text-white">Fitness/</p>
        </div>
      </div>

      {/* Scroll Right */}
      <div className="w-full overflow-hidden" data-aos="slide-up">
        <div className="flex animate-marquee-right space-x-8">
          <p className="text-6xl font-bold text-[#4D0F0F]">Community/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Strength/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Progress/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Work/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Community/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Strength/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Progress/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Work/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Community/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Strength/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Progress/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Work/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Community/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Strength/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Progress/</p>
          <p className="text-6xl font-bold text-[#4D0F0F]">Work/</p>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
