
import { useEffect } from 'react';

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
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url('https://www.braunability.eu/contentassets/b1fcc1ee862546798adee8412ccad9ad/transfer_wheelchair770x394.jpg')`,
      backgroundSize: 'cover', // Ensures the image covers the container
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Dark overlay */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-left text-white w-full md:w-1/2 space-y-4">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            A Compassionate & High Standard Level of Care for Your Loved One
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Air & Ground Transportation • Senior Moving Assistance • Medical Equipment
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row sm:mx-16 sm:justify-start">
            <button className="w-auto bg-orange-900 text-white py-3 px-10 rounded-3xl hover:bg-orange-800 transition duration-200">
              Contact Us!
            </button>
            <button className="mt-4 sm:mt-0 sm:ml-2 w-auto bg-orange-900 text-white py-3 px-10 rounded-3xl hover:bg-orange-800 transition duration-200">
              Book a Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



      {/* Scrollable sections */}
      <div className="bg-white">
        <section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20">
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mt-6">
            At Royal Care Transportation, we are dedicated to providing safe, reliable, and compassionate non-emergency transportation services for seniors and individuals with special needs...
          </p>
        </section>

        <section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20">
          <h2 className="text-4xl font-bold text-center">Our Services</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mt-6">
            We offer professional transportation services for medical appointments, rehabilitation sessions, and social events...
          </p>
        </section>

        <section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-center mt-6">
            If you have any questions, feel free to reach out to us via phone or email...
          </p>
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
