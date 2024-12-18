import React from 'react';
import CardSection from '../components/Contactcard';
import ServicesSection from '../components/ServiceSection';
import fourelders from '../assets/fourelders.webp';
import seniorlady from '../assets/seniorlady.webp';
import abstract from '../assets/abstract.webp';
const AboutUs = () => {
  return (
    <section className="bg-gray-100 pt-32 pb-0 px-2 md:px-52" aria-labelledby="about-us-header">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-full px-0">
        
        {/* About Us Header */}
        <header className="w-full flex flex-col justify-center space-y-6 px-4 md:px-8">
          <h2 id="about-us-header" className="text-4xl font-bold text-gray-900">About Royal Care Transportation</h2>

          {/* Introduction Paragraphs */}
          <p className="text-lg text-gray-700">
            At Royal Care Transportation, we are dedicated to providing safe, reliable, and compassionate non-emergency transportation services for seniors and individuals with special needs.
          </p>

          <p className="text-lg text-gray-700">
            Royal Care Transportation provides non-emergency medical transportation 365 days a year to accommodate weekend and holiday discharge needs. Our priority is to get you from your designated destination to your drop-off location safely and on time.
          </p>

          <p className="text-lg text-gray-700">
            Regardless of mobility, we strive to make everyone feel as comfortable as possible. We will provide transportation of the highest quality with a direct focus on meeting the needs of our customers.
          </p>

          <p className="text-lg text-gray-700">
            The benefits of our NEMT services extend to individuals struggling with mobility, confined to wheelchairs, or those recovering from injury or a major health crisis.
          </p>

          <p className="text-lg text-gray-700">
            Our drivers are experienced, each with impeccable driving records, ensuring safety at all times. Every vehicle undergoes daily inspections to maintain perfect standards. We also offer backup transportation in the event of an emergency.
          </p>

          <h4 className="text-lg text-orange-900 font-bold">
            We accept Insurance Payments and Private Pay, providing flexible payment options to ensure everyone can access our services.
          </h4>
        </header>

        {/* Mission Section */}
        <section className="mission-section">
          <h3 className="text-3xl font-semibold text-gray-800 pt-8 text-center">Our Mission</h3>

          <div className="flex flex-col md:flex-row pt-5 items-start justify-between mt-8">
            {/* Mission Text */}
            <div className="w-full md:w-1/2 md:pr-8">
              <p className="text-lg text-gray-700 text-center md:text-left mb-4">
                Our mission at Royal Care Transportation is to enhance the quality of life for our clients by offering a trusted transportation option that prioritizes safety, comfort, and convenience. We believe that everyone deserves dignified and compassionate care while traveling.
              </p>
              
              {/* Interactive Questions */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800">Have Questions?</h4>
                <p className="text-lg text-gray-700">
                  How can our transportation services make your journey more comfortable? Reach out to us, and we’ll be happy to answer any questions you have.
                </p>
                <p className="text-lg text-gray-700">
                  Do you need help arranging transportation for a loved one? Let’s discuss how we can accommodate their unique needs.
                </p>
                
                {/* Call to Action */}
                <a href='/contact-us' className="text-lg font-medium text-orange-800 cursor-pointer hover:underline">
                  Contact us now to learn more!
                </a>
              </div>
            </div>

            {/* Image on the right half */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src={fourelders}//four elderly
                alt="Group of elderly people smiling together"
                className="w-full h-[400px] rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection
          backgroundImage={seniorlady}//senoir lady
          heading="We Offer a Multitude of Services"
          description="We offer professional transportation services for medical appointments, rehabilitation sessions, and social events, both long and short distance."
          servicesList={[
            { mainItem: "Senior Living Transportation" },
            { mainItem: "Doctor Appointments" },
            { mainItem: "Non-Emergency Transportation", subItems: ["Wheelchair Transportation", "Stretcher Services"] },
            { mainItem: "Airport Transportation" },
            { mainItem: "COVID-19 Vaccine Transportation" },
            { mainItem: "& Much More" },
            { mainItem: "On Time And Safe", subItems: ["Available 24/7"] },
          ]}
        />


          {/* Contact Section */}
          <CardSection
  backgroundImage={abstract} // Background image for the section
  heading="Contact Us"
  content="For inquiries or to schedule a ride, please contact us at (214)702-3232 or email us at dispatch@royalcaretrans.com. We look forward to serving you!"
  buttonText="Contact Us"
  buttonLink="/contact-us" // This will open the default mail client
/>

        </div>
   
    </section>
  );
};

export default AboutUs;
