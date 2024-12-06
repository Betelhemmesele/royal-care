import React from 'react';
import CardSection from '../components/Contactcard';
import abstract from '../assets/abstract.webp';
import seniorlivingsection from '../assets/serviceSection/seniorlivingsection.webp';
import covid from '../assets/serviceSection/covid.webp';
import doctorapp from '../assets/serviceSection/doctorapp.webp';
import plane from '../assets/serviceSection/plane.webp';
import wheeltransport from '../assets/serviceSection/wheeltransport.webp';
const servicesData = [
  {
    title: "Senior Living Transportation",
    description: "Reliable transportation for seniors to help them get to their destinations with ease and comfort.",
    imageUrl: seniorlivingsection, // Local image
  },
  {
    title: "Doctor Appointments",
    description: "On-time transportation for scheduled medical appointments.",
    imageUrl: doctorapp, // Local image
  },
  {
    title: "Non-Emergency Transportation",
    description: "Safe and secure transportation for non-emergency medical needs, including wheelchair and stretcher services.",
    imageUrl: wheeltransport, // Local image
    subServices: [
      "Wheelchair Transportation",
      "Stretcher Services",
    ],
  },
  {
    title: "Airport Transportation",
    description: "Convenient and timely airport transfers for all passengers.",
    imageUrl: plane, // Local image
  },
  {
    title: "COVID-19 Vaccine Transportation",
    description: "Transportation to and from COVID-19 vaccination sites.",
    imageUrl: covid, // Local image
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-100 pb-3 pt-36" aria-labelledby="services-header">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 id="services-header" className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="text-lg text-gray-700 mt-4">
            We offer a wide range of non-emergency transportation services, ensuring our clients reach their destinations safely and comfortably.
          </p>
        </header>

        {/* Service Cards */}
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <article 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`} 
              aria-labelledby={`service-${index}-title`}
            >
              
              {/* Image section */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} - ${service.description}`}
                  className="w-full h-[350px] object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Text content */}
              <div className="w-full md:w-1/2 md:px-8 flex flex-col space-y-4">
                <h3 id={`service-${index}-title`} className="text-3xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-700">{service.description}</p>
                
                {/* Sub-services if any */}
                {service.subServices && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {service.subServices.map((subService, idx) => (
                      <li key={idx} className="text-lg">{subService}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <CardSection
        backgroundImage={abstract}
        heading="Contact Us"
        content="For inquiries or to schedule a ride, please contact us at (214)702-3232 or email us at dispatch@royalcaretrans.com. We look forward to serving you!"
        buttonText="Schedule A Ride"
        buttonLink="request-trip"
      />
    </section>
  );
};

export default ServicesPage;
