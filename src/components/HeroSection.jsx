import React, { useState, useEffect } from "react";
import bg from "/bg.jpg";
import mainImage from "/hero-person.png";
import avatar from "/hero-card-img.png";
import { CiSearch } from "react-icons/ci";

// Example logo image path
import logo from "../../public/logo-placeholder.png";

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
      {/* <video
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-[96%] object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolling ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-[70px]" />
          </div>

          {/* Navbar Buttons */}
          <div className="flex space-x-6 text-black">
            <button className="px-6 py-2 underline hover:text-blue-500 transition-all duration-300">
              Get Started Now
            </button>
            <button className="bg-gray-200 bg-opacity-50 py-1 px-5 rounded-full hover:text-blue-500 hover:bg-opacity-100 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="relative z-20 min-h-screen pt-[100px] lg:pt-[150px]">
        <main className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16 h-full">
          <div className="relative flex-1 h-full flex items-center justify-center flex-col lg:flex-row">
            <img
              src={mainImage}
              alt="Allison Argent"
              style={{ filter: "drop-shadow(2px 4px 6px black)" }}
              className="relative z-20 w-full max-w-[700px] rounded-xl mb-6 lg:mb-0 lg:w-[70%]"
            />
            <div className="relative w-[290px] lg:w-[300px] z-30 flex flex-col items-center justify-center gap-2 bg-slate-50 rounded-[6px] group bottom-[100px] lg:absolute lg:left-[275px] lg:bottom-[-110px]">
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
                <div className="pt-6 mb-2 text-3xl font-semibold text-center w-[210px]">
                  Allison Argent
                </div>
                <p className="text-gray-400">Digital Marketer</p>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left lg:ml-[300px] flex flex-col justify-center h-full px-4 lg:px-0">
            <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-800 mb-8 lg:mb-20 lg:transform scale-y-125">
              We Help You
              <br /> Build & Grow an <br /> Online Business
            </h1>
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
