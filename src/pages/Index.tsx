import React from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="bg-j2k-white text-j2k-black">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/placeholder.svg')" }} // Placeholder image
      >
        <div className="absolute inset-0 bg-j2k-black opacity-50"></div>
        <div className="relative z-10 text-j2k-white p-4">
          <img src="/j2k-logo.png" alt="J2K Studios Logo" className="h-24 md:h-32 mx-auto mb-4 animate-fade-in-up" />
          <p className="text-xl md:text-2xl font-sans mb-8 animate-fade-in-up delay-200">
            Capturing Your Most Precious Moments Forever
          </p>
          <Button className="bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-lg px-8 py-6 rounded-full shadow-lg animate-fade-in-up delay-400">
            Book a Session
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-script text-j2k-black mb-8">Who We Are</h2>
        <p className="text-lg font-sans max-w-3xl mx-auto leading-relaxed">
          At J2K Studios, we believe every moment tells a story. We are a team of passionate photographers dedicated to capturing the raw emotion, intricate details, and unforgettable memories of your life's most significant events. From the intimate glance of a wedding couple to the bold statement of a commercial brand, we bring a cinematic and candid style to every shot, ensuring your story is told beautifully and authentically.
        </p>
      </section>

      {/* Placeholder for Featured Galleries */}
      <section className="bg-j2k-black text-j2k-white py-16 px-4 text-center">
        <h2 className="text-4xl font-script mb-8">Featured Galleries</h2>
        <p className="text-lg font-sans">Coming Soon: Explore our diverse portfolio!</p>
        {/* Add gallery previews here */}
      </section>

      {/* Placeholder for Testimonials */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-script text-j2k-black mb-8">What Our Clients Say</h2>
        <p className="text-lg font-sans">Coming Soon: Hear from our happy clients!</p>
        {/* Add testimonial carousel/grid here */}
      </section>
    </div>
  );
};

export default Index;