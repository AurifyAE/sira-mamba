import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ClickHere from '../assets/click-here.svg'
import arrowDown from '../assets/arrow-down.svg'
import heroVideo from '../assets/hero-video.mp4'
import leftHero from '../assets/left-hero.png'
import rightHero from '../assets/right-hero.png'
import goldRefiningRaw from '../assets/goldRefiningraw.jpg'

export default function Hero() {
  const [isSplit, setIsSplit] = useState(false)
  const [clickHereHidden, setClickHereHidden] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate responsive initial position for left half
  const getLeftInitialX = () => {
    if (windowWidth >= 1024) return '-7%'
    if (windowWidth >= 768) return 0
    if (windowWidth >= 640) return '-3%'
    return '-10%'
  }

  // Calculate responsive initial position for right half
  const getRightInitialX = () => {
    if (windowWidth >= 1024) return '0%'
    if (windowWidth >= 768) return '0%'
    if (windowWidth >= 640) return '0%'
    return '0%'
  }

  const handleHeroClick = () => {
    if (!isSplit) {
      setClickHereHidden(true)
      setIsSplit(true)
    }
  }

  return (
    <section id="home">
      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="relative h-[50vh] md:h-screen overflow-hidden cursor-pointer"
        onClick={handleHeroClick}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left Torn Half */}
        <motion.div
          initial={{ x: getLeftInitialX() }}
          animate={{ x: isSplit ? '-100%' : getLeftInitialX() }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[67vw] sm:w-[62vw] md:w-[62vw] lg:w-auto h-auto z-20 overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
          }}
        >
          <img src={leftHero} alt="Left Hero" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Right Torn Half */}
        <motion.div
          initial={{ x: getRightInitialX() }}
          animate={{ x: isSplit ? '100%' : getRightInitialX() }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[85vw] sm:w-[78vw] md:w-[80vw] lg:w-auto h-auto z-20 overflow-hidden"
          style={{
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        >
          <img src={rightHero} alt="Right Hero" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Torn line */}
        {/* {!isSplit && (
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/40 z-30 shadow-md" />
        )} */}

        {/* Click Here Icon */}
        {!clickHereHidden && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={isSplit ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute right-1/5 bottom-1/6 md:bottom-1/4 lg:right-1/3 lg:bottom-1/3 z-30"
          >
            <img
              src={ClickHere}
              alt="Click Here"
              className="w-20 h-20 md:w-28 md:h-28 animate-spin-slow"
            />
          </motion.div>
        )}

        {/* Arrow Down appears after split */}
        {clickHereHidden && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isSplit ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bg-black/50 flex items-center pt-2 pr-[.5px] h-18 w-10 rounded-full bottom-32 left-1/2 transform -translate-x-1/2 z-30 backdrop-blur-[20px]"
          >
            <img
              src={arrowDown}
              alt="Scroll Down"
              className="w-8 h-8 md:w-10 md:h-10 animate-bounce"
            />
          </motion.div>
        )}

        {/* Hero Text */}
        <div className="relative z-30 flex items-start justify-center h-full pt-40 md:pt-65 lg:pt-70">
          <div className="text-center text-white">
            <motion.p
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: isSplit
                  ? windowWidth >= 768 && windowWidth <= 1024
                    ? '22vw'
                    : windowWidth >= 1024
                    ? '11vw'
                    : windowWidth >= 640
                    ? '15vw'
                    : '8vw'
                  : 0,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-xl md:text-3xl absolute top-33 md:top-58 lg:top-60 transform mb-8 font-['Instrument_Sans']"
            >
              Do you know how a
            </motion.p>

            <h1 className="inline-block text-3xl md:text-7xl font-bold mb-4 font-['Kaisei_Tokumin']">
              Gold Bar
            </h1>

            <motion.h1
              initial={{ marginLeft: windowWidth >= 1024 ? '7.5rem' : windowWidth >= 640 ? '4rem' : '2rem' }}
              animate={{
                marginLeft: isSplit
                  ? windowWidth <= 768
                    ? '0.5rem'
                    : '1rem'
                  : windowWidth >= 1024
                  ? '7.5rem'
                  : windowWidth >= 640
                  ? '4rem'
                  : '2rem',
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="inline-block text-3xl md:text-7xl font-bold ml-10 lg:ml-30 mb-4 font-['Kaisei_Tokumin']"
            >
              is Made?
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ---------------- SECOND SECTION ---------------- */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Paragraph */}
            <div className="space-y-6">
              <p className="text-lg font-bold font-['Kaisei_Tokumin'] text-white leading-relaxed">
                Gold Refining: From Raw Material to 99.99% Pure Bars
              </p>
              <p className="text-lg text-white leading-relaxed font-['Instrument_Sans']">
                Gold's transformation begins with raw ore or recycled precious
                metals, which undergo rigorous assaying to determine purity
                levels. Using advanced techniques such as fire assay or
                electrolytic refining, the gold is processed to achieve up to
                99.99% purity. Once refined, the molten gold is cast into molds
                or minted into bars, each stamped with its weight, purity, and a
                unique serial number for traceability. Every gold bar is then
                carefully inspected, certified, and securely packaged—ready to
                be vaulted or delivered to clients and institutions around the
                globe.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={goldRefiningRaw}
                alt="Gold Refining Process"
                className="w-full max-w-md h-auto rounded-[30px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
