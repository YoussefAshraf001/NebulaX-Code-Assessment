import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";

import useInView from "../Hooks/UseInView.jsx";

const ProductCard = ({ title, price, imagePath }) => {
  const isInView = useInView(0.8); // Detects when 80% of the card is in the viewport

  return (
    <div
      id="product-card"
      className={`bg-white shadow-lg rounded-xl p-6 flex flex-col items-center relative w-[220px] h-[220px] transform transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={imagePath}
        alt={title}
        className="w-[180px] h-[200px] -mt-[150px]"
      />
      <h3 className="text-xl font-semibold my-4">{title}</h3>
      <div className="w-full border-t border-gray-100 my-4"></div>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <p className="text-yellow-500 font-bold text-xl">${price}</p>
        <button className="text-gray-500 hover:text-gray-800">
          <IoCartSharp className="text-2xl text-[#1d2247]" />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center lg:justify-center py-[140px] lg:py-10">
      {/* Left side text section */}
      <div className="flex-1 text-left max-w-xl px-8 lg:px-16">
        <p className="text-[#f1deae] text-xl">WE HELP YOU</p>
        <h1 className="text-5xl font-bold leading-tight mt-2 lg:mt-10">
          Sell <br /> Stunning <br /> Products
        </h1>
        <p className="text-gray-500 text-xl mt-4">
          We'll guide you through our unique 5-step <br /> brand-building
          framework
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

      {/* Right side product section */}
      <div className="flex items-center justify-center gap-16 flex-wrap mt-10 lg:mt-0 lg:ml-16 pt-[260px] lg:pt-0 pb-[50px] lg:pb-0">
        <div className="relative -top-20">
          <div className="absolute -top-[150px] -left-[65px] bg-[#fada91] rounded-full w-80 h-80"></div>{" "}
          <ProductCard
            title="Minimal Chair"
            price="204.00"
            imagePath="../Products/P1.png"
          />
        </div>
        <div className="relative -top-[-130px]">
          <div className="absolute -top-[150px] -right-[65px] bg-[#aaa2f7] rounded-full w-80 h-80"></div>{" "}
          <ProductCard
            title="Beats Headphone"
            price="74.00"
            imagePath="../Products/P2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
