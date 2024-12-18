import React , {useEffect} from "react";
import blogImage1 from "../../assets/blog3.png";
import blogImage2 from "../../assets/blog2.png";
import blogImage3 from "../../assets/blog1.png";
import AOS from "aos";
import "aos/dist/aos.css";
const blogData = [
  {
    id: 1,
    image: blogImage1,
    category: "Exercise",
    categoryColor: "bg-red-600",
    title: "CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE",
    date: "Jun 28, 2024",
    author: "Benjamin",
    isMain: true,
  },
  {
    id: 2,
    image: blogImage2,
    category: "Weight loss",
    categoryColor: "bg-orange-500",
    title: "WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU",
    date: "Jun 26, 2024",
    author: "Jessica",
    isMain: false,
  },
  {
    id: 3,
    image: blogImage3,
    category: "Nutrition",
    categoryColor: "bg-green-500",
    title: "FUEL YOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE",
    date: "Jun 23, 2024",
    author: "David",
    isMain: false,
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);
  return (
    <section className="bg-black py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="header text-[#EB0000] text-2xl md:text-3xl font-bold text-center mb-8" data-aos="zoom-in">
          OUR LATEST BLOGS
        </h2>
        
        {/* Blog Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {/* Main Blog */}
          <div className="lg:col-span-1" data-aos="zoom-in">
            {blogData
              .filter((blog) => blog.isMain)
              .map((blog) => (
                <div key={blog.id} className="relative group cursor-pointer">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm rounded-b-lg transition-all duration-300 group-hover:bg-opacity-70">
                    <span className={`para text-white px-2 py-1 text-xs rounded ${blog.categoryColor}`}>
                      {blog.category}
                    </span>
                    <h3 className="header text-white text-lg md:text-xl font-semibold mt-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="para text-gray-300 text-sm mt-2 flex items-center flex-wrap">
                      <span className="mr-2">🗓 {blog.date}</span>
                      <span>👤 {blog.author}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Side Blogs */}
          <div className="flex flex-col gap-6 lg:gap-8" data-aos="zoom-in">
            {blogData
              .filter((blog) => !blog.isMain)
              .map((blog) => (
                <div key={blog.id} className="relative group cursor-pointer">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full md:w-full lg:w-full h-[200px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-b-lg transition-all duration-300 group-hover:bg-opacity-70">
                    <span className={`para text-white px-2 py-1 text-xs rounded ${blog.categoryColor}`}>
                      {blog.category}
                    </span>
                    <h4 className="header text-white text-base md:text-lg font-semibold mt-2 line-clamp-2">
                      {blog.title}
                    </h4>
                    <div className="para text-gray-300 text-sm mt-2 flex items-center flex-wrap">
                      <span className="mr-2">🗓 {blog.date}</span>
                      <span>👤 {blog.author}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;