import React from 'react'
import goldBiscuit from '../assets/hero-gold-biscuit.png'

export default function About() {
    return (
        <>
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Heading and Sub Heading */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Kaisei_Tokumin']">
                                    We are a modern Ethical Refinery
                                </h1>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-lg text-gray-300 leading-relaxed font-['Instrument_Sans']">
                                Siramamba Gold Refinery is a state-of-the-art precious metals refinery based in the Sharjah Airport International Free Zone (SAIF Zone), UAE. We specialize in the purification, assaying, and processing of gold, with a strong commitment to ethical sourcing and world-class technology.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={goldBiscuit}
                                alt="SiraMamba Gold Refining"
                                className="w-full max-w-lg h-auto rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Column Section */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4 font-['Kaisei_Tokumin']">
                                Our Mission 
                            </h3>
                            <p className="text-gray-300 text-left leading-relaxed font-['Instrument_Sans'] italic">
                                To set new global benchmarks in precision gold refining and promote responsible practices within the precious metals industry.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4 font-['Kaisei_Tokumin']">
                                Our Vision
                            </h3>
                            <p className="text-gray-300 text-left leading-relaxed font-['Instrument_Sans'] italic">
                                To become the most trusted name in gold refining in the Middle East, serving global clients with transparency and integrity.
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4 font-['Kaisei_Tokumin']">
                                Our Team
                            </h3>
                            <p className="text-gray-300 text-left leading-relaxed font-['Instrument_Sans'] italic">
                                Led by industry veterans with decades of expertise in metallurgy and international trade, our team brings excellence to every process, from smelting to final delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
