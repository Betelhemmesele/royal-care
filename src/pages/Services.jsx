import React from 'react';
import CardSection from '../components/Contactcard';

const servicesData = [
  {
    title: "Senior Living Transportation",
    description: "Reliable transportation for seniors to help them get to their destinations with ease and comfort.",
    imageUrl: "https://media.istockphoto.com/id/1397009129/photo/a-senior-man-helped-by-a-young-male-carer-out-of-car-and-into-wheelchair.jpg?s=612x612&w=0&k=20&c=nQ2HUNS1wvVmIgflrdFCZjY_nLjQyr4uHOSYl8yLivI=",
  },
  {
    title: "Doctor Appointments",
    description: "On-time transportation for scheduled medical appointments.",
    imageUrl: "https://demigos.com/media/cache/61/e8/61e8be99d482c40c4f294b577a7d2e92.jpg",
  },
  {
    title: "Non-Emergency Transportation",
    description: "Safe and secure transportation for non-emergency medical needs, including wheelchair and stretcher services.",
    imageUrl: "https://irp.cdn-website.com/ea73f6f8/dms3rep/multi/wheelchair-transport-vans-02bfd378.png",
    subServices: [
      "Wheelchair Transportation",
      "Stretcher Services",
    ],
  },
  {
    title: "Airport Transportation",
    description: "Convenient and timely airport transfers for all passengers.",
    imageUrl: "https://media.ceetiz.com/activity/GRAPRA040/avion.jpg",
  },
  {
    title: "COVID-19 Vaccine Transportation",
    description: "Transportation to and from COVID-19 vaccination sites.",
    imageUrl: "https://news.panasonic.com/global/stories/images/07_Vaccine_Transport_2021.jpg",
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-100 pb-3 pt-36" aria-labelledby="services-header">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Page Header */}
        <header className="text-center mb-12">
          <h2 id="services-header" className="text-4xl font-bold text-gray-900">Our Services</h2>
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
        backgroundImage="https://static.vecteezy.com/system/resources/previews/003/435/330/non_2x/abstract-orange-background-free-vector.jpg"
        heading="Contact Us"
        content="For inquiries or to schedule a ride, please contact us at (214)302-3232 or email us at Support@royalcaretransportations.com. We look forward to serving you!"
        buttonText="Schedule A Ride"
        buttonLink="request-trip"
      />
    </section>
  );
};

export default ServicesPage;
