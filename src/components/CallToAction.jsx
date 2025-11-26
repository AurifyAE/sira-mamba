import React from 'react'
import ctaImage from '../assets/ctaImage.jpg'

export default function CallToAction() {
    return (
        <section className="relative w-full h-96 md:h-[60vh] lg:h-screen">
            {/* Background Image */}
            <img
                src={ctaImage}
                alt="Call to Action Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Linear Gradient Overlay */}
            <div 
                className="absolute inset-y-0 left-0 w-full lg:w-[50%] h-full"
                style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.17))'
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="w-full lg:w-[50%] text-center lg:text-left flex flex-col items-center lg:items-start justify-center text-white gap-6 sm:gap-8">
                    {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Product_Sans']">
                        Ethical Sourcing and
                        Sustainability
                        </h1>

                    {/* Paragraph */}
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed font-['Instrument_Sans']">
                        Setting new standards in ethical <br /> gold processing and minting 
                        </p>

                    {/* Button */}
                        <button className="bg-[#BB8D30] backdrop-blur-[5px] hover:bg-[#bb8d30c5] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-[.2px_0.5px_1px_#F2F2F280,-.2px_-0.5px_1px_#F2F2F280]">
                            Click to know how
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
