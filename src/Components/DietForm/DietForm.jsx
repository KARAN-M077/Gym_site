import React, { useState , useEffect } from "react";
import formbg2 from "../../assets/formbg2.jpg"
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars } from 'react-icons/fa';
const DietForm = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true, 
        });
      }, []);
        const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        activityLevel: "",
        goal: "",
        specificGoal: "",
        dietType: "",
        allergies: "",
        dislikes: "",
        medicalConditions: "",
        nutritionalNeeds: "",
        mealsPerDay: "",
        cookingHabits: "",
        budget: "",
        dailyDiet: "",
        eatingOutFrequency: "",
      });
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!", formData);
        alert("Your personalized diet plan request has been submitted!");
      };
      const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
                <div className="w-screen bg-black  h-32 fixed " >
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
    backgroundImage: `url(${formbg2})`,
  }}
>
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-4xl mt-44 bg-black bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
  >
    <h1 className="header text-2xl md:text-3xl font-bold text-center mb-6 text-[#EB0000]" data-aos="slide-up">
      PERSONALIZED DIET PLAN FORM
    </h1>

    {/* 1. PERSONAL DETAILS */}
    <section>
      <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">PERSONAL DETAILS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Age:
          <input
            type="text"
            name="age"
            placeholder="Eg: 25"
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
            placeholder="Eg: 5'9'' or 175 cm"
            onChange={handleChange}
            className="para w-full p-2 bg-[#1A1A1A] rounded-md"
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            placeholder="Eg: 70 kg or 154 lbs"
            onChange={handleChange}
            className="para w-full p-2 bg-[#1A1A1A] rounded-md"
          />
        </label>
        <label>
          Activity Level:
          <select
            name="activityLevel"
            onChange={handleChange}
            className="w-full p-2 bg-[#1A1A1A] rounded-md"
          >
            <option>Select</option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Very Active</option>
          </select>
        </label>
      </div>
    </section>

    {/* 2. DIETARY GOALS */}
    <section className="mt-6">
      <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">DIETARY GOALS</h2>
      <label>
        Goal:
        <select
          name="goal"
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        >
          <option>Select</option>
          <option>Weight Loss</option>
          <option>Muscle Gain</option>
          <option>Maintain Weight</option>
          <option>Improve Digestion</option>
        </select>
      </label>
      <label className="block mt-4">
        Specific Goal:
        <input
          type="text"
          name="specificGoal"
          placeholder="Eg: Weight loss, Muscle gain, Improve digestion..."
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 3. DIETARY PREFERENCES AND RESTRICTIONS */}
    <section className="mt-6">
      <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">
        DIETARY PREFERENCES AND RESTRICTIONS
      </h2>
      <label>
        Diet Type:
        <select
          name="dietType"
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        >
          <option>Select</option>
          <option>Vegetarian</option>
          <option>Vegan</option>
          <option>Keto</option>
          <option>Paleo</option>
          <option>General</option>
        </select>
      </label>
      <label className="block mt-4">
        Food Allergies or Intolerances:
        <input
          type="text"
          name="allergies"
          placeholder="Eg: Nuts, Dairy, Gluten..."
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Foods you Dislike:
        <input
          type="text"
          name="dislikes"
          placeholder="Eg: Mushrooms, Seafood, Spicy foods..."
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 4. HEALTH INFORMATION */}
    <section className="mt-6">
      <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">HEALTH INFORMATION</h2>
      <label>
        Medical Conditions:
        <input
          type="text"
          name="medicalConditions"
          placeholder="Eg: Diabetes"
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Nutritional Needs:
        <input
          type="text"
          name="nutritionalNeeds"
          placeholder="Eg: High protein"
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 5. MEAL AND LIFESTYLE PREFERENCES */}
    <section className="mt-6">
      <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">
        MEAL AND LIFESTYLE PREFERENCES
      </h2>
      <label>
        Meals Per Day:
        <input
          type="text"
          name="mealsPerDay"
          placeholder="Enter meals per day (e.g., 3)"
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Cooking Habits:
        <input
          type="text"
          name="cookingHabits"
          placeholder="Eg: Quick meals, Meal prepping..."
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Budget Considerations:
        <input
          type="text"
          name="budget"
          placeholder="Eg: $50 per week, Affordable meals..."
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 6. CURRENT EATING HABITS */}
    <section className="mt-6">
      <h2 className="header text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">CURRENT EATING HABITS</h2>
      <label>
        Typical Daily Diet:
        <input
          type="text"
          name="dailyDiet"
          placeholder="Eg: Breakfast - Eggs, Lunch - Salad, Dinner - Grilled Chicken..."
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Frequency of Eating Out:
        <input
          type="text"
          name="eatingOutFrequency"
          placeholder="Eg: 2 times a week, Occasionally..."
          onChange={handleChange}
          className="para w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* SUBMIT BUTTON */}
    <button
      type="submit"
      className="header w-full mt-6 bg-[#EB0000] hover:bg-red-600 text-white py-2 rounded-md font-semibold"
    >
      Submit
    </button>
  </form>
</div>
<Footer/>
    </>
  )
}

export default DietForm
