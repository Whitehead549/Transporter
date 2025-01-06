// src/App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MakePayment from './pages/MakePayment';
import Track from './pages/Track';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="overflow-x-hidden">
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/payment" element={<MakePayment />} />
            <Route path="/track" element={<Track />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Admin Route */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;