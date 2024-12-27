// src/LandingPage.js
import React from "react";
// import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed
import Imager from "../assets/imager.png"; // Update the path to your image

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Sales Platform</h1>
      <p className="text-lg mb-8 text-center">
        We provide the best solutions for your sales needs. Join us and start
        your journey today!
      </p>
      <img src={Imager} alt="Landing" className="mb-8 w-1/2 h-auto" />
      <Link to="/form">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Go to Registration Form
        </button>
      </Link>
    </div>
  );
};
