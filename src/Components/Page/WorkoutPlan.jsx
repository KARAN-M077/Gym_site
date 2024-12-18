import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import BeginnerImage from "../../assets/beg.png";
import IntermediateImage from "../../assets/inter.png";
import AdvancedImage from "../../assets/advance.png";
import PersonalizedImage from "../../assets/custom.png";
import formbg2 from "../../assets/formbg2.jpg"
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";
const WorkoutPlan = () => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
    <div className='w-screen h-screen bg-black'>
        <div className="flex justify-center z-[9999999]">
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
                      {/*Plan*/}
                      <div className="bg-black text-white h-auto flex flex-col items-center py-12 px-4 mt-36" >
      {/* Header Section */}
      <h1 className="text-[#EB0000] text-3xl md:text-4xl font-bold mb-6 text-center">
        WHAT IS THE WORKOUT PLAN
      </h1>
      <p className="text-gray-300 text-center max-w-4xl mb-10 leading-relaxed">
        A workout plan is a structured schedule of exercises designed to help
        you reach your fitness goals, stay active, and improve your health.
      </p>

      {/* What We Offer Section */}
      <h2 className="text-[#EB0000] text-2xl md:text-3xl font-bold mb-10 text-center">
        WHAT WE OFFER:
      </h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {/* Feature Item 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#330000] rounded-md p-6">
            <FaUserCircle className="text-red-500 text-5xl" />
          </div>
          <p className="text-gray-300 mt-4 text-lg text-center">
            Customized Workout Plans
          </p>
        </div>

        {/* Feature Item 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#330000] rounded-md p-6">
            <FaUserCircle className="text-red-500 text-5xl" />
          </div>
          <p className="text-gray-300 mt-4 text-lg text-center">
            Professional Guidance
          </p>
        </div>

        {/* Feature Item 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#330000] rounded-md p-6">
            <FaUserCircle className="text-red-500 text-5xl" />
          </div>
          <p className="text-gray-300 mt-4 text-lg text-center">
            Holistic Approach
          </p>
        </div>
      </div>
    </div>
                      </div>
                      {/* Levels */}
                      <div className="bg-black text-white min-h-screen py-12 px-4 -mt-44">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-[#EB0000] text-3xl md:text-4xl font-bold mb-4">
          SELECT YOUR WORKOUT PLAN
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Choose a workout plan that fits your goals, whether it's building strength, losing weight, or staying active. Find the perfect plan for you!
        </p>
      </div>

      {/* Workout Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* BEGINNER */}
        <Link to="/PersonalForm" className="flex flex-col items-center h-[650px] ">
          <img
            src={BeginnerImage}
            alt="Beginner Plan"
            className=" h-full w-full object-cover "
          />
          <h3 className="text-[#EB0000] text-lg font-bold mt-4">BEGINNER</h3>
          <p className="text-gray-300 text-center mt-2 text-sm pb-10">
            Start your fitness journey with simple and effective exercises.
          </p>
        </Link>

        {/* INTERMEDIATE */}
        <Link to="/PersonalForm" className="flex flex-col items-center h-[750px] mb-10">
          <img
            src={IntermediateImage}
            alt="Intermediate Plan"
            className="h-full w-full object-cover mt-16"
          />
          <h3 className="text-[#EB0000] text-lg font-bold mt-4">INTERMEDIATE</h3>
          <p className="text-gray-300 text-center mt-2 text-sm pb-10">
            Continue your fitness journey with enhanced and efficient workouts.
          </p>
        </Link>

        {/* ADVANCED */}
        <Link to="/PersonalForm" className="flex flex-col items-center h-[650px]">
          <img
            src={AdvancedImage}
            alt="Advanced Plan"
            className="h-full w-full object-cover "
          />
          <h3 className="text-[#EB0000] text-lg font-bold mt-4">ADVANCED</h3>
          <p className="text-gray-300 text-center mt-2 text-sm pb-10">
            Push your limits with high-intensity and complex movements.
          </p>
        </Link>

        {/* PERSONALIZED WORKOUT PLAN */}
        <Link to="/PersonalForm" className="flex flex-col items-center h-[750px] mb-10">
          <img
            src={PersonalizedImage}
            alt="Personalized Plan"
            className="h-full w-full object-cover mt-16"
          />
          <h3 className="text-[#EB0000] text-lg font-bold mt-4 pb-10">
            PERSONALIZED WORKOUT PLAN
          </h3>
          <p className="text-gray-300 text-center mt-2 text-sm pb-10">
            Create your own workout plan tailored to your goals.
          </p>
        </Link>
      </div>
      {/* KickStart */}
      <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${formbg2})` }}
    >
      {/* Content Wrapper */}
      <div className="bg-black bg-opacity-70 text-white p-6 md:p-8 lg:p-10 rounded-lg max-w-4xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section: Text */}
        <div className="flex-1">
          <h1 className="text-[#EB0000] text-3xl md:text-4xl font-bold leading-snug mb-4">
            KICKSTART YOUR FITNESS JOURNEY WITH GYMFLUENCER
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Experience all that GymFluencer has to offer with a free trial.
            Explore our world-class amenities, personalized diet plans, and
            professional training programs—absolutely free.
          </p>
            <hr className='mt-10'></hr>
          {/* Logo */}
          <div className="mt-8">
            <img src={logo} alt='logo'/>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="flex-1 p-4 md:p-6 rounded-lg">
          <form className="space-y-4">
            {/* Name & Phone Number */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Kamal Raj"
                  className="w-full p-2 rounded bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Phone number</label>
                <input
                  type="text"
                  placeholder="1234567890"
                  className="w-full p-2 rounded bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] "
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-2 rounded bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] "
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm mb-1">Services</label>
              <select className="w-full p-2 rounded bg-[#1A1A1A] text-white focus:outline-none focus:ring-2  focus:ring-[#1A1A1A]">
                <option>Personalized Diet Plans</option>
                <option>Professional Training</option>
                <option>Fitness Consultation</option>
              </select>
            </div>

            {/* Branch */}
            <div>
              <label className="block text-sm mb-1">Branch</label>
              <select className="w-full p-2 rounded bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]">
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
      
    </>
  )
}

export default WorkoutPlan
