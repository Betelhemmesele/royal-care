import React from 'react';
import Card from '../components/ComplianceCard'; // assuming Card is in the same folder
import CardSection from '../components/Contactcard';
import abstract from '../assets/abstract.webp';
const safetyData = [
    {
      title: "Certified and Trained Drivers",
      description: "All of our drivers undergo comprehensive training programs, including:",
      items: [
        { label: "Safety Protocols", content: "Defensive driving techniques and emergency response procedures." },
        { label: "Patient Care", content: "Assisting seniors and individuals with mobility challenges safely and respectfully." },
        { label: "Background Checks", content: "Thorough screenings to ensure high standards of safety and professionalism." },
      ]
    },
    {
      title: "Regular Vehicle Maintenance",
      description: "Our fleet is meticulously maintained to ensure optimal performance and safety:",
      items: [
        { label: "Routine Inspections", content: "Regular vehicle inspections and maintenance checks." },
        { label: "Safety Equipment", content: "Seat belts, first aid kits, and accessible equipment for mobility aids." },
      ]
    },
    {
      title: "Compliance with Regulations",
      description: "Royal Care Transportation adheres to all local, state, and federal regulations:",
      items: [
        { label: "Licensing", content: "Maintaining necessary licenses and permits in Texas and Katy areas." },
        { label: "Insurance Coverage", content: "Full insurance to ensure peace of mind for passengers and families." },
      ]
    },
    {
      title: "Commitment to Accessibility",
      description: "We are dedicated to providing accessible transportation solutions for all our clients:",
      items: [
        { label: "Wheelchair-Accessible Vehicles", content: "Specially equipped vehicles for passengers with wheelchairs or mobility devices." },
        { label: "Individualized Assistance", content: "Drivers trained to assist and ensure passengers are secure and comfortable." }
      ]
    },
    {
      title: "Emergency Preparedness",
      description: "In the event of an emergency, our team is prepared to respond effectively:",
      items: [
        { label: "Emergency Plans", content: "Protocols for various emergencies including vehicle breakdowns and medical issues." },
        { label: "Communication Systems", content: "Drivers are equipped with devices to stay in contact with the dispatch team." }
      ]
    },
    {
      title: "Passenger Education",
      description: "We believe that informed passengers are safer passengers:",
      items: [
        { label: "Safety Briefings", content: "Drivers provide briefings on safety procedures before each trip." },
        { label: "Feedback Mechanism", content: "Encouraging feedback from passengers to improve our services and safety." }
      ]
    }
  ];
  
const SafetyCompliancePage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-2 px-4 mt-28 sm:px-6 lg:px-8">
      <div className="text-center p-8 bg-gray-100 rounded-lg border-orange-700 border-x-2 mb-12">
        <h1 className="text-4xl font-extrabold text-orange-900">Safety and Compliance</h1>
        <p className="text-lg mt-4 text-black">
          At Royal Care Transportation, the safety and well-being of our passengers are our top priorities. We are committed to providing reliable, secure, and comfortable transportation services for seniors and individuals with special needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {safetyData.map((data, index) => (
          <Card 
            key={index}
            title={data.title}
            description={data.description}
            items={data.items}
          />
        ))}
      </div>

      {/* Closing Statement */}
      <div className="mt-12 text-center">
        <p className="text-lg text-orange-800">
          At Royal Care Transportation, we take pride in our commitment to safety and compliance, ensuring that every ride is a secure and comfortable experience. Thank you for choosing us for your transportation needs!
        </p>
      </div>
      <CardSection
  backgroundImage={abstract} // Background image for the section
  heading="Contact Us"
  content="For inquiries or to schedule a ride, please contact us at (214)702-3232 or email us at support@royalcaretrasportation.com. We look forward to serving you!"
  buttonText="Schedule A Ride"
  buttonLink="request-trip" // This will open the default mail client
/>
    </div>
  );
};

export default SafetyCompliancePage;
