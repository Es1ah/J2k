import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BookAppointmentDialog from '@/components/BookAppointmentDialog'; // Import the new dialog

const Index = () => {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  return (
    <div className="bg-j2k-white text-j2k-black">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/hero-background.png')" }} 
      >
        <div className="absolute inset-0 bg-j2k-black opacity-50"></div>
        <div className="relative z-10 text-j2k-white p-4">
          <img src="/j2k-logo.png" alt="J2K Studios Logo" className="h-24 md:h-32 mx-auto mb-4 animate-fade-in-up" />
          <p className="text-xl md:text-2xl font-sans mb-8 animate-fade-in-up delay-200">
            Capturing Your Most Precious Moments Forever
          </p>
          <Button 
            className="bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-lg px-8 py-6 rounded-none shadow-lg animate-fade-in-up delay-400"
            onClick={() => setIsBookingDialogOpen(true)} // Open the dialog
          >
            Book a Session
          </Button>
        </div>
      </section>

      {/* Introduction / Philosophy */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-sans font-extrabold text-j2k-black mb-8 uppercase tracking-tight">Who We Are</h2>
        <p className="text-lg font-sans max-w-3xl mx-auto leading-relaxed">
          At J2K Studios, we believe every moment tells a story. We are a team of passionate photographers dedicated to capturing the raw emotion, intricate details, and unforgettable memories of your life's most significant events. From the intimate glance of a wedding couple to the bold statement of a commercial brand, we bring a cinematic and candid style to every shot, ensuring your story is told beautifully and authentically.
        </p>
      </section>

      {/* Featured Galleries - Masonry Grid Placeholder */}
      <section className="bg-j2k-black text-j2k-white py-16 px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-sans font-extrabold mb-8 uppercase tracking-tight">Featured Galleries</h2>
        <p className="text-lg font-sans mb-8 leading-relaxed">Explore our diverse portfolio!</p>
        <div className="overflow-hidden relative py-4"> {/* Added overflow-hidden and relative for animation */}
          {/* First row sliding right */}
          <div className="flex animate-slide-right mb-4">
            {[...Array(6)].map((_, i) => (
              <div 
                key={`right-${i}`} 
                className="flex-shrink-0 w-[300px] h-[200px] relative bg-gray-800 flex items-center justify-center border border-j2k-white p-2 overflow-hidden group mx-2"
              >
                <img 
                  src="/placeholder.svg" 
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
                  src="/placeholder.svg" 
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
                  src="/placeholder.svg" 
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
                key={`left-dup-${i}`} 
                className="flex-shrink-0 w-[300px] h-[200px] relative bg-gray-800 flex items-center justify-center border border-j2k-white p-2 overflow-hidden group mx-2"
              >
                <img 
                  src="/placeholder.svg" 
                  alt={`Gallery Item ${i + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-j2k-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-j2k-white font-sans text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="mt-12 bg-j2k-red hover:bg-j2k-red/80 text-j2k-white text-lg px-8 py-4 rounded-none shadow-lg">
          View All Portfolio
        </Button>
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