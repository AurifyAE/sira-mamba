import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gallery1 from '../assets/gallery/DSC_1045.JPG'
import gallery2 from '../assets/gallery/DSC_1051.JPG'
import gallery3 from '../assets/gallery/DSC_1052.JPG'
import gallery4 from '../assets/gallery/DSC_1063.JPG'
import gallery5 from '../assets/gallery/DSC_1107.JPG'
import gallery6 from '../assets/gallery/DSC_1109.JPG'
import gallery7 from '../assets/gallery/DSC_1112.JPG'
import gallery8 from '../assets/gallery/DSC_1225.JPG'
import gallery9 from '../assets/gallery/DSC_1267.JPG'
import gallery10 from '../assets/gallery/DSC_1279.JPG'
import gallery11 from '../assets/gallery/DSC_1388.JPG'

export default function Gallery() {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    // Gallery images from assets
    const galleryImages = [
        { id: 1, src: gallery1, alt: 'Gallery Image 1 - Refinery facility' },
        { id: 2, src: gallery2, alt: 'Gallery Image 2 - Refinery facility' },
        { id: 3, src: gallery3, alt: 'Gallery Image 3 - Refinery facility' },
        { id: 4, src: gallery4, alt: 'Gallery Image 4 - Refinery facility' },
        { id: 5, src: gallery5, alt: 'Gallery Image 5 - Refinery facility' },
        { id: 6, src: gallery6, alt: 'Gallery Image 6 - Refinery facility' },
        { id: 7, src: gallery7, alt: 'Gallery Image 7 - Refinery facility' },
        { id: 8, src: gallery8, alt: 'Gallery Image 8 - Refinery facility' },
        { id: 9, src: gallery9, alt: 'Gallery Image 9 - Refinery facility' },
        { id: 10, src: gallery10, alt: 'Gallery Image 10 - Refinery facility' },
        { id: 11, src: gallery11, alt: 'Gallery Image 11 - Refinery facility' },
    ]

    const scroll = (direction) => {
        const container = scrollContainerRef.current
        if (!container) return

        // Responsive scroll amount based on screen size
        const scrollAmount = window.innerWidth >= 1024 ? 400 : window.innerWidth >= 768 ? 320 : 280
        const newScrollLeft = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
        
        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        })
    }

    const handleScroll = () => {
        const container = scrollContainerRef.current
        if (!container) return

        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        )
    }

    // Check scroll state on mount and window resize
    useEffect(() => {
        const checkScrollState = () => {
            const container = scrollContainerRef.current
            if (!container) return

            setCanScrollLeft(container.scrollLeft > 0)
            setCanScrollRight(
                container.scrollWidth > container.clientWidth
            )
        }

        checkScrollState()
        window.addEventListener('resize', checkScrollState)
        
        return () => {
            window.removeEventListener('resize', checkScrollState)
        }
    }, [])

    return (
        <section id="gallery" className="bg-[#282626] py-16 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Gallery Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-['Product_Sans']">
                        Gallery
                    </h2>
                    
                    {/* Navigation Button */}
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-200 ${
                            canScrollRight 
                                ? 'hover:bg-[#2A2A2A] cursor-pointer shadow-[2px_1px_2px_#F2F2F280,-2px_-1px_2px_#F2F2F280]' 
                                : 'opacity-50 cursor-not-allowed'
                        }`}
                        aria-label="Scroll right"
                    >
                        <svg
                            className="w-6 h-6 md:w-7 md:h-7 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>

                {/* Scrollable Gallery Container */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 w-[280px] h-[224px] md:w-[320px] md:h-[256px] lg:w-[400px] lg:h-[320px]"
                            >
                                <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    {canScrollRight && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-l from-[#282626] to-transparent pointer-events-none" />
                    )}
                </div>
            </div>
        </section>
    )
}

