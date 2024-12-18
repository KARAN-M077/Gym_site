import React , {useEffect} from 'react'

import Swiper from '../Slider/Swiper'
import AOS from "aos";
import "aos/dist/aos.css";
const Tranformations = () => {
      useEffect(() => {
          AOS.init({
            duration: 2000, 
            once: true, 
          });
        }, []);
  return (
    <>
                  <div className="w-screen bg-black flex justify-center pb-20 " >
                      <div className="w-[500px] mt-10" data-aos="slide-up">
                          <p className="header text-[#EB0000] text-4xl text-center font-extrabold">TRANSFORMATIONS MADE
                              POSSIBLE WITH GYMFLUENCER</p>
                      </div>
                  </div>
                  <Swiper  data-aos="slide-up" />
    </>
  )
}

export default Tranformations
