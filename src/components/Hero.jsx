import React, { useRef, useState } from 'react'
import ClickHere from '../assets/click-here.svg'
import arrowDown from '../assets/arrow-down.svg'
import heroVideo from '../assets/hero-video.mp4'
import leftHero from '../assets/left-hero.png'
import rightHero from '../assets/right-hero.png'
import goldRefiningRaw from '../assets/goldRefiningraw.jpg'

export default function Hero() {
    const leftImageRef = useRef(null)
    const rightImageRef = useRef(null)
    const paragraphRef = useRef(null)
    const secondH1Ref = useRef(null)
    const [animationsTriggered, setAnimationsTriggered] = useState(false)
    const [clickHereHidden, setClickHereHidden] = useState(false)

    const handleHeroClick = () => {
        if (animationsTriggered) return // Prevent multiple triggers

        setAnimationsTriggered(true)

        // Smoothly hide click here image with fade out animation
        const clickHereElement = document.querySelector('.click-here-image')
        if (clickHereElement) {
            clickHereElement.animate(
                [
                    { opacity: 1, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0.8)' }
                ],
                {
                    duration: 500,
                    easing: 'ease-out',
                    fill: 'forwards'
                }
            ).onfinish = () => {
                setClickHereHidden(true) // Hide after animation completes
            }
        }

        // Animate left image to move left and hide
        const leftImage = leftImageRef.current
        if (leftImage) {
            leftImage.animate(
                [
                    { transform: 'translateX(0)', opacity: 1 },
                    { transform: 'translateX(-100%)', opacity: 0 }
                ],
                {
                    duration: 3000,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                }
            )
        }

        // Animate right image to move right and hide
        const rightImage = rightImageRef.current
        if (rightImage) {
            rightImage.animate(
                [
                    { transform: 'translateX(0)', opacity: 1 },
                    { transform: 'translateX(100%)', opacity: 0 }
                ],
                {
                    duration: 3000,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                }
            )
        }

        // Animate paragraph to move vertically to center
        const paragraph = paragraphRef.current
        if (paragraph) {
            const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024; // Assuming 1024px as the breakpoint for tablet
            paragraph.animate(
                [
                    { transform: 'translateX(0)', opacity: 1 },
                    { transform: `translateX(${isTablet ? '22vw' : '11vw'})`, opacity: 1 }
                ],
                {
                    duration: 2000,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                }
            )
        }

        // Animate second h1 to move from ml-30 to ml-4
        const secondH1 = secondH1Ref.current
        if (secondH1) {
            const isMobile = window.innerWidth <= 768; // Assuming 768px as the breakpoint for mobile
            secondH1.animate(
                [
                    { marginLeft: isMobile ? '2.5rem' : '7.5rem' }, // ml-10 for mobile, ml-30 for desktop
                    { marginLeft: isMobile ? '0.5rem' : '1rem' }     // ml-4 equivalent
                ],
                {
                    duration: 2000,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                }
            )
        }
    }

    return (
        <section id="home">
        <div 
            className="relative h-[50vh] md:h-screen overflow-hidden cursor-pointer"
            onClick={handleHeroClick}
        >
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-auto md:h-full object-cover z-1"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */}

            {/* Left Hero Image */}
            <img
                ref={leftImageRef}
                src={leftHero}
                alt="Left Hero"
                className="absolute -left-7 md:left-0 top-38 md:top-1/2 transform -translate-y-1/2 z-20 w-[67vw] md:w-[62vw] h-auto lg:w-auto"
            />

            {/* Right Hero Image */}
            <img
                ref={rightImageRef}
                src={rightHero}
                alt="Right Hero"
                className="absolute right-0 md:right-0 top-38 md:top-1/2 transform -translate-y-1/2 z-20 w-[85vw] md:w-[78vw] lg:w-auto h-auto "
            />

            {/* Click Here SVG with rotation animation */}
            {!clickHereHidden && (
                <div className="absolute right-1/5 bottom-1/6 md:bottom-1/4 lg:right-1/3 lg:bottom-1/3 z-30">
                    <img
                        src={ClickHere}
                        alt="Click Here"
                        className="click-here-image w-20 h-20 md:w-28 md:h-28 animate-spin-slow"
                    />
                </div>
            )}

            {/* Arrow Down SVG - shows when click here is hidden */}
            {clickHereHidden && (
                <div className="absolute bg-black/50 flex items-center pt-2 pr-[.5px] h-18 w-10 rounded-full bottom-32 left-1/2 transform -translate-x-1/2 z-30 backdrop-blur-[20px]">
                    <img
                        src={arrowDown}
                        alt="Scroll Down"
                        className="w-8 h-8 md:w-10 md:h-10 animate-bounce"
                    />
                </div>
            )}

            {/* Hero Content */}
            <div className="relative z-30 flex items-start justify-center h-full pt-40 md:pt-65 lg:pt-70">
                <div className="text-center text-white">
                    <p 
                        ref={paragraphRef}
                        className="text-xl md:text-3xl absolute top-33 md:top-58 lg:top-60 transform mb-8 font-['Instrument_Sans']"
                    >
                        Do you know how a
                    </p>
                    <h1 className="inline-block text-3xl md:text-7xl font-bold mb-4 font-['Kaisei_Tokumin']">
                        Gold Bar 
                    </h1>
                    <h1 
                        ref={secondH1Ref}
                        className="inline-block text-3xl md:text-7xl font-bold ml-10 lg:ml-30 mb-4 font-['Kaisei_Tokumin']"
                    >
                        is Made?
                    </h1>
                </div>
            </div>
        </div>
        {/* Hero Content 2 */}
        <div className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Left Paragraph and Right Image Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Paragraph */}
                    <div className="space-y-6">
                        <p className="text-lg font-bold font-['Kaisei_Tokumin'] text-white leading-relaxed">
                            Gold Refining: From Raw Material to 99.99% Pure Bars
                        </p>
                        <p className="text-lg text-white leading-relaxed font-['Instrument_Sans']">
                        Gold's transformation begins with raw ore or recycled precious metals, which undergo rigorous assaying to determine purity levels. Using advanced techniques such as fire assay or electrolytic refining, the gold is processed to achieve up to 99.99% purity. Once refined, the molten gold is cast into molds or minted into bars, each stamped with its weight, purity, and a unique serial number for traceability. Every gold bar is then carefully inspected, certified, and securely packaged—ready to be vaulted or delivered to clients and institutions around the globe.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={goldRefiningRaw}
                            alt="Gold Refining Process"
                            className="w-full max-w-md h-auto rounded-[30px] shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
