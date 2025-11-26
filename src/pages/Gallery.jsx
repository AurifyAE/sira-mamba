import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryImages';
import video1 from '../assets/gallery/videos/CV4791.mp4';
import video2 from '../assets/gallery/videos/CV4793.mp4';
import video3 from '../assets/gallery/videos/CV4809.mp4';
import video4 from '../assets/gallery/videos/CV4821.mp4';

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});
  const videoRefs = useRef({});
  const galleryVideos = [
    { id: 1, src: video1, title: 'Molten Gold Pouring' },
    { id: 2, src: video2, title: 'Refinery Operations' },
    { id: 3, src: video3, title: 'Precision Assaying' },
    { id: 4, src: video4, title: 'Smelting & Casting' },
  ];

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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
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
                <div className="bg-gray-200 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  
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

      {/* Videos Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Product_Sans']">Videos</h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              A closer look at our refining processes and craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="relative">
                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current[video.id] = el;
                      }
                    }}
                    src={video.src}
                    loop
                    muted
                    playsInline
                    poster=""
                    className="w-full h-64 object-cover"
                    onPlay={() =>
                      setPlayingVideos((prev) => ({ ...prev, [video.id]: true }))
                    }
                    onPause={() =>
                      setPlayingVideos((prev) => ({ ...prev, [video.id]: false }))
                    }
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const videoEl = videoRefs.current[video.id];
                      if (!videoEl) return;
                      if (videoEl.paused) {
                        videoEl.play();
                      } else {
                        videoEl.pause();
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <span className="w-16 h-16 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-black/80 transition">
                      {playingVideos[video.id] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75Zm9.75.75a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-12Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M5.25 4.5v15l13.5-7.5-13.5-7.5Z" />
                        </svg>
                      )}
                    </span>
                  </button>
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
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

