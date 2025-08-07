import React from 'react'
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
        <section className="bg-[#FFEECC] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-['Kaisei_Tokumin']">
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Kaisei_Tokumin']">
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
