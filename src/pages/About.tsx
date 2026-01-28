"use client";

import React from 'react';
import { Users, Camera, Award } from 'lucide-react';

// Import specific images for the About page
import aboutUsTeam from '/images/WhatsApp Image 2026-01-22 at 12.49.18 PM.jpeg';

const About: React.FC = () => {
  return (
    <div className="bg-j2k-white text-j2k-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center bg-j2k-black text-j2k-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold font-sans mb-6 uppercase tracking-tight">
            About J2K Studios
          </h1>
          <p className="text-lg md:text-xl font-sans leading-relaxed">
            At J2k we Believe in Every smile. Every milestone and Every memory. Therefore We created a space where all your special moments comes alive.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-j2k-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 flex justify-center"> {/* Added flex justify-center to center the image */}
            <img
              src={aboutUsTeam}
              alt="J2K Studios Team"
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-lg" // Added max-w-lg to reduce size
            />
          </div>
          <div className="md:order-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-j2k-black mb-6 uppercase tracking-tight">Our Story</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Founded on a deep love for visual storytelling, J2K Studios began with a simple mission: to freeze time and preserve memories that truly matter. What started as a passion project has grown into a full-service photography studio, renowned for its artistic approach and unwavering commitment to client satisfaction.
            </p>
            <p className="text-lg font-sans text-gray-700 leading-relaxed">
              We believe that every individual, family, and event has a unique narrative, and it's our privilege to capture it with authenticity and creativity. Our journey is defined by the smiles we've captured, the milestones we've documented, and the lasting relationships we've built with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-j2k-black mb-12 uppercase tracking-tight">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <Users size={48} className="text-j2k-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-j2k-black mb-2">Client-Centric</h3>
              <p className="text-gray-700">Your vision is our priority. We listen, collaborate, and deliver results that exceed expectations.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <Camera size={48} className="text-j2k-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-j2k-black mb-2">Artistic Excellence</h3>
              <p className="text-gray-700">We combine technical mastery with creative flair to produce stunning, timeless imagery.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <Award size={48} className="text-j2k-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-j2k-black mb-2">Unforgettable Experience</h3>
              <p className="text-gray-700">From consultation to delivery, we ensure a seamless, enjoyable, and memorable photography journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;