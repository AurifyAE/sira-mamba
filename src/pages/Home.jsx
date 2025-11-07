import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Highlights from '../components/Highlights'
import Products from '../components/Products'
import CallToAction from '../components/CallToAction'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Highlights />
        <Products />
        <Gallery />
        <CallToAction />
    </div>
  )
}

export default Home