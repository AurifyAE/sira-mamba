import React from 'react';
import { motion } from 'framer-motion';
import goldRefining from '../assets/services/goldRefining.jpg'
import testing from '../assets/services/testing.png'
import smelting from '../assets/services/smelting.jpg'
import gold1 from '../assets/gold1.png'
import serviceBanner from '../assets/services/service-banner-video.mp4';

const ServicePage = () => {

  const featuredServices = [
    {
      icon: goldRefining,
      title: ["Gold Refining", "(Purification)"],
      description:
        `Process scrap gold, dore bars, jewellery or bullion to remove impurities (silver, other metals).
        Deliver high-purity gold (often 99.9% or above). Techniques include chemical leaching, electrolysis, and fire assay analysis.`,
      cta: "Enquire Now",
    },
    {
      icon: testing,
      title: ["Assaying &", "Testing"],
      description:
        "Laboratory analysis (fire assay, spectrometry) to accurately determine fineness and weight of incoming and refined material. Ensures traceability and value accuracy",
      cta: "Enquire Now",
    },
    {
      icon: smelting,
      title: ["Smelting &", "Casting"],
      description:
        "Melt refined gold into bars, granules, or coins in various weights—ranging from grams to kilogram units. Models include induction furnaces and die-casting technology",
      cta: "Enquire Now",
    },
    {
      icon: gold1,
      title: ["Minting & Customised", "Products"],
      description:
        "	Melt refined gold into bars, granules, or coins in various weights—ranging from grams to kilogram units. Models include induction furnaces and die-casting technology",
      cta: "Enquire Now",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
        <section className="relative h-[520px]">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={serviceBanner}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex items-end justify-start h-full">
                <div className="text-white max-w-6xl p-20">
                    <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight font-['Product_Sans']">
                    Services <br />
                    We Provide.
                    </h1>
                </div>
            </div>
        </section>

        

      {/* Featured Services Section */}
      <section className="py-16 mt-30">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-36">
          {featuredServices.map((item, idx) => (
            <div key={idx} className="flex items-start justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* circular image */}
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full overflow-hidden z-10">
                  <img src={item.icon} alt={`${item.title[0]} ${item.title[1]}`} className="w-full h-full object-cover" />
                </div>
                {/* grey panel with pointed bottom */}
                <div
                  className="pt-40 pb-12 px-8 text-center bg-[#999999] text-black"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}
                >
                  <h3 className="font-playfair font-bold text-3xl leading-tight mb-3">
                    {item.title[0]}<br/>{item.title[1]}
                  </h3>
                  <p className="text-base text-justify leading-5 text-gray-800 p-4 mb-6">{item.description}</p>
                  <div className="flex justify-center">
                    <span
                      className="inline-block text-sm px-6 py-2 rounded-2xl bg-[#DCBC7C] text-black shadow-xl"
                     
                    >
                      {item.cta}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Center CTA to Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <a href="/products" className="inline-flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-black">
            Our Products
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12Z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
      </section>
      
      
      {/* <CreateAccountSteps />   */}

    </div>
  );
};

export default ServicePage;