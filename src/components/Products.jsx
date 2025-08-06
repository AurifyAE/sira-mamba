import React from 'react'
import goldBiscuit from '../assets/hero-gold-biscuit.png'


export default function Products() {
    const products = [
        {
            id: 1,
            image: goldBiscuit,
            title: "995 Kilo Bar",
        },
        {
            id: 2,
            image: goldBiscuit,
            title: "999.9 kilo bar",
        },
        {
            id: 3,
            image: goldBiscuit,
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center">
                            {/* Card with Image and Title */}
                            <div className="w-[265px] h-[380px] rounded-full bg-[#FAFAFA80] backdrop-blur-[20px] shadow-[inset_3px_3px_-3px_rgba(0,0,0,0.3)] p-8 text-center">
                                {/* Image */}
                                <div className="mb-6">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-56 object-cover rounded-full mx-auto"
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
