import React from "react";
import gym1 from "../../assets/gym1.png"; 
import gym2 from "../../assets/gym2.png"; 
import gym3 from "../../assets/gym3.png"; 
import gym4 from "../../assets/gym4.png"; 
import gym5 from "../../assets/gym5.png"; 
import gym6 from "../../assets/gym6.png"; 
import gym7 from "../../assets/gym7.png"; 
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const gyms = [
  {
    id: 1,
    name: "Ozone The Gym",
    contact: "+91 1234567890",
    location: "Nerul, Navi Mumbai",
    image: gym1,
  },
  {
    id: 2,
    name: "The Square Gym",
    contact: "+91 1234567890",
    location: "Nerul, Navi Mumbai",
    image: gym2,
  },
  {
    id: 3,
    name: "Arnolds Total Fitness",
    contact: "+91 1234567890",
    location: "Nerul, Navi Mumbai",
    image: gym3,
  },
  {
    id: 4,
    name: "Max Gym Center",
    contact: "+91 9876543210",
    location: "Andheri West, Mumbai",
    image: gym4,
  },
  {
    id: 5,
    name: "Flex & Fit Gym",
    contact: "+91 9823456789",
    location: "Thane, Mumbai",
    image: gym5,
  },
  {
    id: 6,
    name: "Gold's Elite Gym",
    contact: "+91 9871234567",
    location: "Powai, Mumbai",
    image: gym6,
  },
  {
    id: 7,
    name: "Iron Paradise Gym",
    contact: "+91 9812345678",
    location: "Bandra, Mumbai",
    image: gym7,
  },
];

const GymLocator = () => {
  return (
    <div className="bg-black text-white py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-red-600 text-4xl font-bold mb-2">FIND YOUR NEAREST GYM</h2>
        <p className="text-lg">
          Easily discover gyms near your location to kickstart your fitness journey today!
        </p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-start justify-center  px-5 lg:px-20 ">
        {/* Gym List */}
    <div className="h-[500px] overflow-scroll">
        <div className="w-full  space-y-6 h-full">
          {gyms.map((gym) => (
            <div
              key={gym.id}
              className="flex items-center bg-[#111] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Gym Image */}
              <img
                src={gym.image}
                alt={gym.name}
                className="w-1/3 h-[150px] object-cover"
              />
              {/* Gym Info */}
              <div className="p-5 w-2/3">
                <h3 className="text-xl font-extrabold mb-2">{gym.name}</h3>
                <div className="flex items-center gap-2 text-white mb-2 ">
                  <FaPhoneAlt className="text-red-500" />
                  <span>{gym.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MdLocationOn className="text-red-500" />
                  <span>{gym.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
</div>
        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-full">
          <iframe
            title="Gym Location Map"
            src="https://www.google.com/maps?q=13.531444,80.078097&hl=es;z=14&output=embed"
            className="w-full h-[400px] lg:h-[500px] rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GymLocator;
