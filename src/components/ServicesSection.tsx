"use client";

import React from 'react';
import { Camera, Heart, Briefcase, Sparkles } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
    <div className="p-3 rounded-full bg-j2k-red text-j2k-white mb-4">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold text-j2k-black mb-2">{title}</h3>
    <p className="text-gray-700 text-base leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Capture your unique personality with stunning individual, family, and professional portraits.",
    },
    {
      icon: Heart,
      title: "Event Coverage",
      description: "From weddings to birthdays, we document every precious moment with a candid and artistic eye.",
    },
    {
      icon: Briefcase,
      title: "Commercial & Brand",
      description: "Elevate your brand with high-quality product photography, corporate headshots, and marketing visuals.",
    },
    {
      icon: Sparkles,
      title: "Creative Shoots",
      description: "Bring your imaginative concepts to life with our bespoke creative and editorial photography services.",
    },
  ];

  return (
    <section className="bg-j2k-white text-j2k-black py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-j2k-black mb-8 uppercase tracking-tight">
          Our Services
        </h2>
        <p className="text-lg font-sans max-w-3xl mx-auto leading-relaxed mb-12">
          At J2K Studios, we offer a comprehensive range of photography services tailored to meet your unique needs. We are dedicated to capturing your vision with creativity and precision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;