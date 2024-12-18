import React, { useState, useEffect } from "react";
import bg2 from "../../assets/bg2.jpg";
import image1 from "../../assets/stackimg1.png";
import image2 from "../../assets/stackimg2.png";

const Hub = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [image1, image2];

  // Stack animation logic: Rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3s delay
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center -z-50"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg2})`,
      }}
    >
      {/* Main Container */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full px-4 sm:px-10 lg:px-20 gap-8">
        {/* Left Section */}
        <div className="text-center lg:text-left mt-10 lg:mt-20">
          <h2 className=" header text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600 mb-6 leading-[40px] sm:leading-[50px] lg:leading-[60px]">
            YOUR <br /> PERSONALIZED FITNESS HUB
          </h2>
          <p className="para text-white text-sm sm:text-base lg:text-lg font-bold mb-6">
            Personalized workout routines tailored to your goals and preferences.
          </p>
          <p className="para text-white text-sm sm:text-base lg:text-lg font-bold mb-6">
            Get expert guidance with virtual coaching sessions, available anytime,
            anywhere.
          </p>
          <p className="para text-white text-sm sm:text-base lg:text-lg font-bold">
            Track your fitness journey with detailed analytics, goal setting, and
            achievements.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          {/* Stacking Images Animation */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`fitness-${index}`}
              className={`absolute w-full h-full object-cover rounded-xl transition-all duration-1000 ${
                activeImage === index
                  ? "opacity-100 translate-y-0 scale-100 z-10"
                  : "opacity-0 translate-y-4 scale-95 z-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hub;
