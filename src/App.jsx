import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Products from './components/Products'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-black">
      <Banner />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Products />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
