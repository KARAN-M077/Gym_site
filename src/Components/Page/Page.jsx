import React, { useState , useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom"; // useNavigate to handle page navigation
import { Link as ScrollLink } from "react-scroll"; // use this for smooth scrolling within the same page
import AOS from "aos";
import "aos/dist/aos.css";
import '../Style.css';
import ScrollingText from "../ScrollingText";


const Section1 = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Adjust duration of the animation
          once: true, // Whether animation should happen only once
        });
      }, []);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // React Router navigation hook

  // Function to navigate to other pages while maintaining smooth scroll
  const handlePageNavigation = (page, section) => {
    navigate(page); // Navigate to the target page
    setTimeout(() => {
      const sectionElement = document.getElementById(section); // Get the section by id
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
      }
    }, 500); // Timeout to allow page navigation before scrolling
  };

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
            <ul className="header hover:cursor-pointer hidden md:flex text-sm lg:text-[15px] gap-2 lg:gap-10 ml-auto mr-5 text-[#96979C] items-center">
              <li>
                <ScrollLink to="home" smooth={true} duration={500}>
                  HOME
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="mission" smooth={true} duration={500}>
                  ABOUT
                </ScrollLink>
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
                <ScrollLink to="benefits" smooth={true} duration={500}>
                  BENEFITS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="blogs" smooth={true} duration={500}>
                  BLOGS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="footer" smooth={true} duration={500}>
                  CONTACTS
                </ScrollLink>
              </li>
              <button className="bg-[#EB0000] text-white px-4 py-2 lg:px-[28px] lg:py-[14px] rounded-full">
                Join us now
              </button>
            </ul>
          </nav>
        </div>

        {/* Other sections */}
        <div className="w-full flex justify-center mt-48" data-aos="zoom-in">
          <div className="flex h-auto bg-[#0f0f0f] rounded-full px-4 py-2 lg:px-6 lg:py-2 items-center">
            <img src={person3} alt="person" className="z-0 w-5 lg:w-8" />
            <img
              src={person2}
              alt="person"
              className="z-10 relative right-2 w-5 lg:w-8"
            />
            <img
              src={person1}
              alt="person"
              className="z-20 relative right-4 lg:right-5 w-5 lg:w-8"
            />
            <p className="para text-[#96979C] text-xs lg:text-base ml-2">
              Trusted by 3+ million users
            </p>
          </div>
        </div>

        {/* Headline */}
        <div id="home" className="w-full flex justify-center mt-5 text-center" data-aos="zoom-in">
          <div className="flex flex-col gap-2 lg:gap-5">
            <p className="header text-[#EB0000] text-4xl lg:text-7xl font-extrabold">
              Track Your Fitness
            </p>
            <p className="header text-[#EB0000] text-4xl lg:text-7xl font-extrabold">
              Journey
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="w-full flex justify-center mt-5 px-4 text-center" data-aos="zoom-in">
          <div className="flex flex-col gap-1 lg:gap-2">
            <p className="para text-white text-sm lg:text-lg font-extrabold">
              Discover the ultimate fitness companion with GymFluencer.
              Effortlessly log your workouts,
            </p>
            <p className="para text-white text-sm lg:text-lg font-extrabold">
              count reps, and track calories burned. Stay motivated and achieve
              your goals with ease.
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
                <ScrollingText className="overflow-hidden" />
                </div>
      </div>
      {/* Mission Section */}
      <div id="mission" className="w-screen bg-black flex flex-col items-center py-10 px-4">
        <Mission />
        <Stats />
        <ImageSection />
        <OurServices  />
        <OurBenifits id="benefits" />
      </div>

      {/* Other Sections */}
      <Hub />
      <Tranformations />
      <Testimonials />
      <GymLocator />
      <Blogs id="blogs"  />
      <FAQs />

      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Section1;
