import React from 'react'
import { Link } from 'react-router-dom'
import gold995 from '../assets/gold995.png'
import gold999 from '../assets/gold999.png'
import goldTT from '../assets/ttBar.png'

export default function Products() {
    const products = [
        {
            id: 1,
            image: gold995,
            title: "995 Kilo Bar",
        },
        {
            id: 2,
            image: gold999,
            title: "999.9 kilo bar",
        },
        {
            id: 3,
            image: goldTT,
            title: "TT Bar",
        }
    ]

    return (
        <section className="bg-[#FFEECC] py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Right Button */}
                <div className="absolute top-20 right-32">
                    <Link 
                        to="/products"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-[#DCBC7C] cursor-pointer shadow-[2px_1px_2px_#00000030,-2px_-1px_2px_#00000030]"
                    >
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-['Product_Sans']">
                        Products
                    </h1>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center">
                            {/* Card with Image and Title */}
                            <div className="w-[265px] h-[380px] rounded-full bg-[#FAFAFA80] backdrop-blur-[20px] shadow-[inset_3px_3px_-3px_rgba(0,0,0,0.3)] p-8 text-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                                {/* Image */}
                                <div className="mb-6">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-56 object-contain mx-auto"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Product_Sans']">
                                    {product.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
