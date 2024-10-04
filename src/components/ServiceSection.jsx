import React from 'react';

const ServicesSection = ({
  backgroundImage,
  heading,
  description,
  servicesList,
}) => {
  return (
    <section className="py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 md:pr-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      
      {/* Main List */}
      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 pl-6">
        {servicesList.map((service, index) => (
          <li key={index}>
            {service.mainItem}
            
            {/* Check if there are sub-items */}
            {service.subItems && (
              <ul className="list-disc list-inside pl-6 mt-1">
                {service.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* Right Side: Image */}
    <div className="w-full md:w-1/2 mt-6 md:mt-0">
      <img
        src={backgroundImage}
        alt="ServicesImage"
        className="w-full h-[450px] rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

  );
};

export default ServicesSection;
