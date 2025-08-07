import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home', onClick: () => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
        } },
        { name: 'Services', href: '#services', onClick: () => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
        } },
        { name: 'Shop', href: '#shop' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Accreditations', href: '#accreditations' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className="bg-black sticky top-0 z-50 shadow-[0_.2px_40px_#F2F2F280]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left-aligned Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <img 
                                src={Logo} 
                                alt="SiraMamba Logo" 
                                className="h-8 w-auto sm:h-10 md:h-16 lg:w-60"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation Items - Right Aligned */}
                    <div className="hidden lg:block bg-[#1A1A1A] px-10 py-1 rounded-full shadow-[2px_1px_2px_#F2F2F280,-2px_-1px_2px_#F2F2F280]">
                        <div className="flex justify-center items-center space-x-4">
                            {navItems.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-white hover:text-gray-300 m-0 px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                                    >
                                        {item.name}
                                    </a>
                                    {index < navItems.length - 1 && (
                                        <span className="bg-white mx-1 w-1 h-1 rotate-45"></span>
                                    )}
                                </React.Fragment>
                            ))}
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
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
