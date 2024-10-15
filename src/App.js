import './App.css';
import Header from '../src/components/Header'; // Import the Header component
import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs'; // Import the About Us component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import  ServicesPage from '../src/pages/Services'
import Footer from './components/Footer';
import TestimonialPage from '../src/pages/Testimonial';
import  SafetyCompliancePage from '../src/pages/SecurityCompliance';
import ContactUsPage from '../src/pages/ContactUs';
import RequestTripPage from '../src/pages/RequestTrip';
import FaqSection from './pages/Faqs';
import NotFound from '../src/pages/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Include Header component */}
        <Header />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
          <Route path="/services" element={< ServicesPage />} /> {/* Services route */}
          <Route path="/testimonials" element={< TestimonialPage />} />
          <Route path="/compliance" element={< SafetyCompliancePage />} />
          <Route path="/contact-us" element={< ContactUsPage />} />
           <Route path="/request-trip" element={< RequestTripPage />} />
           <Route path="/faqs" element={< FaqSection />} />
           <Route path="*" element={<NotFound />} /> {/* Catch-all route */}

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
