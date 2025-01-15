import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";

const About = () => {
  const [inView, setInView] = useState(false);

  // Detect when the cards are in view with a delay
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Trigger animation when the cards are 50% in the viewport or further
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          // Add a delay before activating the animation
          setTimeout(() => setInView(true), 300); // 300ms delay before animation starts
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center lg:justify-center py-[140px] lg:py-10">
      {/* Left side text section */}
      <div className="flex-1 text-left max-w-xl lg:px-16">
        {/* First card with circle alignment */}
        <div className="relative">
          {/* Circle behind the card */}
          <div className="absolute -top-[70px] -left-[65px] bg-[#4ab7d5] rounded-full w-[250px] h-[250px]"></div>

          {/* Card with slide-in animation */}
          <div
            className={`card bg-white shadow-lg rounded-xl p-6 flex items-center relative w-[350px] left-[10px] lg:w-[400px] h-[150px] -top-[20px] lg:left-[45px] transform transition-transform duration-1000 ease-out ${
              inView
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative p-2">
              <img
                src="/About/Person1.jpg"
                alt="Person 1"
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
              <div className="neon-ring absolute top-0 left-0 w-full h-full rounded-full"></div>
            </div>

            <div className="ml-6 pt-2 flex flex-col h-full gap-4">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                $7,654{" "}
                <IoMdArrowDropupCircle className="mt-1 text-purple-700" />
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-md">
                  TOTAL REVENUE{" "}
                  <span className="text-green-500 font-bold">+232</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="relative -top-[-100px] ">
          <div className="absolute -top-[40px] -right-[15px] lg:-top-[10px] lg:-right-[65px] bg-[#55c888] rounded-full w-[200px] h-[200px]"></div>
          <div
            className={`card bg-white shadow-lg rounded-xl p-6 flex items-center relative w-[350px] left-[15px] lg:w-[400px] h-[150px] -top-[20px] lg:left-[50px] transform transition-transform duration-1000 ease-out ${
              inView
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="mr-6 pt-2 flex flex-col h-full gap-4">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                $9,978{" "}
                <IoMdArrowDropupCircle className="mt-1 text-purple-700" />
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-md">
                  TOTAL REVENUE{" "}
                  <span className="text-green-500 font-bold">+349</span>
                </p>
              </div>
            </div>
            <div className="relative p-2 ml-9">
              <img
                src="/About/Person2.jpg"
                alt="Person 2"
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
              <div className="neon-ring absolute top-0 left-0 w-full h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side product section */}
      <div className="flex-col items-center justify-center gap-16 flex-wrap mt-10 lg:mt-0 ml-14 lg:ml-16 pt-[260px] lg:pt-0 pb-[50px] lg:pb-0">
        <p className="text-[#f1deae] text-xl">WHAT WE DO</p>
        <h1 className="text-5xl font-bold leading-tight mt-2">
          Increase our <br /> Customers <br /> Sales
        </h1>
        <p className="text-gray-500 text-xl mt-4">
          Our customers are seeing big results within <br /> the first three
          months
        </p>
        <button className="mt-6 lg:mt-14 bg-purple-700 text-white px-1 py-1 rounded-full text-lg flex items-center gap-2 hover:bg-purple-600">
          <span className="text-lg lg:text-xl ml-10 uppercase">
            More Details
          </span>
          <div className="ml-5">
            <div className="bg-white p-3 rounded-full">
              <MdArrowForwardIos className="w-6 h-6 text-xl text-purple-700" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
