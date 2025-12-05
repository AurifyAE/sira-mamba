import React from 'react'
import { motion } from 'framer-motion'
import aboutBanner from '../assets/about/about-banner.png';


const About = () => {
  const missionStatements = [
    {
      number: "01",
      text: "To refine gold and precious metals to the highest levels of purity (e.g. 99.9%, 99.99%, or higher)"
    },
    {
      number: "02",
      text: "To maintain transparent, traceable, and responsible sourcing practices"
    },
    {
      number: "03",
      text: "To deliver premium products and services with reliability, security, and integrity"
    },
    {
      number: "04",
      text: "To invest in advanced technologies, research, and sustainability"
    },
    {
      number: "05",
      text: "To build long-term partnerships by consistently meeting or exceeding client expectations"
    }
  ]

  return (
    <div className="min-h-screen bg-[#EFEFEF]">
        <section className="relative bg-cover bg-center bg-no-repeat h-[520px]" 
                     style={{ backgroundImage: `url(${aboutBanner})` }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative h-full z-10 flex items-end justify-start max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 py-20">
                <div className="text-white">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-['Product_Sans']">
                        Our Story.
                        </h1>
                    </div>
                </div>
        </section>

    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Paragraphs */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            What Sets Us Apart
          </h2>
          <p className="text-base text-justify text-gray-700 mb-4">
          SIRAMAMBA REFINERY (FZC) is a leading gold and precious-metal refining enterprise based in Sharjah, United Arab Emirates. We specialize in processing, purifying, assaying, minting, and trading gold and related precious metals. Our facility is equipped with state-of-the-art technology, expert metallurgical staff, and rigorous quality control systems to deliver high-purity precious metal products to clients across the globe.
          </p>
          <p className="text-base text-justify text-gray-700">
          Founded in 2024, we set out with a vision to offer ethical, transparent, and high-integrity refining services. Over the years, we have built strong relationships with jewelers, investors, financial institutions, industries, and governments by providing consistent results, secure logistics, and full traceability across the refining value chain.
          </p>
        </div>
        {/* Right Side: Key Differentiators */}
        <div className="bg-[#FFEECC] rounded-3xl p-8 flex flex-col justify-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Differentiators</h3>
          <ul className="list-disc ml-5 space-y-3 text-gray-700">
            <li>Cutting-edge refining, smelting and assaying technology</li>
            <li>Integrated lab and quality assurance</li>
            <li>Ethical sourcing &amp; compliance with international standards</li>
            <li>Secure logistics, storage, and documentation</li>
            <li>Customized products to meet client needs</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Vision Statement */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Vision
          </h2>
          <p className="text-base text-justify text-gray-700">
            To be globally recognized as a benchmark in precious metals refining — combining purity, trust, sustainability, and innovation — and to empower clients with gold products of lasting value.
          </p>
        </div>
        {/* Right Side: Image */}
        <div className="flex justify-center items-center">
          <img 
            src={aboutBanner} 
            alt="About Vision Banner" 
            className="w-full max-w-xl rounded-3xl shadow-lg object-cover" 
          />
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-16 md:py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center items-center">
          {/* Left Side: Mission Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-1/3 flex items-center justify-center flex-shrink-0"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-['Product_Sans']">
              Mission
            </h2>
          </motion.div>

          {/* Right Side: Mission Statements */}
          <div className="flex-1 space-y-4 md:space-y-5 w-2/3">
            {missionStatements.map((mission, index) => (
              <motion.div
                key={mission.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  index % 2 === 0 ? 'bg-[#FFEECC]' : 'bg-white'
                }`}
              >
                <div className="relative flex items-start gap-6 md:gap-8">
                  {/* Large Number */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex-shrink-0">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-['Instrument_Sans']">
                      {mission.number}
                    </span>
                  </div>
                  {/* Mission Text */}
                  <div className="flex-1 pt-2">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-['Instrument_Sans'] pl-10">
                      {mission.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    
    </div>
  )
}

export default About