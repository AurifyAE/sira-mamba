import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Shops', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Accreditations', href: '/accreditations' },
        { name: 'Contact', href: '/contact' }
    ]

    return (
        <nav className="bg-black opacity-80 fixed top-0 inset-x-0 z-50 font-['Instrument_Sans'] shadow-[0_1px_0_#f2f2f280]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-15 md:h-20">
                    {/* Left-aligned Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <Link to="/">
                                <img 
                                    src={Logo} 
                                    alt="SIRA MAMBA Logo" 
                                    className="h-12 w-auto md:h-16 lg:w-60"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation Items - Right Aligned */}
                    <div className="hidden lg:block px-10 py-1">
                        <div className="flex justify-center items-center space-x-4">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`group relative m-0 px-5 py-2 rounded-full text-sm font-medium flex items-center overflow-hidden transition-all duration-300 ${isActive ? 'text-black' : 'text-white hover:text-black'}`}
                                    >
                                        <span
                                            className={`absolute inset-0 rounded-full bg-[#DCBC7C] transform origin-center transition-transform duration-300 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-80 group-hover:opacity-100'}`}
                                        />
                                        <span className="relative z-10">{item.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-700">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive ? 'text-[#DCBC7C] bg-white/10' : 'text-white hover:text-black hover:bg-[#DCBC7C]/30'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
