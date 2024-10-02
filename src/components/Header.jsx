import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router-dom for navigation
import image from '../assets/royal.jpeg'
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={image} alt="Royal Care Logo" className="h-32 w-32 w-auto" />
          <span className="ml-3 text-xl font-bold text-blue-600">Royal Care Transportation</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Services
          </Link>
          <Link to="/request-trip" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Request a Trip
          </Link>
          <Link to="/contact-us" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Contact Us
          </Link>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-600 transition duration-300">
            About Us
          </Link>
          <Link to="/compliance" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Compliance
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
            {/* Icon for mobile menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
