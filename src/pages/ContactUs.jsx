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

    // EmailJS integration
    emailjs.send(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formData, 
      'YOUR_USER_ID'
    ).then((response) => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, (err) => {
      setIsSubmitting(false);
      setError("Something went wrong. Please try again later.");
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’re here to help! If you have any questions, need assistance, or want to learn more about our services, please fill out the form below or reach out using the contact information.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
        <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-lg text-gray-600">+1 123 456 7890</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-lg text-gray-600">contact@royalcaretransport.com</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-lg text-gray-600">123 Main St, Katy, TX 77450</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Working Hours</h3>
          <p className="text-lg text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto">
        {isSubmitted ? (
          <p className="text-center text-green-600 text-lg font-semibold mb-6">Your message has been sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg">
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className={`px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUsPage;
