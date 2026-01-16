"use client";

import React, { useState } from 'react';
import { RippleButton } from '@/components/animate-ui/components/buttons/ripple';
import { Link } from 'react-router-dom';
import ServicesSection from '@/components/ServicesSection';
import BookAppointmentDialog from '@/components/BookAppointmentDialog'; // Import BookAppointmentDialog

interface PackageItem {
  id: string;
  name: string;
  price: string;
}

interface PackageCategory {
  title: string;
  items: PackageItem[];
}

const priceList: PackageCategory[] = [
  {
    title: "Birthday packages",
    items: [
      { id: "b4", name: "Birthday Shoot 4", price: "₦65,000.00" },
      { id: "b3", name: "Birthday Shoot 3", price: "₦45,000.00" },
      { id: "b2", name: "Birthday Shoot 2", price: "₦35,000.00" },
      { id: "b1", name: "Birthday Shoot 1", price: "₦25,000.00" },
    ],
  },
  {
    title: "Passports packages",
    items: [
      { id: "up", name: "US Passport (Print)", price: "₦5,000.00" },
      { id: "uc", name: "US Passport Combo", price: "₦9,000.00" },
      { id: "us", name: "US Passport Soft", price: "₦5,350.00" },
    ],
  },
];

const PriceList = () => {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false); // State for the dialog

  return (
    <div className="min-h-screen bg-j2k-white text-j2k-black">
      <ServicesSection />

      <div className="container mx-auto max-w-4xl py-16 px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-16 uppercase tracking-tighter font-sans">
          Price List
        </h1>

        {priceList.map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
              {category.title}
            </h2>
            <div className="space-y-6">
              {category.items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4">
                  <div className="flex-grow mb-2 sm:mb-0">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-lg text-gray-600">{item.price}</p>
                  </div>
                  <div className="flex space-x-3">
                    <RippleButton variant="outline" className="border-j2k-red text-j2k-red hover:bg-j2k-red hover:text-j2k-white rounded-none">
                      Add to cart
                    </RippleButton>
                    <RippleButton
                      variant="j2kRed"
                      className="rounded-none"
                      onClick={() => setIsBookingDialogOpen(true)} // Open dialog on click
                    >
                      Book now
                    </RippleButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BookAppointmentDialog isOpen={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen} /> {/* Render the dialog */}
    </div>
  );
};

export default PriceList;