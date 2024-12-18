import React from 'react'

const stats = [
    { value: "422k+", label: "Workouts logged and progress tracked every month" },
    { value: "122k+", label: "Fitness enthusiasts connected through our platform" },
    { value: "2+", label: "Countries where GymFluencer is making an impact" },
];
const Stats = () => {
  return (
    <>
                      <div className="text-white py-10 px-4 w-full">
                          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                              {stats.map((stat, index) => (
                                  <div
                                      key={index}
                                      className={`flex flex-col items-center ${index !== 0 ? "md:border-l border-gray-700" : ""
                                          }`}
                                  >
                                      <p className="text-3xl lg:text-4xl font-bold">{stat.value}</p>
                                      <p className="mt-2 text-gray-400 text-sm lg:text-base px-4">
                                          {stat.label}
                                      </p>
                                  </div>
                              ))}
                          </div>
                      </div>
    </>
  )
}

export default Stats
