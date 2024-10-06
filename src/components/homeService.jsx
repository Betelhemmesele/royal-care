// ServiceCard.js
import React from 'react';

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-gray-200 flex flex-col rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-2xl text-orange-900 font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a 
          href={link} 
          className="bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-200 mt-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
