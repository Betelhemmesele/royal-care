import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { FaQuoteLeft } from 'react-icons/fa';
import './TestimonialPage.css'; 
import CardSection from "../components/Contactcard";
const testimonials = [
  {
    text: "Royal Care Transportation has been a lifesaver for our family! My father needs regular dialysis appointments, and the team has been incredibly reliable and caring. The drivers are always on time, courteous, and assist him with getting in and out of the vehicle. We feel so much peace of mind knowing he's in good hands. Highly recommend their service to anyone in need of elderly transportation.",
    author: "Laura G., Katy, TX"
  },
  {
    text: "I needed wheelchair-accessible transportation for my mother after her surgery, and Royal Care Transportation exceeded our expectations. The vehicle was clean, comfortable, and equipped with everything she needed. The driver was very patient and made sure she was comfortable for the entire trip. I’m so grateful for their wonderful service!",
    author: "Michael S., Katy, TX"
  },
  {
    text: "From the first phone call to the ride itself, the team at Royal Care Transportation was fantastic. They accommodated our schedule changes without hesitation, and the driver was extremely friendly and professional. My elderly aunt was nervous about the ride, but the driver made her feel at ease. Thank you for such an excellent experience!",
    author: "Sarah L., Katy, TX"
  },
  {
    text: "Royal Care Transportation has been a game-changer for us! My mother requires frequent non-emergency medical transportation, and we struggled to find a service that we trusted. With Royal Care, every ride has been smooth and stress-free. Their drivers are respectful, kind, and make sure she gets to her appointments safely. I cannot recommend them enough.",
    author: "James M., Houston, TX"
  },
  {
    text: "I’ve used Royal Care Transportation several times for my elderly father’s medical appointments, and they have been consistently reliable. They are always on time, and the drivers go above and beyond to assist him. The peace of mind this service provides is invaluable.",
    author: "Karen W., Katy, TX"
  },
  {
    text: "We had an emergency situation and needed transportation at the last minute for my mother’s urgent medical appointment. Royal Care Transportation responded immediately and sent a driver who arrived quickly. The service was prompt, professional, and supportive during a stressful time. Thank you so much for your help!",
    author: "Eric T., Katy, TX"
  },
  {
    text: "I have tried a few transportation services for my elderly father, but none compare to Royal Care. The service is top-notch, and the rates are reasonable. They provide a trustworthy, compassionate service, and I know my father is always in good hands.",
    author: "Mary J., Katy, TX"
  },
  {
    text: "We’ve used Royal Care Transportation multiple times for various appointments, and each time the experience has been great. The drivers are polite, friendly, and patient, and the vehicles are always clean and comfortable. I wouldn’t hesitate to recommend them to anyone needing senior transportation.",
    author: "David R., Katy, TX"
  },
  {
    text: "Royal Care Transportation went above and beyond to ensure my grandmother made it to her doctor's appointments safely and on time. Their attention to detail, professionalism, and kindness made all the difference. I can’t thank them enough for the service they provide.",
    author: "Tina K., Katy, TX"
  }
];

const TestimonialPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className="max-w-7xl mt-32 mb-0 mx-auto py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl border-orange-700 border-x-4 bg-gray-200 my-2 mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">What Our Clients Say</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 text-center">
            <FaQuoteLeft className="mx-auto text-6xl text-orange-700 mb-4" />
            <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
            <p className="text-md font-semibold text-gray-900">— {testimonial.author}</p>
          </div>
        ))}
      </Slider>
      <CardSection
  backgroundImage="https://static.vecteezy.com/system/resources/previews/003/435/330/non_2x/abstract-orange-background-free-vector.jpg" // Background image for the section
  heading="Send Us Review"
  content="If you have anything to tell the world about us , you are in the right place."
  buttonText="click Here"
  buttonLink="/contact-us" // This will open the default mail client
/>
    </div>
  );
};

export default TestimonialPage;
