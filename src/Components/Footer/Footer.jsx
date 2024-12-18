import React from "react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 w-72 mt-10">
            <img src={logo} alt='logo' className="w-full"/>
          </div>
          <p className="para text-gray-400 text-xl text-center mt-7">
            Where Fitness Meets Social Connection!
          </p>
        </div>
        <div className="mt-7">
          <a
            href="mailto:hello@gym.birlaventures.com"
            className="bg-[#18181A] px-4 py-2 rounded-md text-white text-sm flex items-center gap-2 hover:bg-gray-600 transition mt-7 mb-7"
          >
            <MdEmail className="text-lg" /> hello@gym.birlaventures.com
          </a>
        </div>
        <nav className="para flex gap-6 text-gray-400 text-lg pb-5">
          <a href="#home" className="hover:text-white transition">Home</a>
          <span>•</span>
          <a href="#diet-plan" className="hover:text-white transition">Diet Plan</a>
          <span>•</span>
          <a href="#features" className="hover:text-white transition">Features</a>
          <span>•</span>
          <a href="#faqs" className="hover:text-white transition">FAQ's</a>
        </nav>
        <div className="w-[80%] border-t border-gray-700 pb-5 "></div>
        <div className="flex flex-row w-[80%] justify-between mt-10">
        <div className="text-gray-500 text-xs ">
          &copy; 2024 GymFluencer. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18181A]  p-2 rounded-md hover:bg-gray-600 transition"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18181A]  p-2 rounded-md hover:bg-gray-600 transition"
          >
            <FaXTwitter className="text-white text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18181A]  p-2 rounded-md hover:bg-gray-600 transition"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
