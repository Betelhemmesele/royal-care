// // Home.js
// import React, { useState, useEffect } from "react";
// import image from '../assets/royal.jpeg'
// const Home = () => {
//     const [scrolling, setScrolling] = useState(false);

//       const handleScroll = () => {
//         // Change scrolling state based on scroll position
//         setScrolling(window.scrollY > 100);
//       };
    
//       useEffect(() => {
//         // Add scroll event listener
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//           // Cleanup on unmount
//           window.removeEventListener("scroll", handleScroll);
//         };
//       }, []);
    
//       return (
//         <div className="min-h-screen bg-gradient-to-b from-orange-900 to-orange-700 flex flex-col items-center justify-center relative">
//           {/* Vector Background */}
//           <div>
//             {/* First Layer */}
//             <div
//               className="absolute filter blur-3xl"
//               style={{
//                 position: "absolute",
//                 width: "1673.07px",
//                 height: "200px",
//                 left: "56.73px",
//                 top: "527px",
//                 background: "rgba(166, 133, 109, 0.3)",
//                 borderRadius: "829.604px",
//               }}
//             ></div>
    
//             {/* Second Layer with smoother transition */}
//             <div
//               className="absolute filter blur-3xl transition-all duration-500"
//               style={{
//                 width: "1673px",
//                 height: scrolling ? "400px" : "258px", // Increase height based on scrolling
//                 left: "78.71px",
//                 top: "710.01px",
//                 background:
//                   "linear-gradient(to bottom right, rgba(255, 255, 255, 1) 0%, rgba(240, 120, 50, 1) 50%, rgba(255, 255, 255, 1) 100%)", // Adjusted gradient stops for smooth transition
//               }}
//             ></div>
//           </div>
    
//           {/* Centered Logo, Text, and Button Section */}
//           <div className="flex flex-col items-center">
//             <img
//               src={image}
//               alt="Description"
//               style={{
//                 width: scrolling ? "170px" : "840.64px", // Shrink size based on scrolling
//                 height: scrolling ? "36.33px" : "auto", // Maintain aspect ratio
//                 position: "absolute",
//                 top: scrolling ? "310px" : "394px", // Move up on scroll
//                 transition: "all 0.3s ease", // Smooth transition
//                 opacity: scrolling ? "1" : "1", // Keep opacity constant for now
//               }}
//             />
    
//             {/* Text and Button Section */}
//             <div
//               className={`flex flex-col items-center transition-all duration-500 ${
//                 scrolling ? "opacity-0" : "opacity-100"
//               }`}
//               style={{
//                 width: "668px",
//                 position: "absolute",
//                 top: scrolling ? "403.15px" : "450px", // Move down slightly
//                 textAlign: "center",
//                 opacity: scrolling ? "1" : "0", // Fade out when scrolling
//               }}
//             >
//               <h2
//                 className="text-white mb-2"
//                 style={{
//                   fontFamily: "SF Pro Display",
//                   fontSize: "60px",
//                   fontWeight: "400",
//                   lineHeight: "88px",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 Welcome to Royal Care Transports non emergency medical transportation
//               </h2>
//               <div className="flex flex-wrap justify-center space-x-4">
//           </div>
//               <button
//                 className="bg-white text-black py-2 px-4 rounded-full shadow-lg"
//                 style={{
//                   width: "167px",
//                   height: "52px",
//                   borderRadius: "52px", // Rounded corners
//                   opacity: scrolling ? "1" : "0", // Fade out when scrolling
//                 }}
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
    
//           {/* Scroll down indicator */}
//           <div
//             className="absolute flex flex-col items-center"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               position: "absolute",
//               width: "89px",
//               height: "66px",
//               left: "calc(50% - 89px / 2)",
//               bottom: "40px", // Position 40px from the bottom
//               gap: "8px",
//             }}
//           >
//             <div className="border border-white w-5 h-10 rounded-full flex items-center justify-center">
//               <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
//             </div>
//             <div className="text-white">Scroll down</div>
//           </div>
//         </div>
//       );
// };

// export default Home;
// Home.js
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;
      const windowScroll = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + windowScroll;
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
    <div className="relative h-screen">
      {/* Background image with a blurry layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.made-in-china.com/2f0j00FEGoPNpIgWkH/Slift-R-PRO-W-Swivel-Car-Seat-with-Wheelchair-for-Disabled-and-Elderly.jpg')`, // Replace with your image URL
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">Welcome to Royal Care Transportation</h1>
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
    </div>
  );
};

export default Home;