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
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[50%] h-full flex items-center"
                style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.17))'
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center flex flex-col items-center justify-center text-white max-w-4xl mx-auto px-4">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Kaisei_Tokumin']">
                    Ethical Sourcing and
                    Sustainability
                    </h1>

                    {/* Paragraph */}
                    <p className="w-1/2 text-2xl md:text-2xl mb-8 leading-relaxed font-['Instrument_Sans']">
                    Setting new standards in ethical gold processing and minting 
                    </p>

                    {/* Button */}
                    <button className="bg-transparent backdrop-blur-[5px] hover:bg-black/20 text-white  py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-[.2px_0.5px_1px_#F2F2F280,-.2px_-0.5px_1px_#F2F2F280]">
                        Click to know how
                    </button>
                </div>
            </div>
        </section>
    )
}
