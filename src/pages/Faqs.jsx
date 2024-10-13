import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CardSection from '../components/Contactcard';
import abstract from '../assets/abstract.webp';
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleFaq}>
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? <AiOutlineMinus size={24} className="text-orange-900" /> : <AiOutlinePlus size={24} className="text-orange-900" />}
      </div>
      {isOpen && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
};

const FaqSection = () => {
    const faqs = [
        {
          question: 'What services do you provide?',
          answer: 'We specialize in non-emergency medical transportation (NEMT) for seniors and individuals requiring assistance. Our services include transportation to medical appointments, rehabilitation sessions, social events, and other non-emergency destinations in Katy, Texas and the surrounding areas.',
        },
        {
          question: 'How do I book a ride?',
          answer: 'Booking a ride with Royal Care Transportation is easy! You can schedule a ride by calling us at [Your Phone Number] or by visiting our online booking page [Link to Scheduling Page]. We recommend booking at least 24 hours in advance to ensure availability.',
        },
        {
          question: 'Are your drivers trained to assist passengers with mobility issues?',
          answer: 'Yes! Our drivers are thoroughly trained to assist individuals with mobility challenges. Whether you need help getting in and out of the vehicle, or require assistance with a walker or wheelchair, our team is here to ensure a safe and comfortable experience.',
        },
        {
          question: 'What kind of vehicles do you use?',
          answer: 'We use a fleet of modern, well-maintained vehicles designed for comfort and accessibility. Our vehicles are equipped to accommodate wheelchairs and other mobility aids, providing easy access and plenty of space for a smooth ride.',
        },
        {
          question: 'Do you offer wheelchair-accessible transportation?',
          answer: 'Absolutely. All of our vehicles are wheelchair accessible, with ramps or lifts, so we can accommodate passengers with varying levels of mobility. If you have specific needs, please let us know when booking so we can provide the best possible service.',
        },
        {
          question: 'How far in advance should I schedule transportation?',
          answer: 'We recommend booking your ride at least 24-48 hours in advance, especially for medical appointments. However, if you need immediate transportation, give us a call, and we will do our best to accommodate your needs.',
        },
        {
          question: 'What areas do you serve?',
          answer: 'Our primary service area is Katy, Texas, and the surrounding regions. If you\'re outside this area and need transportation, please contact us, and we’ll do our best to accommodate your request.',
        },
        {
          question: 'Can you provide transportation for long-distance trips?',
          answer: 'Yes, we do offer long-distance transportation for non-emergency medical or personal trips. Please contact us for more details and to discuss your specific needs.',
        },
        {
          question: 'Do you provide round-trip transportation?',
          answer: 'Yes, we offer both one-way and round-trip transportation services. If you need to be picked up after an appointment or event, we can schedule a return trip for you.',
        },
        {
          question: 'Is there an age limit for your services?',
          answer: 'While we primarily serve seniors and individuals requiring special assistance, there are no strict age limits for our services. If you or your loved one requires transportation assistance, feel free to reach out.',
        },
        {
          question: 'How much does your service cost?',
          answer: 'Our rates vary depending on the distance and type of service required. For a detailed quote, please contact us with your trip details, and we will provide a clear, upfront estimate.',
        },
        {
          question: 'Can someone accompany me on the trip?',
          answer: 'Yes! A caregiver, family member, or friend is welcome to accompany you at no additional charge. Please let us know at the time of booking so we can ensure enough space is available.',
        },
        {
          question: 'What are your hours of operation?',
          answer: 'We provide 24-hour emergency services and are available by appointment only for non-emergency transportation. If you need a ride at any time, don’t hesitate to reach out, and we will accommodate your needs.',
        },
        {
          question: 'What safety measures do you have in place?',
          answer: 'Your safety is our top priority. Our vehicles are sanitized regularly, and our drivers are trained in safety protocols, including assisting passengers with special needs. All drivers are also subject to background checks and ongoing training.',
        },
        {
          question: 'What if I need to cancel or reschedule my ride?',
          answer: 'We understand that plans can change. If you need to cancel or reschedule your ride, please let us know at least 24 hours in advance. This allows us to accommodate other clients and reschedule your trip accordingly.',
        }
      ];
      
  return (
    <div>
      <div className="max-w-[1140px] mx-auto mt-32 mb-2 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center bg-gray-100 py-16 rounded-lg border-orange-900 border-x-2 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to our FAQ page! Below, you’ll find answers to the most common questions about Royal Care Transportation. If you don’t see your question here, feel free to contact us directly.
      </p>
      </div>
      <div className='text-left'>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
    </div>
    <CardSection
    backgroundImage={abstract} // Background image for the section
    heading="Contact Us"
    content="For inquiries or to schedule a ride, please contact us at (214)302-3232 or email us at Support@royalcaretransportations.com. We look forward to serving you!"
    buttonText="Schedule A Ride"
    buttonLink="request-trip" // This will open the default mail client
  />
    </div>
  );
};

export default FaqSection;
