import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';


const ProductGrid = () => {
    const navigate = useNavigate();

    // Function to handle navigation to product details
    const handleShopNow = (productId) => {
        navigate(`/product/${productId}`);
    };

    // Function to handle email for product inquiry
    // const handleEmailInquiry = (product) => {
    //     const subject = `Product Inquiry: ${product.name}`;
    //     const body = `Hello,\n\nI am interested in purchasing the following product:\n\nProduct: ${product.name}\nWeight: ${product.weight}\n\nPlease provide me with more information about pricing, availability, and purchasing process.\n\nThank you.`;
        
    //     const mailtoLink = `mailto:sales@macandrocapital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    //     window.open(mailtoLink);
    // };

    return (
        <div className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="bg-[#FFEECC] pt-30 py-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 font-['Product_Sans']">Our Products</h2>
            </section>

            {/* Products List Section */}
            <section className="py-16 px-6 bg-[#F1F0E8]">
                <div className="max-w-6xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="mb-16 last:mb-0">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                                {/* Left Side - Image */}
                                <div className="md:col-span-1">
                                    <div className="flex flex-col">
                                        <div className="w-40 h-56 bg-white flex items-center justify-center p-6 mb-4 shadow-sm mx-auto rounded-full">
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3 className="text-lg text-center font-semibold text-gray-900">
                                            {product.name}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Right Side - Description and Button */}
                                <div className="md:col-span-2">
                                    <div className="space-y-4 mb-6">
                                        {product.description.map((para, idx) => (
                                            <p key={idx} className="text-base text-gray-900 leading-relaxed">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={() => handleShopNow(product.id)}
                                        className="inline-block px-8 py-2 rounded-full bg-[#DCBC7C] text-black font-medium hover:opacity-90 transition-opacity shadow-xl"
                                    >
                                        Enquire now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductGrid;