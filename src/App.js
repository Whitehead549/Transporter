import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// Wrapper to choose between BrowserRouter and HashRouter
const RouterWrapper = ({ children }) => {
  // Get current path
  const path = window.location.pathname;
  
  // Use BrowserRouter only for the Home page
  if (path === '/') {
    return <BrowserRouter>{children}</BrowserRouter>;
  } else {
    return <HashRouter>{children}</HashRouter>;
  }
};

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <RouterWrapper>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Home uses BrowserRouter */}
              <Route path="/" element={<Home />} />

              {/* Other pages use HashRouter */}
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
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </RouterWrapper>
      <WhatsAppButton />
    </div>
  );
}

export default App;
