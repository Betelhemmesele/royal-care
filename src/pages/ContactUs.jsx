import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Add CC email to form data
    const templateParams = {
      ...formData, // Includes name, email, message
      cc_email: 'support@royalcaretrasportation.com' // Adding CC email here
    };

    // EmailJS integration
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,  // Send updated formData including CC email
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Clear the form data
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Adjust the time as needed
    }, (err) => {
      setIsSubmitting(false);
      setError("Something went wrong. Please try again later.");
    });
    
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 mt-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center bg-gray-100 py-16 rounded-lg border-orange-900 border-x-2 mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’re here to help! If you have any questions, need assistance, or want to learn more about our services, please fill out the form below or reach out using the contact information.
        </p>
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mb-12 max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="shadow-lg p-6 border-orange-900 border-y-2 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-lg text-gray-600">+1 214 302-3232</p>
          <h3 className="text-xl pt-2 font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-lg text-gray-600">support@royalcaretrasportation.com</p>
          <h3 className="text-xl pt-2 font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-lg text-gray-600">123 Main St, Katy, TX 77450</p>
          <h3 className="text-xl pt-2 font-semibold text-gray-900 mb-2">Working Hours</h3>
          <p className="text-lg text-gray-600">24-Hours</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg border-orange-900 border-y-2 hover:shadow-xl transition-transform duration-200">
          {isSubmitted && (
            <p className="text-center text-green-600 text-lg font-semibold mb-6">
              Your message has been sent successfully!
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required 
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className={`px-6 py-2 text-white bg-orange-900 rounded-lg hover:bg-orange-800 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
