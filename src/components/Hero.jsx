import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ClickHere from '../assets/click-here.svg'
import heroVideo from '../assets/hero-video.mp4'
import leftHero from '../assets/left-hero.png'
import rightHero from '../assets/right-hero.png'

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

  // Calculate responsive positions for left half
  const getLeftInitialX = () => {
    if (windowWidth >= 1536) return '-5%'  // 2xl
    if (windowWidth >= 1280) return '0%'  // xl
    if (windowWidth >= 1024) return '-6%'  // lg
    if (windowWidth >= 768) return '-2%'   // md
    if (windowWidth >= 640) return '-5%'   // sm
    return '-12%'                          // mobile
  }

  // Calculate responsive positions for right half
  const getRightInitialX = () => {
    if (windowWidth >= 1536) return '3%'   // 2xl
    if (windowWidth >= 1280) return '0%'   // xl
    if (windowWidth >= 1024) return '0%'   // lg
    if (windowWidth >= 768) return '0%'    // md
    if (windowWidth >= 640) return '-2%'   // sm
    return '-0%'                           // mobile
  }

  // Dynamic widths for left image
  const getLeftWidth = () => {
    if (windowWidth >= 1536) return '60vw'
    if (windowWidth >= 1280) return '62vw'
    if (windowWidth >= 1024) return '65vw'
    if (windowWidth >= 768) return '62vw'
    if (windowWidth >= 640) return '64vw'
    return '70vw'
  }

  // Dynamic widths for right image
  const getRightWidth = () => {
    if (windowWidth >= 1536) return '75vw'
    if (windowWidth >= 1280) return '78vw'
    if (windowWidth >= 1024) return '80vw'
    if (windowWidth >= 768) return '80vw'
    if (windowWidth >= 640) return '82vw'
    return '88vw'
  }

  // Responsive initial positions for h1 elements
  const getLeftH1InitialX = () => {
    if (windowWidth >= 1024) return '-45vw'  // lg and above
    if (windowWidth >= 768) return '-35vw'   // md (tablet)
    if (windowWidth >= 640) return '-30vw'   // sm
    return '-25vw'                            // mobile
  }

  const getRightH1InitialX = () => {
    if (windowWidth >= 1024) return '45vw'   // lg and above
    if (windowWidth >= 768) return '35vw'    // md (tablet)
    if (windowWidth >= 640) return '30vw'    // sm
    return '25vw'                             // mobile
  }

  const getLeftH1AnimateX = () => {
    if (windowWidth >= 1024) return '-5vw'   // lg and above
    if (windowWidth >= 640) return '-25vw'    // sm
    return '-20vw'                              // sm and mobile
  }

  const getRightH1AnimateX = () => {
    if (windowWidth >= 1024) return '5vw'    // lg and above
    if (windowWidth >= 640) return '25vw'    // sm
    return '20vw'                            // sm and mobile
  }

  const handleHeroClick = () => {
    if (!isSplit) {
      setClickHereHidden(true)
      setIsSplit(true)
    }
  }

  // Responsive text positioning
  const getTextLeftPosition = () => {
    if (isSplit) return '50%'
    if (windowWidth >= 1024) return '8%'
    if (windowWidth >= 768) return '6%'
    if (windowWidth >= 640) return '5%'
    return '5%'
  }

  const getTextTransform = () => {
    return isSplit ? 'translateX(-50%)' : 'translateX(0%)'
  }

  // Responsive margin for "Defining Purity"
  const getDefiningPurityMargin = () => {
    if (isSplit) {
      if (windowWidth <= 640) return '0.5rem'
      if (windowWidth <= 768) return '0.75rem'
      return '1rem'
    }
    if (windowWidth >= 1536) return '9rem'
    if (windowWidth >= 1280) return '8rem'
    if (windowWidth >= 1024) return '7.5rem'
    if (windowWidth >= 768) return '5rem'
    if (windowWidth >= 640) return '4rem'
    return '2rem'
  }

  return (
    <section id="home">
      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden cursor-pointer"
        onClick={handleHeroClick}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
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
          className="absolute top-1/2 left-0 transform -translate-y-1/2 h-auto z-20 overflow-hidden"
          style={{
            width: getLeftWidth(),
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
          }}
        >
          <img 
            src={leftHero} 
            alt="Left Hero" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right Torn Half */}
        <motion.div
          initial={{ x: getRightInitialX() }}
          animate={{ x: isSplit ? '100%' : getRightInitialX() }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 h-auto z-20 overflow-hidden"
          style={{
            width: getRightWidth(),
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        >
          <img 
            src={rightHero} 
            alt="Right Hero" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Click Here Icon */}
        {!clickHereHidden && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={isSplit ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute z-30 right-[15%] bottom-[15%] sm:right-[18%] sm:bottom-[18%] md:right-[25%] md:bottom-[25%] lg:right-[33%] lg:bottom-[22%]"
          >
            <img
              src={ClickHere}
              alt="Click Here"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 animate-spin-slow"
            />
          </motion.div>
        )}

        {/* Hero Text */}
        <div className="relative z-30 flex items-center justify-center h-full">
          <div className="text-white w-full max-w-7xl px-4">
            {/* Main Headlines Container */}
            <div className="relative flex flex-col items-center">
              {/* Headlines Row - Flex row on desktop, column on mobile/tablet */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-8 mb-4 sm:mb-6 md:mb-8">
                {/* Left Heading - Starts at left, animates to center */}
                <motion.h1
                  initial={{ x: getLeftH1InitialX(), opacity: 1 }}
                  animate={{ 
                    x: isSplit ? 0 : getLeftH1AnimateX(),
                    opacity: 1
                  }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Product_Sans'] whitespace-nowrap"
                >
                  Refining Gold.
                </motion.h1>

                {/* Right Heading - Starts at right, animates to center */}
                <motion.h1
                  initial={{ x: getRightH1InitialX(), opacity: 1 }}
                  animate={{ 
                    x: isSplit ? 0 : getRightH1AnimateX(),
                    opacity: 1
                  }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Product_Sans'] whitespace-nowrap"
                >
                  Defining Purity
                </motion.h1>
              </div>

              {/* Tagline - Below left heading, animates to center */}
              <motion.p
                initial={{ 
                  x: '-25vw',
                  opacity: 0,
                  textAlign: 'left'
                }}
                animate={{
                  x: isSplit ? 0 : '-25vw',
                  opacity: isSplit ? 1 : 0,
                  textAlign: isSplit ? 'center' : 'left'
                }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
                className="text-xs sm:text-sm md:text-base lg:text-lg font-['Instrument_Sans'] max-w-[85vw] sm:max-w-[75vw] md:max-w-[65vw] lg:max-w-[55vw]"
              >
                Advanced gold refining solutions and premium gold bullion — combining technology, integrity, and global standards.
              </motion.p>
            </div>
          </div>
        </div>

        {/* WhatsApp and Call Us Buttons - Bottom Right */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-25 md:right-8 z-40 flex flex-col sm:flex-row gap-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/971542650191"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 sm:py-2 bg-[#DCBC7C] text-black rounded-3xl hover:bg-[#D4C5A8] transition-colors duration-300 shadow-lg font-medium text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Whatsapp</span>
            <svg
              className="w-4 h-4 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Call Us Button */}
          <a
            href="tel:+971542650191"
            className="flex items-center gap-2 px-4 sm:px-5 sm:py-2 bg-[#DCBC7C] text-black rounded-3xl hover:bg-[#D4C5A8] transition-colors duration-300 shadow-lg font-medium text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Call Us</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}