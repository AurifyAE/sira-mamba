import React from 'react'
import logoWhite from '../assets/logoWhite.svg'

export default function Footer() {
    return (
        <footer className="bg-black py-16  font-['Instrument_Sans']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* First Column - Logo and Copyright */}
                    <div className="md:col-span-6">
                        <div className="space-y-6">
                            {/* Logo */}
                            <div>
                                <img
                                    src={logoWhite}
                                    alt="SiraMamba Logo"
                                    className="h-12 w-auto"
                                />
                            </div>

                            {/* Copyright */}
                            <p className="text-gray-400 text-sm">
                                © 2025 SiraMamba Gold Refinery, Made by 3RCreative
                            </p>
                        </div>
                    </div>

                    {/* Second Column - Navigation Links */}
                    <div className="md:col-span-3">
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-lg mb-4 font-['Kaisei_Tokumin']">
                                Navigation
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#accreditations" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        Our Accreditations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Third Column - Additional Links */}
                    <div className="md:col-span-3">
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-lg mb-4 font-['Kaisei_Tokumin']">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#account" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        Account Opening
                                    </a>
                                </li>
                                <li>
                                    <a href="#sustainability" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        Sustainability
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
