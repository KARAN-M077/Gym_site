import React , {useEffect} from "react";
import bg3 from "../../assets/bg3.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const testimonials = [
  {
    id: 1,
    name: "A Jolie",
    role: "Model",
    feedback:
      "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    image: card1,
  },
  {
    id: 2,
    name: "Michael Field",
    role: "Software Engineer",
    feedback:
      "I love how user-friendly the app is. Logging workouts has never been easier!",
    image: card2,
  },
  {
    id: 3,
    name: "David Leo",
    role: "Designer",
    feedback:
      "I’ve seen amazing results with GymFluencer. The personalized routines keep me motivated!",
    image: card3,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);
  return (
    <>
<div
  className="relative w-screen h-screen bg-cover bg-center flex flex-col items-center overflow-hidden -z-50"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg3})`,
  }}
>
  <div className="mt-10" data-aos="slide-right">
    <p className="header text-white font-extrabold text-[36px]">WHAT PEOPLE SAY</p>
  </div>

  <div className="relative overflow-hidden py-10 w-screen">
    {/* Scrollable Container */}
    <div className="flex animate-scroll space-x-8 w-[200%]" data-aos="slide-right">
      {/* Duplicate the testimonials for seamless scrolling */}
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[600px] h-[300px] flex bg-[#111] text-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-1/2 p-6 flex flex-col justify-between">
            {/* Star ratings */}
            <p className="text-red-500 text-2xl font-bold">★★★★★</p>

            {/* Testimonial text */}
            <p className="text-lg font-medium leading-relaxed">
              {testimonial.feedback}
            </p>

            {/* Name and role */}
            <div>
              <p className="text-white text-lg font-extrabold">
                {testimonial.name}
              </p>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default Testimonials;
