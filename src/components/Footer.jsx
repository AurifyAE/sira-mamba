import React from 'react'
import logoWhite from '../assets/logoWhite.svg'

export default function Footer() {
    return (
        <footer className="bg-black py-12 sm:py-16 font-['Instrument_Sans']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                    {/* First Column - Logo and Copyright */}
                    <div className="md:col-span-4">
                        <div className="space-y-4 sm:space-y-6">
                            {/* Logo */}
                            <div>
                                <img
                                    src={logoWhite}
                                    alt="SiraMamba Logo"
                                    className="h-10 sm:h-12 w-auto"
                                />
                            </div>

                            {/* Copyright */}
                            <p className="text-gray-400 text-xs sm:text-sm">
                                © 2025 SiraMamba Gold Refinery, Made by 3RCreative
                            </p>
                        </div>
                    </div>

                    {/* Second Column - Navigation Links */}
                    <div className="md:col-span-2">
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4 font-['Kaisei_Tokumin']">
                                Navigation
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#accreditations" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                        Our Accreditations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Third Column - Additional Links */}
                    <div className="md:col-span-2">
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4 font-['Kaisei_Tokumin']">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#account" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                        Account Opening
                                    </a>
                                </li>
                                <li>
                                    <a href="#sustainability" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                        Sustainability
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Fourth Column - Address and Phone Numbers */}
                    <div className="md:col-span-4">
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4 font-['Kaisei_Tokumin']">
                                Contact Information
                            </h3>
                            <div className="space-y-3">
                                {/* Address */}
                                <div>
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                        400 M2 Warehouse A4-67-68-69 SAIF Zone,<br />
                                        Sharjah, United Arab Emirates
                                    </p>
                                </div>
                                
                                {/* Phone Numbers */}
                                <div className="space-y-2">
                                    <p className="text-gray-400 text-sm sm:text-base cursor-pointer"
                                    onClick={() => window.location.href = 'mailto:info@siramamba.ae'}
                                    >
                                        info@siramamba.ae
                                    </p>
                                    <p className="inline text-gray-400 text-sm sm:text-base cursor-pointer"
                                    onClick={() => window.location.href = 'tel:+971525647522'}
                                    >
                                        +971 52 564 7522,
                                    </p>
                                    <p className="mt-1 md:mt-0 lg:mt-1 text-gray-400 text-sm sm:text-base cursor-pointer"
                                    onClick={() => window.location.href = 'tel:+971565956353'}
                                    >
                                        +971 56 595 6353
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
