import React, { useState } from "react";
import formbg2 from "../../assets/formbg2.jpg"
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";
const DietForm = () => {
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
  return (
    <>
                <div className="w-screen bg-black  h-32 fixed " >
                    <div className="flex justify-center">
                        <nav className="w-[90%] lg:w-[80%] bg-[#0A0A0A] rounded-full h-16 lg:h-20 flex items-center mt-5 fixed">
                            <img src={logo} alt="logo" className="h-8 lg:h-10 ml-3" />
                            <ul className="hidden md:flex text-sm lg:text-[18px] gap-5 lg:gap-10 ml-auto mr-5 text-[#96979C] items-center">
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>OUR SERVICES</li>
                                <li>BENEFITS</li>
                                <li>BLOGS</li>
                                <li>CONTACTS</li>
                                <button className="bg-[#EB0000] text-white px-4 py-2 lg:px-[28px] lg:py-[14px] rounded-full">
                                    Join us now
                                </button>
                            </ul>
                        </nav>
                    </div>
                </div>
      <div
  className="min-h-screen mt-32 bg-cover bg-center text-white py-6 px-4 flex justify-center"
  style={{
    backgroundImage: `url(${formbg2})`,
  }}
>
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-4xl bg-black bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
  >
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#EB0000]">
      PERSONALIZED DIET PLAN FORM
    </h1>

    {/* 1. PERSONAL DETAILS */}
    <section>
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">PERSONAL DETAILS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          Age:
          <input
            type="text"
            name="age"
            placeholder="Eg: 25"
            onChange={handleChange}
            className="w-full p-2 bg-[#1A1A1A] rounded-md"
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            onChange={handleChange}
            className="w-full p-2 bg-[#1A1A1A] rounded-md"
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
            className="w-full p-2 bg-[#1A1A1A] rounded-md"
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            placeholder="Eg: 70 kg or 154 lbs"
            onChange={handleChange}
            className="w-full p-2 bg-[#1A1A1A] rounded-md"
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
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">DIETARY GOALS</h2>
      <label>
        Goal:
        <select
          name="goal"
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
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
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">
        DIETARY PREFERENCES AND RESTRICTIONS
      </h2>
      <label>
        Diet Type:
        <select
          name="dietType"
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
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
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Foods you Dislike:
        <input
          type="text"
          name="dislikes"
          placeholder="Eg: Mushrooms, Seafood, Spicy foods..."
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 4. HEALTH INFORMATION */}
    <section className="mt-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">HEALTH INFORMATION</h2>
      <label>
        Medical Conditions:
        <input
          type="text"
          name="medicalConditions"
          placeholder="Eg: Diabetes"
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Nutritional Needs:
        <input
          type="text"
          name="nutritionalNeeds"
          placeholder="Eg: High protein"
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 5. MEAL AND LIFESTYLE PREFERENCES */}
    <section className="mt-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">
        MEAL AND LIFESTYLE PREFERENCES
      </h2>
      <label>
        Meals Per Day:
        <input
          type="text"
          name="mealsPerDay"
          placeholder="Enter meals per day (e.g., 3)"
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Cooking Habits:
        <input
          type="text"
          name="cookingHabits"
          placeholder="Eg: Quick meals, Meal prepping..."
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Budget Considerations:
        <input
          type="text"
          name="budget"
          placeholder="Eg: $50 per week, Affordable meals..."
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* 6. CURRENT EATING HABITS */}
    <section className="mt-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#EB0000]">CURRENT EATING HABITS</h2>
      <label>
        Typical Daily Diet:
        <input
          type="text"
          name="dailyDiet"
          placeholder="Eg: Breakfast - Eggs, Lunch - Salad, Dinner - Grilled Chicken..."
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
      <label className="block mt-4">
        Frequency of Eating Out:
        <input
          type="text"
          name="eatingOutFrequency"
          placeholder="Eg: 2 times a week, Occasionally..."
          onChange={handleChange}
          className="w-full p-2 bg-[#1A1A1A] rounded-md"
        />
      </label>
    </section>

    {/* SUBMIT BUTTON */}
    <button
      type="submit"
      className="w-full mt-6 bg-[#EB0000] hover:bg-red-600 text-white py-2 rounded-md font-semibold"
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
