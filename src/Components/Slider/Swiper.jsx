import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import banner1 from "../../assets/slider1.png";
import banner2 from "../../assets/slider2.png";
import banner3 from "../../assets/slider3.png";
import './swiper.css';


const slideImages = [
banner1,
banner2,
banner3,
banner1
];
const Swiper = () => {
  return (
    <div className="slide-container">
      <Slide className="-z-50">
        {slideImages.map((each, index) => (
          <div key={index} className="each-slide">
            <img src={each} alt={`slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Swiper
