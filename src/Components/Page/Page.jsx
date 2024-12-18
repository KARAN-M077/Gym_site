import React, { useState, useEffect } from "react";
import backgroundImage from "../../assets/bg1.jpg";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import logo from "../../assets/logo.png";
import Stats from "../Stats/Stats";
import ImageSection from "../ImageSection/ImageSection";
import OurServices from "../Services/OurServices";
import OurBenifits from "../Benifits/OurBenifits";
import Hub from "../Hub/Hub";
import Tranformations from "../Tranformatiosn/Tranformations";
import Testimonials from "../Testimonials/Testimonials";
import Mission from "../Mission/Mission";
import GymLocator from "../Location/GymLocator";
import Blogs from "../Blog/Blogs";
import FAQs from "../FAQs/FAQs";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import '../Style.css';
const Section1 = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log("Dropdown state:", dropdownOpen);
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative w-screen h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                }}
            >
                {/* Navbar */}
                <div className="flex justify-center ">
                <nav className="w-[90%] lg:w-[80%] bg-[#0f0f0f] rounded-full h-16 lg:h-20 flex items-center mt-5 lg:mt-10 fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
  <img src={logo} alt="logo" className="h-8 lg:h-10 ml-3" />
  <ul className="hidden md:flex text-sm lg:text-[18px] gap-5 lg:gap-10 ml-auto mr-5 text-[#96979C] items-center">
    <li>HOME</li>
    <li>ABOUT</li>
    <li 
      className="relative py-8" 
      onMouseEnter={() => setDropdownOpen(true)} 
      onMouseLeave={() => setDropdownOpen(false)}
    >
      OUR SERVICES
      {dropdownOpen && (
        <ul 
          className="absolute top-full -left-10 bg-[#0f0f0f] text-white rounded-lg border-[1px] border-solid-white shadow-lg  w-56 flex flex-col gap-5 p-5" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <li><Link to='/WorkoutPlan' className="px-4 py-2 hover:bg-[#1c1c1c]">Workout Plan</Link></li>
          <li><Link to='/DietPlan' className="px-4 py-2 hover:bg-[#1c1c1c]">Diet Plan</Link></li>
        </ul>
      )}
    </li>
    <li>BENEFITS</li>
    <li>BLOGS</li>
    <li>CONTACTS</li>
    <button className="bg-[#EB0000] text-white px-4 py-2 lg:px-[28px] lg:py-[14px] rounded-full">
      Join us now
    </button>
  </ul>
</nav>

        </div>


                {/* Trusted Users */}
                <div className="w-full flex justify-center mt-48">
                    <div className="flex h-auto bg-[#0f0f0f] rounded-full px-4 py-2 lg:px-6 lg:py-2 items-center">
                        <img src={person3} alt="person" className="z-0 w-5 lg:w-auto" />
                        <img
                            src={person2}
                            alt="person"
                            className="z-10 relative right-2 w-5 lg:w-auto"
                        />
                        <img
                            src={person1}
                            alt="person"
                            className="z-20 relative right-4 lg:right-5 w-5 lg:w-auto"
                        />
                        <p className="text-[#96979C] text-xs lg:text-base ml-2">
                            Trusted by 3+ million users
                        </p>
                    </div>
                </div>

                {/* Headline */}
                <div className="w-full flex justify-center mt-5 text-center">
                    <div className="flex flex-col gap-2 lg:gap-5">
                        <p className="header text-[#EB0000] text-4xl lg:text-7xl font-extrabold ">
                            Track Your Fitness
                        </p>
                        <p className="text-[#EB0000] text-4xl lg:text-7xl font-extrabold">
                            Journey
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="w-full flex justify-center mt-5 px-4 text-center">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <p className="text-white text-sm lg:text-lg font-extrabold">
                            Discover the ultimate fitness companion with GymFluencer.
                            Effortlessly log your workouts,
                        </p>
                        <p className="text-white text-sm lg:text-lg font-extrabold">
                            count reps, and track calories burned. Stay motivated and achieve
                            your goals with ease.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="w-screen bg-black flex flex-col items-center py-10 px-4">
                <Mission />

                {/* Stats Section */}
                <Stats />

                {/* Image Section */}

                <ImageSection />
                {/* Service Section */}
                <OurServices className="-z-50" />

                {/* Our  Benifits */}
                <OurBenifits />
            </div>
            {/* Fitness Hub */}
            <Hub />
            {/* Transformations */}
            <Tranformations />
            {/*testimonials*/}
            <Testimonials />
            {/* Gym Locations */}
            <GymLocator />
            {/* Blogs */}
            <Blogs className="-z-50" />
            {/* FAQs */}
            <FAQs />
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Section1;
