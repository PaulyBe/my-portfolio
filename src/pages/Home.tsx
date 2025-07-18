import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          <span className="block text-gray-800">Hello, I'm Paul.</span>
          <span className="block bg-gradient-to-r to-blue-800 from-green-700 bg-clip-text text-transparent">
            I'm an aspiring
          </span>
          <span className="block bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent">
            Web Developer.
          </span>
        </h1>

        {/* Sub-heading / Introduction Paragraph */}
        <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          I enjoy building reponsive websites, with a focus on a user friendly UX/UI design. Feel free to check out some of my projects and send me a message.
        </p>

        {/* Button */}
        <div className="mt-10">
          <NavLink
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-800 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {}}
          >
            About me
          </NavLink>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Home;