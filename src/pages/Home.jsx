
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
    <div className="relative mt-60">
 <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-[200px] md:h-[500px]">
      <div
        className="relative flex-shrink-0 w-full md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.made-in-china.com/226f3j00oCvVAUknwWqB/Slift-R-PRO-W-Swivel-Car-Seat-with-Wheelchair-for-Disabled-and-Elderly.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Welcome to Royal Care Transportation</h1>
        </div>
      </div>
      <div className="flex bg-orange-200 flex-col justify-center p-6 md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Your Comfort is Our Priority</h2>
        <p className="text-gray-700 mb-6">
          We provide safe and comfortable transportation services for the disabled and elderly. 
          Our professional staff ensures a smooth experience from start to finish.
        </p>
        <button className="bg-orange-800 text-white py-2 px-4  mx-36 rounded hover:bg-blue-600 transition duration-200">
          Request A Trip
        </button>
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
