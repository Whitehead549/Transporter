import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MakePayment from './pages/MakePayment';
import Track from './pages/Track';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Codes from './Admin/Codes';
import Admin from './Admin/Admin';
import Contact from './Admin/Contact';
import Quote from './pages/Quote';
import WhatsAppButton from './Track/WhatsAppButton';
import Whatapp from './Admin/Whatapp';
import GoogleTranslate from "./pages/GoogleTranslate";

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Google Translate at the top */}
          <div className=' bg-white'><GoogleTranslate /></div>
          
          
          {/* Navbar below Google Translate */}
          <Navbar />
          
          {/* Main content */}
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/payment" element={<MakePayment />} />
              <Route path="/track" element={<Track />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termsofservice" element={<TermsOfService />} />
              <Route path="/codes" element={<Codes />} />
              <Route path="/whatapp" element={<Whatapp />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />

              {/* Admin Route */}
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>

      {/* WhatsApp Chat Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;