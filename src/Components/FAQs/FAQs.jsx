import React, { useState , useEffect } from "react";
import bg4 from "../../assets/bg4.png";
import AOS from "aos";
import "aos/dist/aos.css";
const faqData = [
  {
    id: 1,
    question: "How do I log my workouts?",
    answer: "You can log your workouts in the app by selecting a workout type, duration, and intensity, then saving it to your profile.",
  },
  {
    id: 2,
    question: "Can I track my calories burned?",
    answer: "Yes, GymFluencer allows you to track calories burned based on your workouts and input data.",
  },
  {
    id: 3,
    question: "Is this application suitable for beginners?",
    answer: "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.",
  },
  {
    id: 4,
    question: "What features does the application offer?",
    answer: "The app offers workout logging, rep counting, calorie tracking, and progress reviews.",
  },
  {
    id: 5,
    question: "How can I reset my password?",
    answer: "You can reset your password by selecting 'Forgot Password' on the login page and following the instructions sent to your email.",
  },
];

const FAQs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center py-10"
      style={{
        backgroundImage: `url(${bg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="header text-white text-3xl font-bold mb-8 text-center mt-14" data-aos="zoom-in">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="w-full max-w-4xl flex flex-col gap-4 px-4" data-aos="zoom-in">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className="border-[1px] border-white rounded-md overflow-hidden transition-all duration-500"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none text-white"
              onClick={() => toggleFAQ(index)}
            >
              <span className="para text-lg font-semibold">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? "✕" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="para p-4 text-white">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
