import React from 'react';
import { useNavigate } from 'react-router-dom';
import smelting from '../assets/about/about-img.jpg';

const About = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = () => {
    navigate('/about');
  };

  return (
    <section className="relative z-40">
      <div className="max-w-7xl mx-auto ">
        {/* Dark grey section with rounded top corners */}
        <div className="bg-[#282626] rounded-t-[50px] md:rounded-t-[220px] -mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 p-8 md:p-20 lg:pt-30 lg:px-30">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-['Product_Sans']">
                <span className="text-[#DCBC7C] block">Pure Gold.</span>
                <span className="text-[#DCBC7C] block">Perfect Refinement.</span>
                <span className="text-[#DCBC7C] block">Trusted Bullion.</span>
              </h2>

              {/* Body Paragraph */}
              <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
              SIRAMAMBA REFINERY (FZC) is a leading gold and precious-metal refining enterprise based in Sharjah, United Arab Emirates. We specialize in processing, purifying, assaying, minting, and trading gold and related precious metals. Our facility is equipped with state-of-the-art technology, expert metallurgical staff, and rigorous quality control systems to deliver high-purity precious metal products to clients across the globe.
              </p>

              {/* Discover More Button */}
              <button
                onClick={handleDiscoverMore}
                className="self-start px-8 py-3 md:px-10 md:py-4 bg-[#BB8D30] text-white font-bold text-sm md:text-base rounded-md hover:bg-[#C9A865] transition-colors duration-300 shadow-lg uppercase tracking-wide font-['Product_Sans']"
              >
                DISCOVER MORE
              </button>
            </div>

            {/* Right Side - Circular Image */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Circular Image Container */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden shadow-2xl relative">
                  <img
                    src={smelting}
                    alt="Gold refining process - molten gold being poured"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

