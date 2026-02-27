"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';

// Import existing portfolio images
import portfolio1 from '/portfolio-images/portfolio-1.jpg';
import portfolio2 from '/portfolio-images/portfolio-2.jpg';
import portfolio3 from '/portfolio-images/portfolio-3.jpg';
import portfolio4 from '/portfolio-images/portfolio-4.jpg';
import portfolio5 from '/portfolio-images/portfolio-5.jpg';
import portfolio6 from '/portfolio-images/portfolio-6.jpg';
import portfolio7 from '/portfolio-images/portfolio-7.jpg';
import portfolio8 from '/portfolio-images/portfolio-8.jpg';
import portfolio9 from '/portfolio-images/portfolio-9.jpg';
import portfolio10 from '/portfolio-images/portfolio-10.jpg';
import portfolio11 from '/portfolio-images/portfolio-11.jpg';
import portfolio12 from '/portfolio-images/portfolio-12.jpg';

// Import new images from src
import newImg1 from '../IMG_2944.JPG.jpeg';
import newImg2 from '../WhatsApp Image 2026-02-26 at 4.32.46 PM.jpeg';
import newImg3 from '../WhatsApp Image 2026-02-26 at 5.03.50 PM.jpeg';
import newImg4 from '../WhatsApp Image 2026-02-26 at 5.04.42 PM.jpeg';
import newImg5 from '../WhatsApp Image 2026-02-26 at 5.05.20 PM.jpeg';

const Portfolio = () => {
  // Define the portfolio images array including new images
  const portfolioImages = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
    portfolio11,
    portfolio12,
    newImg1,
    newImg2,
    newImg3,
    newImg4,
    newImg5,
  ];

  // Create portfolio items, cycling through the images
  const portfolioItems = Array(32).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: ['Portrait', 'Event', 'Commercial', 'Creative'][i % 4],
    image: portfolioImages[i % portfolioImages.length],
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
          <Link to="/portfolio/grid">
            <RippleButton variant="j2kRedLarge">
              View All Projects
            </RippleButton>
          </Link>
        </div>
      </section>

      {/* Portfolio Grid with Sliding Animation */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Row 1 - Sliding Left to Right */}
          <div className="flex mb-8 animate-slide-right">
            {portfolioItems.slice(0, 8).map((item) => (
              <div key={`right-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(0, 8).map((item) => (
              <div key={`right-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Sliding Right to Left */}
          <div className="flex mb-8 animate-slide-left">
            {portfolioItems.slice(8, 16).map((item) => (
              <div key={`left-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(8, 16).map((item) => (
              <div key={`left-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - Sliding Left to Right */}
          <div className="flex mb-8 animate-slide-right">
            {portfolioItems.slice(16, 24).map((item) => (
              <div key={`right2-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(16, 24).map((item) => (
              <div key={`right2-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4 - Sliding Right to Left */}
          <div className="flex animate-slide-left">
            {portfolioItems.slice(24, 32).map((item) => (
              <div key={`left2-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {portfolioItems.slice(24, 32).map((item) => (
              <div key={`left2-dup-${item.id}`} className="flex-shrink-0 w-80 h-64 mx-4 relative group">
                <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-j2k-red/20 group-hover:bg-j2k-red/40 transition-all duration-300 flex items-center justify-center">
                    {/* Text removed as requested */}
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