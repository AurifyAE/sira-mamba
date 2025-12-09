import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { SEO } from './SEO'

// Import pages
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Accreditations from './pages/Accreditations'
import Gallery from './pages/Gallery'
import Sustainability from './pages/Sustainability'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="bg-[#282626]">
        {/* <Banner /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
