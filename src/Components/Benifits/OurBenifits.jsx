import React from 'react'
import phn from "../../assets/phn.jpg";
import { FiClipboard } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";
import { GiFireBowl } from "react-icons/gi";
const benefits = [
    {
        icon: <FiClipboard size={28} />,
        title: "Effortless Workout Logging",
        description:
            "Easily log your workouts and monitor your progress over time with our intuitive logging feature.",
    },
    {
        icon: <AiOutlineCheckCircle size={28} />,
        title: "Accurate Rep Counting",
        description:
            "Count your reps accurately with our app, ensuring consistency and improved performance.",
    },
    {
        icon: <FaDumbbell size={28} />,
        title: "Personalized Workout Plans",
        description:
            "AI-powered workout plans tailored to your fitness level, goals, and progress.",
    },
    {
        icon: <GiFireBowl size={28} />,
        title: "Calorie Calculation & Personalized Diet Plans",
        description:
            "Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.",
    },
];
const OurBenifits = () => {
  return (
    <>
      <div className="bg-black text-white py-12 px-4">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <p className=" header text-sm text-gray-400 mb-2">⭐ Our Benefits</p>
                        <h2 className=" header text-3xl lg:text-5xl font-bold text-[#EB0000]">
                            Discover GymFluencer Benefits
                        </h2>
                        <p className="para mt-2 text-gray-400 text-sm lg:text-base">
                            Unlock your full potential with GymFluencer, your personal fitness
                            partner for progress and motivation.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left Cards */}
                        <div className="flex flex-col gap-8">
                            {/* Card 1 */}
                            <div className="bg-[#0a0a0a] rounded-lg p-6 shadow-md flex items-start gap-4 flex-col">
                                <div className="bg-[#161616] p-3 rounded-lg border-1 border-solid-white">{benefits[0].icon}</div>
                                <div>
                                    <h3 className=" header text-lg lg:text-xl text-[#EB0000] font-semibold mb-2">
                                        {benefits[0].title}
                                    </h3>
                                    <p className="para text-gray-400 text-sm lg:text-base">
                                        {benefits[0].description}
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#121212] rounded-lg p-6 shadow-md flex items-start gap-4 flex-col">
                                <div className="bg-[#161616] p-3 rounded-lg border-1 border-solid-white">{benefits[1].icon}</div>
                                <div>
                                    <h3 className="header text-lg lg:text-xl text-[#EB0000] font-semibold mb-2">
                                        {benefits[1].title}
                                    </h3>
                                    <p className="para text-gray-400 text-sm lg:text-base">
                                        {benefits[1].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="flex justify-center h-[600px]">
                            <img
                                src={phn}
                                alt="Phone Mockup"
                                className="w-[250px] md:w-[300px] lg:w-[350px] h-cover  rounded-3xl border-2 border-solid-white"
                            />
                        </div>

                        {/* Right Cards */}
                        <div className="flex flex-col gap-8">
                            {/* Card 3 */}
                            <div className="bg-[#121212] rounded-lg p-6 shadow-md flex items-start gap-4 flex-col">
                                <div className="bg-[#161616] p-3 rounded-lg border-1 border-solid-white">{benefits[2].icon}</div>
                                <div>
                                    <h3 className="header text-lg lg:text-xl text-[#EB0000] font-semibold mb-2">
                                        {benefits[2].title}
                                    </h3>
                                    <p className="para text-gray-400 text-sm lg:text-base">
                                        {benefits[2].description}
                                    </p>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-[#121212] rounded-lg p-6 shadow-md flex items-start gap-4 flex-col">
                                <div className="bg-[#161616] p-3 rounded-lg border-1 border-solid-white">{benefits[3].icon}</div>
                                <div>
                                    <h3 className="header text-lg lg:text-xl text-[#EB0000] font-semibold mb-2">
                                        {benefits[3].title}
                                    </h3>
                                    <p className="para text-gray-400 text-sm lg:text-base">
                                        {benefits[3].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
    </>
  )
}

export default OurBenifits
