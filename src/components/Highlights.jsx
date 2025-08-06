import React from 'react'
import goldBiscuit from '../assets/hero-gold-biscuit.png'
import goldRefining from '../assets/goldRefining.jpg'
import testing from '../assets/testing.jpg'

export default function Highlights() {
    const highlights = [
        {
            id: 1,
            image: goldBiscuit,
            heading: "Gold Refining (Purification)",
            paragraph: "Process scrap gold, dore bars, jewellery or bullion to remove impurities (silver, other metals). Deliver high-purity gold (often 99.9% or above). Techniques include chemical leaching, electrolysis, and fire assay analysis"
        },
        {
            id: 2,
            image: goldRefining,
            heading: "Assaying & Testing",
            paragraph: "Laboratory analysis (fire assay, spectrometry) to accurately determine fineness and weight of incoming and refined material. Ensures traceability and value accuracy"
        },
        {
            id: 3,
            image: testing,
            heading: "Smelting & Casting",
            paragraph: "	Melt refined gold into bars, granules, or coins in various weights—ranging from grams to kilogram units. Models include induction furnaces and die-casting technology"
        },
        {
            id: 4,
            image: goldBiscuit,
            heading: "Assaying & Testing",
            paragraph: "Offer bespoke die-made minted bars, coins, medals, or branded designs tailored to customer requests. Known for creative motifs and secure serial stamping."
        }
    ]

    return (
        <section id="services" className="bg-black py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-40">
                    {highlights.map((highlight, index) => (
                        <div 
                            key={highlight.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                        >
                            {/* Rectangle Background */}
                            <div className="w-80vw h-[285px] bg-[#1A1A1A] rounded-full flex items-center justify-center p-12 backdrop-blur-[20px] shadow-[2px_1px_2px_#F2F2F280,-2px_-1px_2px_#F2F2F280]">
                                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 w-full max-w-6xl`}>
                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={highlight.image}
                                            alt={highlight.heading}
                                            className="w-[300px] h-[450px] object-cover rounded-[60px] shadow-2xl"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 space-y-6 ${index % 2 === 0 ? 'px-6' : 'px-20'}`}>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white font-['Kaisei_Tokumin']">
                                            {highlight.heading}
                                        </h3>
                                        <p className="text-lg text-gray-300 leading-relaxed font-['Instrument_Sans']">
                                            {highlight.paragraph}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
