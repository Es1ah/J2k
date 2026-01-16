"use client";

import React from 'react';
import { Users, Camera, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-j2k-white text-j2k-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center bg-j2k-black text-j2k-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold font-sans mb-6 uppercase tracking-tight">
            About J2K Studios
          </h1>
          <p className="text-lg md:text-xl font-sans leading-relaxed">
            Capturing life's most precious moments with passion, precision, and a personal touch.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-j2k-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img
              src="/portfolio-images/portfolio-1.jpeg" // Using portfolio image 1
              alt="J2K Studios Team"
              className="rounded-lg shadow-xl object-cover w-full h-auto"
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

      {/* Meet the CEO Section */}
      <section className="py-16 px-4 bg-j2k-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-j2k-black mb-12 uppercase tracking-tight">Meet Our CEO</h2>
          <div className="flex flex-col items-center">
            <img
              src="/portfolio-images/portfolio-6.jpeg" // Using portfolio image 6 for CEO
              alt="CEO of J2K Studios"
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 border-4 border-j2k-red"
            />
            <h3 className="text-3xl font-script text-j2k-red mb-2">John Doe</h3>
            <p className="text-xl font-semibold text-j2k-black mb-4">Founder & CEO</p>
            <p className="text-lg font-sans text-gray-700 leading-relaxed max-w-2xl mx-auto">
              John Doe, the visionary behind J2K Studios, embarked on his photographic journey over a decade ago with a single camera and an unyielding passion for capturing the human spirit. His dedication to craftsmanship and his ability to connect with clients on a personal level quickly set J2K Studios apart. John believes that photography is more than just taking pictures; it's about telling stories, preserving legacies, and creating art that resonates for generations. Under his leadership, J2K Studios continues to push creative boundaries and deliver unparalleled photographic experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;