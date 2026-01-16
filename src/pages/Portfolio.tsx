"use client";

import React from 'react';
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';

const Portfolio = () => {
  const portfolioImages = Array.from({ length: 11 }, (_, i) => `/portfolio-images/portfolio-${i + 1}.jpeg`);

  const portfolioItems = Array(24).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: ['Portrait', 'Event', 'Commercial', 'Creative'][i % 4],
    image: portfolioImages[i % portfolioImages.length], // Cycle through the 11 images
  }));

  return (
    <div className="bg-j2k-white text-j2k-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-8xl font-black font-sans mb-8 uppercase tracking-tight">
            <span className="bg-gradient-to-r from-j2k-black to-j2k-red bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-3xl font-sans mb-12 max-w-4xl mx-auto text-j2k-black">
            Explore our diverse collection of captured moments and visual stories
          </p>
          <RippleButton variant="j2kRedLarge">
            View All Projects
          </RippleButton>
        </div>
      </section>

      {/* Portfolio Grid with Sliding Animation */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Row 1 - Sliding Left to Right */}
          <div className="flex mb-8 animate-slide-right">
            {portfolioItems.slice(0, 6).map((item) => (
              <div key={`right-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(0, 6).map((item) => (
              <div key={`right-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Sliding Right to Left */}
          <div className="flex mb-8 animate-slide-left">
            {portfolioItems.slice(6, 12).map((item) => (
              <div key={`left-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(6, 12).map((item) => (
              <div key={`left-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - Sliding Left to Right */}
          <div className="flex mb-8 animate-slide-right">
            {portfolioItems.slice(12, 18).map((item) => (
              <div key={`right2-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(12, 18).map((item) => (
              <div key={`right2-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4 - Sliding Right to Left */}
          <div className="flex animate-slide-left">
            {portfolioItems.slice(18, 24).map((item) => (
              <div key={`left2-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(18, 24).map((item) => (
              <div key={`left2-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-j2k-red">{item.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;