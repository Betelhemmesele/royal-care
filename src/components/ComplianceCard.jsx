import React from 'react';

const Card = ({ title, description, items }) => {
  return (
    <div className="p-6 border-orange-800 border-y-2 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold text-orange-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-2">{description}</p>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
