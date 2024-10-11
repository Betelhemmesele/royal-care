
import React from 'react';
import './ContactCard.css'
const CardSection = ({
  backgroundImage,
  overlayColor = "bg-gray-900",
  overlayOpacity = "opacity-50",
  heading,
  content,
  buttonText,
  buttonLink,
  buttonColor = "bg-orange-950",
  buttonHoverColor = "hover:bg-orange-900",
}) => {
  return (
    <section className="section transition-all duration-700 ease-in-out py-10"> {/* Removed opacity-0 and translate-y-10 */}
      <div className="container mx-auto max-w-6xl px-4 md:px-2">
        <div className="relative">
          {/* Background image */}
          <div 
  className="background-image absolute inset-0 rounded-lg" 
  style={{ '--background-image-url': `url(${backgroundImage})` }}
></div>

          {/* Overlay for better text visibility */}
          <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity} rounded-lg`}></div>

          {/* Content */}
          <div className="relative z-10 rounded-lg shadow-lg p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
            <p className="text-white mb-6">{content}</p>
            <a 
              href={buttonLink}
              className={`${buttonColor} text-white py-3 px-6 rounded-lg ${buttonHoverColor} transition duration-200`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
