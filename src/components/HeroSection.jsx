import React, { useState, useEffect } from "react";
import bg from "../../public/bg.jpg";
import mainImage from "../../public/hero-person.png";
import avatar from "../../public/hero-card-img.png";
import { CiSearch } from "react-icons/ci";

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // When the page is scrolled more than 50px
      } else {
        setScrolling(false); // When it's back to the top
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-[96%] object-cover z-0"
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-300 ${
          scrolling ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1
            className={`font-semibold text-xl transition-all duration-300 ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            LOGO
          </h1>
          <div className="flex px-12 lg:px-8">
            <ul className="flex items-center space-x-4">
              <li>
                <button className="underline hover:text-blue-500 transition ease-in-out duration-300">
                  Get Started Now
                </button>
              </li>
              <li>
                <button className="bg-gray-200 bg-opacity-50 p-2 rounded-full hover:bg-blue-500 hover:text-white transition ease-in-out duration-300">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="relative z-20 min-h-screen pt-[100px] lg:pt-[150px]">
        {" "}
        {/* Add padding-top to offset navbar height */}
        {/* Main Section */}
        <main className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16 h-full">
          <div className="relative flex-1 h-full flex items-center justify-center flex-col lg:flex-row">
            {/* Main Image */}
            <img
              src={mainImage}
              alt="Jane Doe"
              style={{ filter: "drop-shadow(2px 4px 6px black)" }}
              className="relative z-20 w-full max-w-[700px] rounded-xl mb-6 lg:mb-0 lg:w-[70%]"
            />

            {/* Card */}
            <div className="relative w-full lg:w-[300px] z-30 flex flex-col items-center justify-center gap-2 bg-slate-50 rounded-[6px] group lg:absolute lg:left-[250px] lg:bottom-[-50px]">
              <div className="flex flex-col items-center p-8 rounded-full w-full sm:px-12 bg-white text-black">
                <div className="relative p-2 bg-[#fff2f0] border-[22px] border-[#fff2f0] rounded-full">
                  <div className="w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="neon-ring absolute top-0 left-0 w-full h-full rounded-full"></div>
                </div>
                <div className="pt-4 mb-2 text-3xl font-semibold">
                  Allison Argent
                </div>
                <p className="text-gray-400">Digital Marketer</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 text-center lg:text-left lg:ml-[300px] flex flex-col justify-center h-full px-4 lg:px-0">
            <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-800 mb-6">
              We Help You
              <br /> Build & Grow an <br /> Online Business
            </h1>

            {/* Search Bar */}
            <div className="relative mt-4 w-[110%] lg:w-2/3">
              <input
                type="text"
                placeholder="Tell us what you need to build..."
                className="w-full py-3 pl-4 pr-16 rounded-md border border-gray-300 shadow-lg focus:outline-none"
              />
              <div className="absolute top-0 right-0 h-full flex items-center py-1.5 px-3">
                <button className="items-center h-full px-4 py-3 bg-[#6a54e5] text-white rounded-md hover:bg-[#8977f0] transition-colors duration-200">
                  <CiSearch size={18} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
