import React from 'react';

const ContactUsPage = () => {
  const handleGmailRedirect = () => {
    window.location.href = 'mailto:contact@royalcaretransport.com';
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 mt-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center bg-gray-100 py-16 rounded-lg border-orange-900 border-x-2 mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’re here to help! If you have any questions, need assistance, or want to learn more about our services, please reach out using the contact information below or by clicking the button to send us an email.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mb-12 max-w-7xl mx-auto">
        <div className="shadow-lg p-6 border-orange-900 border-y-2 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-lg text-gray-600">+1 123 456 7890</p>
          <h3 className="text-xl pt-2 font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-lg text-gray-600">contact@royalcaretransport.com</p>
          <h3 className="text-xl pt-2 font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-lg text-gray-600">123 Main St, Katy, TX 77450</p>
          <h3 className="text-xl pt-2 font-semibold text-gray-900 mb-2">Working Hours</h3>
          <p className="text-lg text-gray-600">24-Hours per week</p>
        </div>

        {/* Redirect to Gmail Button */}
        <div className="bg-white shadow-lg p-8 rounded-lg border-orange-900 border-y-2 hover:shadow-xl transition-transform duration-200">
          <div className="text-center">
            <button 
              onClick={handleGmailRedirect}
              className="px-6 py-2 text-white bg-orange-900 rounded-lg hover:bg-orange-800 transition-colors">
              Send Message via Gmail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
