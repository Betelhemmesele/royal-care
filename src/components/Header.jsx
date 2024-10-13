import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router-dom for navigation
import {FaPhoneAlt} from 'react-icons/fa'; // import a phone icon from react-icons
import image from '../assets/royal.webp';

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto my-0 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center md:flex">
  <Link to="/">
    <img src={image} alt="Royal Care Logo" className="h-24 w-48" />
  </Link>
</div>


        {/* Desktop Navigation Links (Only for md and above) */}
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/request-trip"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            Request a Trip
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/about-us"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/testimonials"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            Testimonials
          </Link>
          <Link
            to="/compliance"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            Compliance
          </Link>
          <Link
            to="/faqs"
            className="text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300"
          >
            FAQs
          </Link>
        </nav>

        {/* Mobile Header (Only for small screens) */}
        <div className="md:hidden flex items-center my-1 justify-between w-full">
          {/* Mobile Menu Toggle (left side) */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {/* Conditionally render Hamburger or X icon */}
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>

          {/* Logo and Title (center for small screens) */}
          <div className="flex items-center mx-auto">
          <Link to="/">

            <img src={image} alt="Royal Care Logo" className="h-24 w-40" />
            </Link>
          </div>

          {/* Call Icon (right side) */}
          <a href="tel:+1214302-3232" className="text-orange-900 hover:text-orange-700 transition duration-300">
            <FaPhoneAlt className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Semi-transparent overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={toggleMenu}></div>

          {/* Slide-in menu (half of the screen) */}
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-md z-50 transition-transform transform duration-500 ease-in-out">
            <div className="flex flex-col items-start space-y-2 py-4 px-4">
              {/* Menu Items */}
              <button
                className="text-gray-700 hover:text-red-600 focus:outline-none mb-4"
                onClick={toggleMenu}
              >
                {/* X icon inside menu */}
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <Link
                to="/"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/request-trip"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Request a Trip
              </Link>
              <Link
                to="/contact-us"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link
                to="/about-us"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/testimonials"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              <Link
                to="/compliance"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Compliance
              </Link>
              <Link
                to="/faqs"
                className="block text-gray-700 hover:bg-orange-800 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                FAQs
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
