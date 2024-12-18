import React from 'react';
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const services = [
  { image: img2, title: 'TRACK', description: 'Track your fitness journey' },
  { image: img4, title: 'ANALYZE', description: 'Analyze your performance' },
  { image: img5, title: 'TRAIN', description: 'Professional training programs' },
  { image: img3, title: 'CONNECT', description: 'Connect with fitness community' },
  { image: img6, title: 'CHALLENGE', description: 'Join fitness challenges' },
];

const OurServices = () => {
  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="header text-4xl font-extrabold text-[#EB0000] mb-5">Our Services</h2>
          <p className=" para text-xl text-white">
            GumFluencer offers 5 essential services to help you<br />
            achieve your fitness goals with ease and flexibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 -z-50">
          {services.map((service, index) => (
            <div key={index} className="relative group aspect-[3/4] overflow-hidden rounded-lg ">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="header text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="para text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;