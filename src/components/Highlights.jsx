import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import goldRefining from '../assets/services/goldRefining.jpg'
import testing from '../assets/services/testing.png'
import smelting from '../assets/services/smelting.jpg'
import gold1 from '../assets/gold1.png'

export default function Highlights() {
    const highlights = [
        {
            id: 1,
            image: goldRefining,
            heading: "Gold Refining (Purification)",
            paragraph: [
                "Process scrap gold, dore bars, jewellery or bullion to remove impurities (silver, other metals).",
                "Deliver high-purity gold (often 99.9% or above). Techniques include chemical leaching, electrolysis, and fire assay analysis."
            ]
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
        <section id="services" className="bg-[#282626] py-16 md:py-32">
            <div className="mx-auto">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#BB8D30] font-['Product_Sans']">
                        Our Services
                    </h2>
                </motion.div>
                
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
                            {/* Image - Outside the content block */}
                            <motion.div 
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 z-10 flex items-center justify-center w-1/3"
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={highlight.image}
                                        alt={highlight.heading}
                                        className="w-[200px] h-[220px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[450px] object-cover rounded-[30px] sm:rounded-[60px]"
                                    />
                                    {/* Animated vertical line below image */}
                                    {index !== highlights.length - 1 && (
                                        <div className="relative h-20">
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                whileInView={{ opacity: 1, height: [0, 200, 0] }}
                                                transition={{
                                                    duration: 2,
                                                    delay: index * 0.15 + 0.4,
                                                    repeat: Infinity,
                                                    repeatDelay: 0.4,
                                                    ease: 'easeInOut',
                                                }}
                                                viewport={{ once: false, amount: 0.4 }}
                                                className="w-px bg-[#BB8D30] absolute top-0 left-1/2 -translate-x-1/2 origin-top"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Rectangle Background - Content only */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                viewport={{ once: true }}
                                className={`w-full md:w-2/3 h-[500px] md:h-[285px] bg-[#1A1A1A] opacity-50 rounded-3xl ${index % 2 === 0 ? 'lg:rounded-l-full' : 'lg:rounded-r-full'} flex items-center justify-center p-6 sm:p-12 backdrop-blur-[20px] shadow-[2px_1px_2px_#F2F2F280,-2px_-1px_2px_#F2F2F280]`}
                            >
                                {/* Content */}
                                <motion.div 
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                    viewport={{ once: true }}
                                    className={`flex-1 space-y-4 sm:space-y-6 text-center sm:text-left ${index % 2 === 0 ? 'sm:px-6 lg:px-20' : 'sm:px-4 lg:px-6'}`}
                                >
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                                        viewport={{ once: true }}
                                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#DCBC7C] font-['Product_Sans']"
                                    >
                                        {highlight.heading}
                                    </motion.h3>
                                    <div className="space-y-3">
                                        {Array.isArray(highlight.paragraph) ? (
                                            highlight.paragraph.map((para, paraIndex) => (
                                                <motion.p
                                                    key={paraIndex}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.2 + 1.0 + (paraIndex * 0.1) }}
                                                    viewport={{ once: true }}
                                                    className="text-sm sm:text-base lg:text-lg text-white leading-relaxed font-['Instrument_Sans']"
                                                >
                                                    {para}
                                                </motion.p>
                                            ))
                                        ) : (
                                            <motion.p 
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.2 + 1.0 }}
                                                viewport={{ once: true }}
                                                className="text-sm sm:text-base lg:text-lg text-white leading-relaxed font-['Instrument_Sans']"
                                            >
                                                {highlight.paragraph}
                                            </motion.p>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
