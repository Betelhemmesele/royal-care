import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const RequestTripPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg max-w-6xl">
        {/* Quote */}
        <div className="text-center bg-gray-100 py-16 rounded-lg border-orange-900 border-x-2 mb-12">
        <blockquote className="italic text-gray-500 text-center mb-6">
          "Your journey is our priority, let us take care of you."
        </blockquote>
        </div>

        {/* Phone Info Section */}
        <div className="flex items-center mb-6">
          {/* Phone Icon - Left Side */}
          <FaPhoneAlt className="h-16 w-16 text-orange-700 mr-6" />

          {/* Text - Right Side */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Request a Trip</h2>
            <p className="mt-2 text-lg text-gray-600">
              Call us at: 
              <a href="tel:+11234567890" className="text-orange-700 font-bold ml-2">
                +1 123 456 7890
              </a>
            </p>
          </div>
        </div>

        {/* Additional Message */}
        <p className="text-gray-600 text-center">
          We are available 24/7 to assist you with your transportation needs. Whether it's a medical appointment or any other trip, we ensure a comfortable and safe experience.
        </p>
      </div>
    </div>
  );
};

export default RequestTripPage;
