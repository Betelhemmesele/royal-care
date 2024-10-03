
import { useEffect,useState } from 'react';
import { FaUserTie,FaCheckCircle, FaCarSide, FaClock, FaDollarSign, FaShieldAlt, FaHandsHelping,FaHeart } from 'react-icons/fa';

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
      backgroundImage: `url('https://img.freepik.com/free-photo/realistic-scene-with-elderly-care-senior-people_23-2151231448.jpg')`,
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
  <li>Reliable and On-Time</li>
</ul>

          {/* Buttons */}
          <div className="md:mt-4 flex flex-col sm:flex-row sm:justify-start">
            <button className="w-auto bg-orange-900 text-white py-3  px-2 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200">
              Contact Us
            </button>
            <button className="mt-4 sm:mt-0 sm:ml-2 w-auto bg-orange-900 text-white py-3 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200">
              Book a Voyage
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
<section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-40">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-81"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/003/435/330/non_2x/abstract-orange-background-free-vector.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 md:px-2 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Why Choose Royal Care Transportation?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Icon 1 */}
          <div className="flex flex-col items-center">
            <FaUserTie style={{ color: '#FFFFFF' }} className="text-7xl text-brown-700 mb-4" /> {/* Professional Icon */}
            <h3 className="text-xl font-semibold text-white">Professional Drivers</h3>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <FaCarSide style={{ color: '#FFFFFF' }} className="text-7xl text-brown-700 mb-4" /> {/* Car/Vehicle Icon */}
            <h3 className="text-xl font-semibold text-white">Comfortable Vehicles</h3>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <FaClock style={{ color: '#FFFFFF' }} className="text-7xl text-brown-700 mb-4" /> {/* Clock Icon */}
            <h3 className="text-xl font-semibold text-white">On-Time Service</h3>
          </div>

          {/* Icon 4 */}
          <div className="flex flex-col items-center">
            <FaHeart style={{ color: '#FFFFFF' }} className="text-7xl text-brown-700 mb-4" /> {/* Heart Icon */}
            <h3 className="text-xl font-semibold text-white">Personalized Care</h3>
          </div>
          <div className="flex flex-col items-center">
    <FaDollarSign style={{ color: '#FFFFFF' }} className="text-7xl mb-4" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">Affordable Price</h3>
  </div>

  {/* Safety */}
  <div className="flex flex-col items-center">
    <FaShieldAlt style={{ color: '#FFFFFF' }} className="text-7xl mb-4" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">Safety First</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaHandsHelping style={{ color: '#FFFFFF' }} className="text-7xl mb-4" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">Tailored Support</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaCheckCircle style={{ color: '#FFFFFF' }} className="text-7xl mb-4" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">Reliable Service</h3>
  </div>
        </div>
      </div>
    </section>
    <section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20 bg-gray-100">
  <div className="container mx-auto max-w-6xl px-4 md:px-8">
    <div className="flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2">
        <img 
          src="https://img.freepik.com/premium-photo/smiling-elderly-couple-park_1022456-199628.jpg" 
          alt="Testimonial Image" 
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
     
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-gray-700 mb-6">
          "Royal Care Transportation has been a lifesaver for our family! My father needs regular dialysis appointments, and the team has been incredibly reliable and caring. The drivers are always on time, courteous, and assist him with getting in and out of the vehicle. We feel so much peace of mind knowing he's in good hands. Highly recommend their service to anyone in need of elderly transportation."
        </p>
        <p className="text-gray-700 mb-8 italic">- Laura G., Katy, TX</p>
        
        <a 
          href="/testimonials" // Link to the testimonial page
          className="bg-orange-900 text-white py-3 px-6 rounded-lg mt-10 hover:bg-orange-800 transition duration-200"
        >
          See Reviews
        </a>
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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience the Royal Treatment?</h2>
        <p className="text-white mb-6">
        Booking your ride with Royal Care Transportation is easy and hassle-free. Whether you need transportation for a single trip or regular scheduled services, we are here to accommodate your needs.
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
