import React, { useState } from "react";
import { FaEnvelope, FaRegCommentDots } from "react-icons/fa"; // Importing icons

function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {};

  return (
    <div
      className="min-h-screen flex items-center justify-center mt-[-250px] lg:mt-[0px] p-8 lg:p-0 lg:pl-10 bg-no-repeat bg-right lg:bg-[url('/Contact/bg.jpg')] lg:bg-cover lg:bg-right"
      style={{
        backgroundSize: "65%",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Write Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
            <FaEnvelope className="text-gray-600 mr-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full focus:outline-none"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-4 py-2">
            {/* Position the icon to the top-left of the textarea */}
            <FaRegCommentDots className="absolute top-3 left-4 text-gray-600" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              rows="5"
              className="w-full pl-7 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white font-semibold rounded-full shadow-lg hover:bg-transparent hover:border-2 hover:border-purple-700 hover:text-purple-700 transition-all duration-300"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
