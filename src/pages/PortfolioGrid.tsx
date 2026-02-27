"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowLeft, Maximize2 } from 'lucide-react';
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';

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

const PortfolioGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = [
    portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6,
    portfolio7, portfolio8, portfolio9, portfolio10, portfolio11, portfolio12,
    newImg1, newImg2, newImg3, newImg4, newImg5
  ];

  return (
    <div className="bg-j2k-white min-h-screen pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-j2k-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/portfolio">
            <RippleButton variant="outline" className="flex items-center gap-2 border-j2k-black text-j2k-black hover:bg-j2k-black hover:text-j2k-white rounded-none">
              <ArrowLeft size={18} />
              Back to Portfolio
            </RippleButton>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">All Projects</h1>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="relative aspect-square overflow-hidden cursor-pointer group bg-gray-100"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Project ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-j2k-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={img} 
                    alt="Full view" 
                    className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                  />
                  <DialogClose className="absolute -top-12 right-0 text-white hover:text-j2k-red transition-colors">
                    <X size={32} />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;