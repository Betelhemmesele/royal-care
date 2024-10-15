import { FaTwitter, FaInstagram, FaLinkedin, FaGooglePlus ,FaFacebookF} from 'react-icons/fa';
import { useEffect } from 'react';

const Footer = () => {
  // Load Facebook SDK
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'YOUR_APP_ID', // Replace with your Facebook app ID
        xfbml: true,
        version: 'v12.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="container mx-auto max-w-9xl px-4 md:px-1">
        <div className="flex flex-col md:flex-row justify-between md:space-x-2 lg:space-x-12">
          {/* Brand Description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Royal Care Transportation</h2>
            <p className="text-white mb-4">
              We pride ourselves on offering a reliable, caring, and comfortable transportation service that feels like family. Whether it's a doctor's appointment or a family event, let us take the journey with you.
            </p>
            <p className="italic text-gray-300">"Your comfort is our top priority, and every mile is taken with care."</p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-orange-600 transition transform hover:scale-110 duration-200 inline-block">Home</a></li>
              <li><a href="/about-us" className="hover:text-orange-600 transition transform hover:scale-110 duration-200 inline-block">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-600 transition transform hover:scale-110 duration-200 inline-block">Services</a></li>
              <li><a href="/testimonials" className="hover:text-orange-600 transition transform hover:scale-110 duration-200 inline-block">Testimonials</a></li>
              <li><a href="/contact-us" className="hover:text-orange-600 transition transform hover:scale-110 duration-200 inline-block">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li><span className="font-semibold">Phone:</span> (214) 302-3232</li>
              <li><span className="font-semibold">Email:</span> Support@royalcaretransportation.com</li>
              <li><span className="font-semibold">Address:</span> 1234 Care St, Compassion City, USA</li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 lg:space-x-6 md:space-x-3">
            <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://royalcaretrasportation.com`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Facebook"
        className="fb-share-button"
      >
        <FaFacebookF className="text-3xl md:text-2xl lg:text-3xl hover:text-orange-400 transition transform hover:scale-110 duration-200" />
      </a>

      <a href="https://twitter.com/share" className="twitter-share-button" 
         data-url="https://royalcaretrasportation.com" 
         data-text="Check out Royal Care Transportation!" 
         data-via="YourTwitterHandle" 
         data-hashtags="Transportation,MedicalCare">
        <FaTwitter className="text-3xl md:text-2xl lg:text-3xl hover:text-orange-400 transition transform hover:scale-110 duration-200" aria-label="Tweet" />
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
                <FaInstagram className="text-3xl md:text-2xl lg:text-3xl hover:text-orange-400 transition transform hover:scale-110 duration-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn">
                <FaLinkedin className="text-3xl md:text-2xl lg:text-3xl hover:text-orange-400 transition transform hover:scale-110 duration-200" />
              </a>
              <a href="https://google.com/business" target="_blank" rel="noreferrer" aria-label="Find us on Google Business">
                <FaGooglePlus className="text-3xl md:text-2xl lg:text-3xl hover:text-orange-400 transition transform hover:scale-110 duration-200" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="mt-12 text-center mb-14 lg:mb-2 text-white">
          &copy; {new Date().getFullYear()} Royal Care Transportation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
