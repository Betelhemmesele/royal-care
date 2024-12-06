
import { useEffect,} from 'react';
import { FaUserTie,FaCheckCircle, FaCarSide, FaClock, FaDollarSign, FaShieldAlt,FaHeart,FaEnvelope } from 'react-icons/fa';
import CardSection from '../components/Contactcard';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/homeService';
import './HomePage.css';
import oldppl from '../assets/oldppl.webp';
import driver from '../assets/driver.webp';
import smilingeld from '../assets/smillingeld.webp';
import carnold from '../assets/carnold.webp';
import vaccine from '../assets/vaccine.webp';
import abstract from '../assets/abstract.webp';
import helpingcar from '../assets/helpingcar.webp';
const Home = () => {
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
    className="hero-section relative flex items-center justify-center min-h-screen bg-cover bg-center"
  >
  <div className="absolute inset-0 bg-black  bg-opacity-5 md:bg-opacity-5"></div> {/* Dark overlay */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
      <div className="flex flex-col md:flex-row md:items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-left text-white w-full md:w-1/2 space-y-4">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Welcome to Royal Care Transportation Dallas and Rockwell
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Handicapped transportation service for Your Loved One
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Your trusted source for <strong>elderly transportation</strong> and <strong>non-emergency medical transport</strong> in <strong>Dallas and Rockwell</strong>.
              </p>
              {/* Subheading */}
              <ul className="text-base sm:text-lg md:text-xl lg:text-2xl list-disc pl-5">
                <li>Reliable</li>
                <li>On-time</li>
                <li>24-Hour Service</li>
              </ul>
          {/* Buttons */}
          <div className="md:mt-4 flex flex-col sm:flex-row sm:justify-start">
  <Link to="/contact-us">
    <button className="w-48 bg-orange-900 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50">
    Contact Us
    </button>
  </Link>
  <Link to="/request-trip">
    <button className="mt-4 sm:mt-0 sm:ml-2 w-48 bg-orange-900 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50">
       Book Your Trip
    </button>
  </Link>
  <Link 
  to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com"
  target="_blank"
  rel="noreferrer"
>
  <button className="mt-4 sm:mt-0 sm:ml-2 w-48 bg-orange-900 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-orange-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 flex items-center justify-center gap-2">
    <span>Zoho Mail</span>
    <FaEnvelope className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl" />
  </button>
</Link>

 


</div>
        </div>
      </div>
    </div>
  </div>



      {/* Scrollable sections */}
      <div className="bg-white">
<section className="bg-gray-100 py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
    
    {/* Image on one half */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src={oldppl}//oldppl
        alt="Royal Care Transportation"
        className="w-full h-auto rounded-full md:rounded-lg shadow-md"
      />
    </div>
    
    {/* Text content on the other half */}
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Royal Care Transportation</h2>
      
      {/* Shorter text to show initially */}
      <p className="text-lg text-gray-700">
        At Royal Care Transportation, we are dedicated to providing safe, reliable, and compassionate non-emergency transportation services for seniors and individuals with special needs.
      </p>

      {/* Button that navigates to the 'About Us' page */}
      <a 
        href="/about-us" 
        className="bg-orange-900 text-white py-2 px-6 rounded-lg hover:bg-orange-800 transition duration-200"
      >
        Learn about Our Company
      </a>
    </div>
  </div>
</section>



<section className="bg-gray-100 section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20" aria-labelledby="services-header">
  <div className="container mx-auto max-w-6xl px-4 md:px-2">
    <h2 id="services-header" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Service Cards */}
      <article className="service-card">
        <ServiceCard 
          image={helpingcar}
          title="Senior Living Transportation"
          description="Providing safe and reliable transportation for seniors to and from their senior living facilities."
          link="/services"
          alt="Transportation for seniors to living facilities"
        />
      </article>

      <article className="service-card">
        <ServiceCard 
          image={driver}//driver.webp
          title="Doctor Appointments"
          description="Ensure timely arrival to your medical appointments with our reliable transportation service."
          link="/services"
          alt="Transportation for doctor appointments"
        />
      </article>

      <article className="service-card">
        <ServiceCard 
          image={carnold}//driverold
          title="Non-Emergency Transportation"
          description="Specialized services for wheelchair and stretcher transportation, ensuring comfort and safety."
          link="/services"
          alt="Non-emergency transportation for seniors"
        />
      </article>

      <article className="service-card">
        <ServiceCard 
          image={vaccine}//vaccine
          title="COVID-19 Vaccine Transportation"
          description="Providing safe and reliable transportation for individuals receiving their COVID-19 vaccines."
          link="/services"
          alt="Transportation for COVID-19 vaccinations"
        />
      </article>
      
    </div>
  </div>
</section>

<section className="section background-image-section section1 py-40">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        
      ></div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 md:px-2 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Why Choose Royal Care Transportation?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Icon 1 */}
          <div className="flex flex-col items-center">
            <FaUserTie className="icon" /> {/* Professional Icon */}
            <h3 className="text-xl font-semibold text-white">Professional Drivers</h3>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center">
            <FaCarSide className="icon" /> {/* Car/Vehicle Icon */}
            <h3 className="text-xl font-semibold text-white">Comfortable Vehicles</h3>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <FaClock className="icon" /> {/* Clock Icon */}
            <h3 className="text-xl font-semibold text-white">On-Time Service</h3>
          </div>

          {/* Icon 4 */}
          <div className="flex flex-col items-center">
            <FaHeart className="icon" /> {/* Heart Icon */}
            <h3 className="text-xl font-semibold text-white">Personalized Care</h3>
          </div>
          <div className="flex flex-col items-center">
    <FaDollarSign className="icon" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">Affordable Price</h3>
  </div>

  {/* Safety */}
  <div className="flex flex-col items-center">
    <FaShieldAlt className="icon" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">Safety First</h3>
  </div>
  <div className="flex flex-col items-center">
    <AiOutlineClockCircle className="icon" /> {/* White color */}
    <h3 className="text-xl font-semibold text-white">24-Hour</h3>
  </div>
  <div className="flex flex-col items-center">
    <FaCheckCircle className="icon" /> {/* White color */}
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
          src={smilingeld} 
          alt="Testimonial" 
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


<CardSection
  backgroundImage={abstract}
  heading="Ready to Experience the Royal Treatment?"
  content="Booking your ride with Royal Care Transportation is easy and hassle-free. Whether you need transportation for a single trip or regular scheduled services, we are here to accommodate your needs."
  buttonText="Schedule A Ride"
  buttonLink="/request-trip"
/>




      </div>

    </div>
  );
};

export default Home;
