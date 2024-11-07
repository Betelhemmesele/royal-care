import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt } from 'react-icons/fa';

const RequestTripPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passengersName:'',
    depaddress: '',
    desaddress:'',
    pickupDate: '',
    pickupTime: '',
    tripType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      passengersName: formData.passengersName,
      depaddress: formData.depaddress, // Make sure this matches {{depaddress}}
      desaddress: formData.desaddress, // Make sure this matches {{desaddress}}
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      tripType: formData.tripType,
      message: formData.message,
      cc_email: 'support@royalcaretrasportation.com',
    };
    console.log("Email Params:", emailParams);
    // Send the email using EmailJS
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,    // Your EmailJS Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID1,   // Your EmailJS Template ID
        emailParams,                                 // Form data as parameters
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY     // Your EmailJS Public Key
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          // Clear the form data
          setFormData({
            name: '',
            email: '',
            phone: '',
            passengersName:'',
            depaddress: '',
            desaddress: '',
            pickupDate: '',
            pickupTime: '',
            tripType: '',
            message: ''
          });

          // Hide success message after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (err) => {
          setIsSubmitting(false);
          setError('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className="flex items-center justify-center h-full py-24 bg-gray-100">
      <div className="flex flex-col items-center  border-orange-900 mt-3 border-x-4 bg-white p-8 pt-14 shadow-lg rounded-lg max-w-7xl w-full">
        {/* Quote */}
        <div className="text-center bg-gray-100 py-8 rounded-lg border-orange-900 border-x-2 mb-8 w-full">
          <blockquote className="italic text-gray-500 text-center mb-4">
            "Your journey is our priority, let us take care of you."
          </blockquote>
        </div>

        {/* Phone Info Section */}
        <div className="flex items-center mb-6">
          <FaPhoneAlt className="h-16 w-16 text-orange-700 mr-6" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Do you want transportation?</h1>
            <p className="mt-2 text-lg text-gray-600">
              Call us at:
              <a href="tel:+(214)702-3232" className="text-orange-700 font-bold ml-2">
                +(214)702-3232
              </a>
            </p>
            <p className="mt-2 text-lg text-gray-600">
              Or fill out the form below.
            </p>
          </div>
        </div>

        {/* Request Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
    <input
        id="name"
        name="name"  // This must match the key in emailParams
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
</div>


            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            {/* Full Name */}
            <div>
              <label htmlFor="passengersName" className="block text-gray-700 font-bold mb-2">Passengers Name</label>
              <input
                id="passengersName"
                name="passengersName"
                type="text"
                value={formData.passengersName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {/* Full Address */}
            <div>
              <label htmlFor="depaddress" className="block text-gray-700 font-bold mb-2">Departure Address</label>
              <input
                id="depaddress"
                name="depaddress"
                type="text"
                value={formData.depaddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="desaddress" className="block text-gray-700 font-bold mb-2">Destination Address</label>
              <input
                id="desaddress"
                name="desaddress"
                type="text"
                value={formData.desaddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Pick-up Date */}
            <div>
              <label htmlFor="pickupDate" className="block text-gray-700 font-bold mb-2">Pick-up Date</label>
              <input
                id="pickupDate"
                name="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Pick-up Time */}
            <div>
              <label htmlFor="pickupTime" className="block text-gray-700 font-bold mb-2">Pick-up Time</label>
              <input
                id="pickupTime"
                name="pickupTime"
                type="time"
                value={formData.pickupTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Trip Type */}
            <div>
              <label htmlFor="tripType" className="block text-gray-700 font-bold mb-2">Choose Your Transportation Service</label>
              <select
                id="tripType"
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="select here">Select here</option>
                <option value="Senior Living Transportation">Senior Living Transportation</option>
  <option value="Dr appointments">Dr appointments</option>
  <option value="Non-Emergency Transportation">Non-Emergency Transportation</option>
  <option value="Wheelchair Transportation">Wheelchair Transportation</option>
  <option value="Airport Transportation">Airport Transportation</option>
  <option value="COVID-19 Vaccine Transportation">COVID-19 Vaccine Transportation</option>
  <option value="Wheelchair Stretcher">Wheelchair Stretcher</option>
  <option value="Stretcher">Stretcher</option>
              </select>
            </div>

            {/* Message */}
            <div className="lg:col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 text-white bg-orange-900 rounded-lg hover:bg-orange-800 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Request Trip'}
            </button>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <p className="text-green-600 mt-4 text-center">
              Your trip request has been submitted successfully!
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-600 mt-4 text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RequestTripPage;
