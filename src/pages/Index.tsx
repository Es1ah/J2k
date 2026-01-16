"use client";

import React, { useState, useEffect, useRef } from 'react';
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';
import BookAppointmentDialog from '@/components/BookAppointmentDialog';
import DotGrid from '@/components/DotGrid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const introTextRef = useRef(null);
  const whoWeAreRef = useRef(null);

  const portfolioImages = Array.from({ length: 11 }, (_, i) => `/portfolio-images/portfolio-${i + 1}.jpeg`);

  useEffect(() => {
    // Animation for "Capturing Your Most Precious Moments Forever" text
    gsap.fromTo(introTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introTextRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animation for "Who We Are" section
    gsap.fromTo(whoWeAreRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whoWeAreRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-j2k-white text-j2k-black">
      {/* Hero Section - FULL SCREEN */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <DotGrid
          dotSize={6}
          gap={25}
          baseColor="#000000"
          activeColor="#EF4444"
          proximity={120}
          shockRadius={200}
          shockStrength={3}
          resistance={1000}
          returnDuration={2}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 text-j2k-white p-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full gap-y-6">
          <img
            src="/j2k-logo.png"
            alt="J2K Studios Logo"
            className="h-24 md:h-32 mx-auto animate-fade-in-up drop-shadow-2xl"
          />
          
          <div ref={introTextRef}>
            <h1 className="text-5xl md:text-8xl font-black font-sans drop-shadow-2xl leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                Capturing Your Favourite
              </span>
              <span className="bg-gradient-to-r from-j2k-red via-white to-j2k-red bg-clip-text text-transparent block mt-4">
                Moments Forever
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up delay-400">
            <RippleButton
              variant="j2kRed"
              onClick={() => setIsBookingDialogOpen(true)}
              className="shadow-2xl text-xl px-10 py-6"
            >
              Book a Session
            </RippleButton>
          </div>
        </div>
      </section>

      {/* Introduction / Philosophy */}
      <section ref={whoWeAreRef} className="container mx-auto py-32 px-4 text-center">
        <h2 className="text-6xl md:text-7xl font-sans font-extrabold text-j2k-black mb-16 uppercase tracking-tight">
          Who We Are
        </h2>
        <p className="text-xl md:text-2xl font-sans max-w-4xl mx-auto leading-relaxed">
          At J2K Studios, we believe every moment tells a story. We are a team of passionate photographers dedicated to capturing the raw emotion, intricate details, and unforgettable memories of your life's most significant events. From the intimate glance of a wedding couple to the bold statement of a commercial brand, we bring a cinematic and candid style to every shot, ensuring your story is told beautifully and authentically.
        </p>
      </section>

      {/* Featured Galleries - Masonry Grid Placeholder */}
      <section className="bg-j2k-black text-j2k-white py-16 px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-sans font-extrabold mb-8 uppercase tracking-tight">Featured Galleries</h2>
        <p className="text-lg font-sans mb-8 leading-relaxed">Explore our diverse portfolio!</p>
        <div className="overflow-hidden relative py-4">
          {/* First row sliding right */}
          <div className="flex animate-slide-right mb-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="flex-shrink-0 w-[300px] h-[200px] relative bg-gray-800 flex items-center justify-center border border-j2k-white p-2 overflow-hidden group mx-2"
              >
                <img
                  src={portfolioImages[i % portfolioImages.length]} // Use actual portfolio images
                  alt={`Gallery Item ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-j2k-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-j2k-white font-sans text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</p>
                </div>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`right-dup-${i}`}
                className="flex-shrink-0 w-[300px] h-[200px] relative bg-gray-800 flex items-center justify-center border border-j2k-white p-2 overflow-hidden group mx-2"
              >
                <img
                  src={portfolioImages[i % portfolioImages.length]} // Use actual portfolio images
                  alt={`Gallery Item ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-j2k-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-j2k-white font-sans text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row sliding left */}
          <div className="flex animate-slide-left">
            {[...Array(6)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="flex-shrink-0 w-[300px] h-[200px] relative bg-gray-800 flex items-center justify-center border border-j2k-white p-2 overflow-hidden group mx-2"
              >
                <img
                  src={portfolioImages[(i + 6) % portfolioImages.length]} // Use actual portfolio images, offset for variety
                  alt={`Gallery Item ${i + 7}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-j2k-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-j2k-white font-sans text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</p>
                </div>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`left-dup-${i}`}
                className="flex-shrink-0 w-[300px] h-[200px] relative bg-gray-800 flex items-center justify-center border border-j2k-white p-2 overflow-hidden group mx-2"
              >
                <img
                  src={portfolioImages[(i + 6) % portfolioImages.length]} // Use actual portfolio images, offset for variety
                  alt={`Gallery Item ${i + 7}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-j2k-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-j2k-white font-sans text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/portfolio">
          <RippleButton className="mt-12 bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-lg px-8 py-4 rounded-none shadow-lg">
            View All Portfolio
          </RippleButton>
        </Link>
      </section>

      {/* Testimonials Placeholder */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-sans font-extrabold text-j2k-black mb-8 uppercase tracking-tight">What Our Clients Say</h2>
        <p className="text-lg font-sans leading-relaxed">Coming Soon: Hear from our happy clients!</p>
        {/* Add testimonial carousel/grid here */}
      </section>

      <BookAppointmentDialog isOpen={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen} />
    </div>
  );
};

export default Index;