import React from 'react'
import ctaImage from '../assets/ctaImage.jpg'

export default function CallToAction() {
    return (
        <section className="relative w-full h-screen">
            {/* Background Image */}
            <img
                src={ctaImage}
                alt="Call to Action Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Linear Gradient Overlay */}
            <div 
                className="absolute inset-y-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[50%] h-full flex items-center"
                style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.17))'
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center flex flex-col items-center justify-center text-white max-w-4xl mx-auto px-4">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-['Kaisei_Tokumin']">
                    Ethical Sourcing and
                    Sustainability
                    </h1>

                    {/* Paragraph */}
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed font-['Instrument_Sans'] md:w-1/2">
                    Setting new standards in ethical gold processing and minting 
                    </p>

                    {/* Button */}
                    <button className="bg-transparent backdrop-blur-[5px] hover:bg-black/20 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-[.2px_0.5px_1px_#F2F2F280,-.2px_-0.5px_1px_#F2F2F280]">
                        Click to know how
                    </button>
                </div>
            </div>
        </section>
    )
}
