import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import goldRefining from '../assets/goldRefiningraw.jpg'
import testing from '../assets/testing.jpg'
import smelting from '../assets/smelting.jpg'
import gold1 from '../assets/gold1.png'

export default function Highlights() {
    const highlights = [
        {
            id: 1,
            image: goldRefining,
            heading: "Gold Refining (Purification)",
            paragraph: "Process scrap gold, dore bars, jewellery or bullion to remove impurities (silver, other metals). Deliver high-purity gold (often 99.9% or above). Techniques include chemical leaching, electrolysis, and fire assay analysis"
        },
        {
            id: 2,
            image: testing,
            heading: "Assaying & Testing",
            paragraph: "Laboratory analysis (fire assay, spectrometry) to accurately determine fineness and weight of incoming and refined material. Ensures traceability and value accuracy"
        },
        {
            id: 3,
            image: smelting,
            heading: "Smelting & Casting",
            paragraph: "	Melt refined gold into bars, granules, or coins in various weights—ranging from grams to kilogram units. Models include induction furnaces and die-casting technology"
        },
        {
            id: 4,
            image: gold1,
            heading: "Minting & Customized Products",
            paragraph: "Offer bespoke die-made minted bars, coins, medals, or branded designs tailored to customer requests. Known for creative motifs and secure serial stamping."
        }
    ]

    return (
        <section id="services" className="bg-black py-16 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-15 md:space-y-40">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.id}
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-12`}
                        >
                            {/* Rectangle Background */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                viewport={{ once: true }}
                                className="w-full md:w-80vw h-[500px] md:h-[285px] bg-[#1A1A1A] rounded-3xl md:rounded-full flex items-center justify-center p-6 sm:p-12 backdrop-blur-[20px] shadow-[2px_1px_2px_#F2F2F280,-2px_-1px_2px_#F2F2F280]"
                            >
                                <div className={`flex ${index % 2 === 0 ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row-reverse'} items-center gap-4 sm:gap-6 lg:gap-12 w-full max-w-6xl`}>
                                    {/* Image */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="flex-shrink-0"
                                    >
                                        <img
                                            src={highlight.image}
                                            alt={highlight.heading}
                                            className="w-[200px] h-[220px] md:[250px] md:h-[400px] lg:w-[300px] lg:h-[450px] object-cover rounded-[30px] sm:rounded-[60px]"
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                        viewport={{ once: true }}
                                        className={`flex-1 space-y-4 sm:space-y-6 text-center sm:text-left ${index % 2 === 0 ? 'sm:px-4 lg:px-6' : 'sm:px-6 lg:px-20'}`}
                                    >
                                        <motion.h3 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                                            viewport={{ once: true }}
                                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Kaisei_Tokumin']"
                                        >
                                            {highlight.heading}
                                        </motion.h3>
                                        <motion.p 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 1.0 }}
                                            viewport={{ once: true }}
                                            className="text-sm sm:text-base lg:text-lg text-white leading-relaxed font-['Instrument_Sans']"
                                        >
                                            {highlight.paragraph}
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
