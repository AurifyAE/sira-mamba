import React from 'react'
import { motion } from 'framer-motion'
import sustainabilityBanner from '../assets/sustainabilityBanner.jpg'



const Sustainability = () => {

    return (
        <div className="min-h-screen bg-[#EFEFEF]">
            <section className="relative bg-cover bg-center bg-no-repeat h-[520px]" 
                         style={{ backgroundImage: `url(${sustainabilityBanner})` }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative h-full z-10 flex items-end justify-start max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 py-20">
                        <div className="text-white">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-['Product_Sans']">
                            Corporate Responsibility and Sustainability at Siramamba Refinery
                            </h1>
                        </div>
                    </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div>
                        <p className="text-base text-gray-700 mb-4">
                            At Siramamba Refinery, responsibility lies at the core of our corporate strategy and plays a pivotal role in shaping our impact on society. As a key driver of performance, Corporate Social Responsibility (CSR) is integral to our brand reputation and is central to our approach to responsible and ethical manufacturing.
                        </p>
                        <p className="text-base text-gray-700 mb-4">
                            We are committed to embedding sustainability across all aspects of our operations. Our governance framework ensures that responsible business practices are part of daily activities, and we regularly monitor and evaluate our CSR initiatives through external audits and certifications by recognized authorities, including ISO standards, Dubai Municipality, and occupational health and safety bodies.
                        </p>
                        <p className="text-base text-gray-700">
                            Through our focus on sustainable growth and responsible practices, Siramamba Refinery continues to support the development of the UAE’s gold and precious metals sector. By engaging local talent, suppliers, and stakeholders, we contribute to the advancement of the industry while creating shared value for the wider community.
                        </p>
                    </div>

                    <div className="bg-[#FFEECC] rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsible Sourcing of Gold</h3>
                        <p className='text-gray-700'>
                            We are strong advocates of responsible sourcing and adhere to guidelines established by international frameworks and UAE authorities. We encourage all supply chain partners to adopt policies aligned with responsible sourcing principles to ensure ethical and transparent procurement practices.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainable Infrastructure & Green Operations</h3>
                        <p className='text-gray-800'>
                            Our refinery is designed according to modern Green Building standards, integrating advanced technologies to minimize harmful emissions and reduce environmental impact in precious metals manufacturing. We are in the process of acquiring ISO 14001 certification for environmental management. Additionally, our energy conservation initiatives focus on efficient resource management and the continual reduction of our carbon footprint.
                        </p>
                        
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sustainability;