import React, { useState } from "react";
import formbg1 from "../../assets/formbg1.jpg"
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
const PersonalForm = () => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        primaryGoals: [],
        specificAreas: [],
        fitnessLevel: "Beginner",
        exerciseExperience: [],
        age: "",
        gender: "",
        height: "",
        weight: "",
        injuries: "",
        medicalConditions: "",
        workoutPreferences: [],
        availableDays: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter((v) => v !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="w-screen bg-black  h-32 fixed  " >
                <div className="flex justify-center">
        <nav className="w-[90%] lg:w-[80%] bg-[#0f0f0f] rounded-full h-16 lg:h-20 flex items-center mt-5 lg:mt-10 fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <img src={logo} alt="logo" className="h-8 lg:h-10 ml-3" />
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden ml-auto mr-5">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-[#CEF240] text-2xl" />
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className={`header hover:cursor-pointer hidden md:flex text-sm lg:text-[15px] gap-2 lg:gap-10 ml-auto mr-5 text-[#96979C] items-center`}>
        <li>
          <Link to="/" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
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
              <li>
                <Link to="/WorkoutPlan" className="px-4 py-2 hover:bg-[#1c1c1c]">
                  Workout Plan
                </Link>
              </li>
              <li>
                <Link to="/DietPlan" className="px-4 py-2 hover:bg-[#1c1c1c]">
                  Diet Plan
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/" smooth={true} duration={500}>
            BENEFITS
          </Link>
        </li>
        <li>
          <Link to="/" smooth={true} duration={500}>
            BLOGS
          </Link>
        </li>
        <li>
          <Link to="/" smooth={true} duration={500}>
            CONTACTS
          </Link>
        </li>
        <button className="bg-[#EB0000] text-white px-4 py-2 lg:px-[28px] lg:py-[14px] rounded-full">
          Join us now
        </button>
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 rounded-lg -right-10 transform -translate-x-1/2 bg-[#0f0f0f] w-fit z-40">
          <ul className="flex flex-col text-sm text-[#96979C] gap-4 py-5 px-8 ">
            <li>
              <Link to="/" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/" smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="cursor-pointer"
              >
                OUR SERVICES
              </div>
              {dropdownOpen && (
                <div className="flex flex-col pl-4">
                  <Link to="/WorkoutPlan" className="py-2 text-white">
                    Workout Plan
                  </Link>
                  <Link to="/DietPlan" className="py-2 text-white">
                    Diet Plan
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/" smooth={true} duration={500}>
                BENEFITS
              </Link>
            </li>
            <li>
              <Link to="/" smooth={true} duration={500}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to="/" smooth={true} duration={500}>
                CONTACTS
              </Link>
            </li>
            {/* <button className="bg-[#EB0000] text-white px-4 py-2 rounded-full">
              Join us now
            </button> */}
          </ul>
        </div>
      )}
    </nav>
                </div>
            </div>
            <div
                className="min-h-screen mt-0 bg-cover bg-center text-white py-6 px-4 flex justify-center"
                style={{
                    backgroundImage: `url(${formbg1})`,
                }}
            >
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-4xl bg-black bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mt-44"
                >
                    <h1 className="header text-2xl md:text-3xl font-bold text-center mb-6 text-[#EB0000]">
                        PERSONALIZED WORKOUT PLAN FORM
                    </h1>

                    {/* 1. FITNESS GOALS */}
                    <section >
                        <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">1. FITNESS GOALS</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="para font-semibold mb-2">Primary Goals:</p>
                                {["Weight Loss", "Muscle Gain", "Endurance"].map((goal) => (
                                    <label key={goal} className="block">
                                        <input
                                            type="checkbox"
                                            name="primaryGoals"
                                            value={goal}
                                            onChange={handleChange}
                                            className="para mr-2"
                                        />
                                        {goal}
                                    </label>
                                ))}
                            </div>
                            <div>
                                <p className="para font-semibold mb-2 invisible">Placeholder</p>
                                {["Flexibility", "General Fitness"].map((goal) => (
                                    <label key={goal} className="block">
                                        <input
                                            type="checkbox"
                                            name="primaryGoals"
                                            value={goal}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {goal}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <p className="para font-semibold mb-2 text-[#EB0000]">Specific Areas of Focus:</p>
                                {["Upper Body", "Lower Body"].map((area) => (
                                    <label key={area} className="block">
                                        <input
                                            type="checkbox"
                                            name="specificAreas"
                                            value={area}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {area}
                                    </label>
                                ))}
                            </div>
                            <div>
                                <p className="para font-semibold mb-2 invisible">Placeholder</p>
                                {["Core", "Full Body"].map((area) => (
                                    <label key={area} className="block">
                                        <input
                                            type="checkbox"
                                            name="specificAreas"
                                            value={area}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {area}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 2. CURRENT FITNESS LEVEL */}
                    <section className="mt-6">
                        <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">2. CURRENT FITNESS LEVEL</h2>
                        <label>
                            <span className="header block mb-2 text-[#EB0000]">Fitness Level:</span>
                            <select
                                name="fitnessLevel"
                                value={formData.fitnessLevel}
                                onChange={handleChange}
                                className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                            >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </label>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="header font-semibold mb-2 text-[#EB0000]">Exercise Experience:</p>
                                {["Squats", "Push-Ups"].map((exercise) => (
                                    <label key={exercise} className="block">
                                        <input
                                            type="checkbox"
                                            name="exerciseExperience"
                                            value={exercise}
                                            onChange={handleChange}
                                            className="para mr-2"
                                        />
                                        {exercise}
                                    </label>
                                ))}
                            </div>
                            <div>
                                <p className="font-semibold mb-2 invisible">Placeholder</p>
                                {["Cardio Machines", "Others"].map((exercise) => (
                                    <label key={exercise} className="block">
                                        <input
                                            type="checkbox"
                                            name="exerciseExperience"
                                            value={exercise}
                                            onChange={handleChange}
                                            className="para mr-2"
                                        />
                                        {exercise}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. PHYSICAL MEASUREMENTS */}
                    <section className="mt-6">
                        <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">3. PHYSICAL MEASUREMENTS AND HEALTH INFO</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label>
                                Age:
                                <input
                                    type="number"
                                    name="age"
                                    onChange={handleChange}
                                    className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                                />
                            </label>
                            <label>
                                Gender:
                                <select
                                    name="gender"
                                    onChange={handleChange}
                                    className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                                >
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </label>
                            <label>
                                Height:
                                <input
                                    type="text"
                                    name="height"
                                    placeholder="e.g. 5'7''"
                                    onChange={handleChange}
                                    className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                                />
                            </label>
                            <label>
                                Weight:
                                <input
                                    type="text"
                                    name="weight"
                                    placeholder="e.g. 150 lbs / 68 kg"
                                    onChange={handleChange}
                                    className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                                />
                            </label>
                        </div>

                        <label className="para block mt-4">
                            Injuries or Physical Limitations:
                            <textarea
                                name="injuries"
                                onChange={handleChange}
                                className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                            />
                        </label>
                        <label className="block mt-4">
                            Medical Conditions:
                            <textarea
                                name="medicalConditions"
                                onChange={handleChange}
                                className="para w-full p-2 bg-[#1A1A1A] rounded-md"
                            />
                        </label>
                    </section>

                    {/* 4. WORKOUT PREFERENCES */}
                    <section className="mt-6">
                        <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">4. WORKOUT PREFERENCES</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold mb-2 text-[#EB0000]">Preferred Workout Types:</p>
                                {["Strength Training", "Cardio", "Yoga"].map((workout) => (
                                    <label key={workout} className="block">
                                        <input
                                            type="checkbox"
                                            name="workoutPreferences"
                                            value={workout}
                                            onChange={handleChange}
                                            className="para mr-2"
                                        />
                                        {workout}
                                    </label>
                                ))}
                            </div>
                            <div>
                                <p className="para font-semibold mb-2 invisible">Placeholder</p>
                                {["HIIT", "Bodyweight"].map((workout) => (
                                    <label key={workout} className="block">
                                        <input
                                            type="checkbox"
                                            name="workoutPreferences"
                                            value={workout}
                                            onChange={handleChange}
                                            className="para mr-2"
                                        />
                                        {workout}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. SCHEDULE */}
                    <section className="mt-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">5. SCHEDULE AND TIME AVAILABILITY</h2>
                        <p className="header font-semibold mb-2 text-[#EB0000]">DAYS AVAILABLE FOR WORKOUTS:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                                <label key={day} className="block">
                                    <input
                                        type="checkbox"
                                        name="availableDays"
                                        value={day}
                                        onChange={handleChange}
                                        className="para mr-2"
                                    />
                                    {day}
                                </label>
                            ))}
                        </div>
                    </section>

                    <button
                        type="submit"
                        className="header w-full mt-6 bg-[#EB0000] hover:bg-red-600 text-white py-2 rounded-md font-semibold"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default PersonalForm
