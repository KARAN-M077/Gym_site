import React, { useState, useEffect } from 'react';

const stats = [
  { value: 463, label: "Workouts logged and progress tracked every month" },
  { value: 163, label: "Fitness enthusiasts connected through our platform" },
  { value: 13, label: "Countries where GymFluencer is making an impact" },
];

const Stats = () => {
  // Function to animate the counting
  const useCountUp = (target, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const increment = target / (duration / 100);
      let timer;

      if (count < target) {
        timer = setInterval(() => {
          setCount((prev) => {
            if (prev < target) {
              return Math.min(prev + increment, target);
            }
            clearInterval(timer);
            return target;
          });
        }, 100);
      }

      return () => clearInterval(timer);
    }, [count, target, duration]);

    return Math.floor(count);
  };

  return (
    <div className="text-white py-10 px-4 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${index !== 0 ? "md:border-l border-gray-700" : ""}`}
          >
            <p className="text-3xl lg:text-4xl font-bold">
              {useCountUp(stat.value)}
              {stat.value >= 100 && "K+"}
            </p>
            <p className="mt-2 text-gray-400 text-sm lg:text-base px-4">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
