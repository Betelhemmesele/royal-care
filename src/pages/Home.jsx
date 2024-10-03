
import { useEffect,useState } from 'react';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;
      const windowScroll = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + windowScroll;
        // Adjust the condition to trigger visibility
        if (windowScroll + windowHeight > sectionTop + 100) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
  <div
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url('https://st4.depositphotos.com/2610399/41394/i/450/depositphotos_413949468-stock-photo-helping-hands-care-for-the.jpg')`,
      backgroundSize: 'cover', // Ensures the image covers the container
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    }}
  >
  <div className="absolute inset-0 bg-black  bg-opacity-30 md:bg-opacity-10"></div> {/* Dark overlay */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
      <div className="flex flex-col md:flex-row md:items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-left text-white w-full md:w-1/2 space-y-4">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Welcome to Royal Care Transportation
           
          </h1>
        
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl list-disc pl-1">
           A Compassionate & High Standard Level of Care for Your Loved One
           </p>
          {/* Subheading */}
          <ul className="text-base sm:text-lg md:text-xl lg:text-2xl list-disc pl-5">
  <li>Transportation</li>
  <li>Senior Moving Assistance</li>
  <li>Reliable and On-Time</li>
</ul>

          {/* Buttons */}
          <div className="md:mt-4 flex flex-col sm:flex-row sm:justify-start">
            <button className="w-auto bg-orange-900 text-white py-3  px-2 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200">
              Contact Us!
            </button>
            <button className="mt-4 sm:mt-0 sm:ml-2 w-auto bg-orange-900 text-white py-3 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200">
              Book a Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



      {/* Scrollable sections */}
      <div className="bg-white">
      <section className="bg-gray-100 section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
        
        {/* Image on one half */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src='https://st3.depositphotos.com/13194036/18504/i/450/depositphotos_185049012-stock-photo-care.jpg'
            alt="Royal Care Transportation"
            className="w-full h-auto rounded-full md:rounded-lg shadow-md"
          />
        </div>
        
        {/* Text content on the other half */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-4 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold md:ml-0 ml-16 text-gray-900">About Royal Care Transportation</h2>
          
          {/* Minimal text when "showMore" is false */}
          <p className="text-lg text-gray-700">
            At Royal Care Transportation, we are dedicated to providing safe, reliable, and compassionate non-emergency transportation services for seniors and individuals with special needs...
          </p>

          {/* Conditionally render more text */}
          {showMore && (
            <p className="text-lg text-gray-700">
              Our trained and caring staff are committed to offering personalized service, ensuring that every passenger feels comfortable and supported throughout their journey. Whether you need transportation to a doctor’s appointment, rehabilitation session, or simply to visit loved ones, we prioritize your safety and peace of mind.
            </p>
          )}

          {/* "See More" Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-orange-900 text-white py-2 px-6 rounded-lg hover:bg-orange-800 transition duration-200 w-max"
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20">
  <div className="container mx-auto max-w-6xl px-4 md:px-2">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Our Services</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Service Card 1 */}
      <div className="bg-gray-200 flex flex-col rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
        <img
          src="https://carro.sg/blog/wp-content/uploads/2017/06/The-MV-1-www.trucktrend.com-news-1507-mobility-ventures-updates-2016-mv-1-with-new-accessibility.jpg" // Replace with your image URL
          alt="Non-Emergency Medical Transportation"
          className="w-full h-64 object-cover rounded-t-lg" // Increased height
        />
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-2xl text-orange-900 font-semibold mb-2">Non-Emergency Medical Transportation</h3> {/* Increased font size */}
          <p className="text-gray-700 mb-4">
            Dedicated to providing safe, reliable, and compassionate transportation services for seniors and individuals with special needs.
          </p>
          <a 
            href="/services" 
            className="bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-200 mt-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Service Card 2 */}
      <div className="bg-gray-200 flex flex-col rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
        <img
          src="https://cdn.visitingangels.com/cgcimages/transportation-main.jpg" // Replace with your image URL
          alt="Comfortable and Safe Vehicles"
          className="w-full h-64 object-cover rounded-t-lg" // Increased height
        />
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-2xl text-orange-900 font-semibold mb-2">Comfortable and Safe Vehicles</h3> {/* Increased font size */}
          <p className="text-gray-700 mb-4">
            Our fleet is equipped with the latest safety features and designed for maximum comfort, ensuring easy access for mobility aids.
          </p>
          <a 
            href="/services" 
            className="bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-200 mt-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Service Card 3 */}
      <div className="bg-gray-200 flex flex-col rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
        <img
          src="https://www.shutterstock.com/image-photo/elderly-man-60c-glasses-sitting-600nw-1990042985.jpg" // Replace with your image URL
          alt="Reliable and On-Time Service"
          className="w-full h-64 object-cover rounded-t-lg" // Increased height
        />
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-2xl  text-orange-900 font-semibold mb-2">Reliable and On-Time Service</h3> {/* Increased font size */}
          <p className="text-gray-700 mb-4">
            We understand the importance of punctuality and are committed to being there when you need us.
          </p>
          <a 
            href="/services" 
            className="bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-200 mt-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Service Card 4 */}
      <div className="bg-gray-200 flex flex-col rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
        <img
          src="https://raisingchildren101.com/wp-content/uploads/2022/08/pexels-andrea-piacquadio-3768114-1.jpg" // Replace with your image URL
          alt="Personalized Care"
          className="w-full h-64 object-cover rounded-t-lg" // Increased height
        />
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-2xl text-orange-900 font-semibold mb-2">Personalized Care</h3> {/* Increased font size */}
          <p className="text-gray-700 mb-4">
            Our trained staff offers personalized service, ensuring every passenger feels comfortable and supported throughout their journey.
          </p>
          <a 
            href="/services" 
            className="bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-200 mt-auto"
          >
            Learn More
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20">
  <div className="container mx-auto max-w-6xl px-4 md:px-2">
    <div className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/003/435/330/non_2x/abstract-orange-background-free-vector.jpg')",
        }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 rounded-lg shadow-lg p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us Today</h2>
        <p className="text-white mb-6">
          Have a trip or need further information, please don't hesitate to reach out. We're here to help!
        </p>
        <a 
          href="/contact" // Link to your contact page
          className="bg-orange-950 text-white py-3 px-6 rounded-lg hover:bg-orange-900 transition duration-200"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  </div>
</section>



      </div>

      <style jsx>{`
        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;
