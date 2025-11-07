import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // Sample gallery images - replace with actual images from your assets
  const galleryImages = [
    { id: 1, src: '/placeholder.jpg', alt: 'Gallery Image 1', category: 'all' },
    { id: 2, src: '/placeholder.jpg', alt: 'Gallery Image 2', category: 'all' },
    { id: 3, src: '/placeholder.jpg', alt: 'Gallery Image 3', category: 'all' },
    { id: 4, src: '/placeholder.jpg', alt: 'Gallery Image 4', category: 'all' },
    { id: 5, src: '/placeholder.jpg', alt: 'Gallery Image 5', category: 'all' },
    { id: 6, src: '/placeholder.jpg', alt: 'Gallery Image 6', category: 'all' },
    { id: 7, src: '/placeholder.jpg', alt: 'Gallery Image 7', category: 'all' },
    { id: 8, src: '/placeholder.jpg', alt: 'Gallery Image 8', category: 'all' },
    { id: 9, src: '/placeholder.jpg', alt: 'Gallery Image 9', category: 'all' },
    { id: 10, src: '/placeholder.jpg', alt: 'Gallery Image 10', category: 'all' },
    { id: 11, src: '/placeholder.jpg', alt: 'Gallery Image 11', category: 'all' },
    { id: 12, src: '/placeholder.jpg', alt: 'Gallery Image 12', category: 'all' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative bg-[#F1F0E8] pt-30 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-['Product_Sans']">
            Gallery
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Explore our facility, processes, and premium gold products through our visual gallery.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Responsive grid with equal spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image container with equal aspect ratio */}
                <div className="aspect-square bg-gray-200 relative">
                  {/* Placeholder - Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-500 text-sm text-center px-2">
                      {image.alt}
                    </span>
                  </div>
                  {/* Uncomment below and remove placeholder when you have actual images */}
                  {/* <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  /> */}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              {/* Placeholder - Replace with actual image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
                <span className="text-white text-lg">{selectedImage.alt}</span>
              </div>
              {/* Uncomment below and remove placeholder when you have actual images */}
              {/* <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

