import { useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to handle mouse and click events
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center ">
      <div className='md:mx-1 mx-6'>
        <h1 className="text-6xl font-bold text-orange-600">404</h1>
        <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
        <p className="mt-2">It looks like the page you're looking for doesn't exist.</p>
        <p className="mt-4">If you need any assistance, feel free to <a href="/contact-us" className="text-orange-600 hover:underline">contact us</a>.</p>

        <p className="mt-2">Here are some helpful links instead:</p>
        
        <div 
          className="relative inline-block text-left mt-4" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <button 
              className="bg-orange-600 text-white px-8 py-2 rounded hover:bg-orange-700 transition duration-300"
              onClick={handleClick} // Handle click for mobile
            >
              Click Here
            </button>
          </div>

          {(isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-[140px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="/" className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100">Home</Link>
                <Link to="/about-us" className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100">About Us</Link>
                <Link to="/services" className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100">Services</Link>
                <Link to="/contact-us" className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100">Contact Us</Link>
                <Link to="/faqs" className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100">FAQs</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
