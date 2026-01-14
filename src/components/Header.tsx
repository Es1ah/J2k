"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/" className="text-lg font-sans hover:text-j2k-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
      <Link to="/portfolio" className="text-lg font-sans hover:text-j2k-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
      <Link to="/services" className="text-lg font-sans hover:text-j2k-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
      <Link to="/about" className="text-lg font-sans hover:text-j2k-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
      <Link to="/contact" className="text-lg font-sans hover:text-j2k-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-j2k-black text-j2k-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/j2k-logo.png" alt="J2K Studios Logo" className="h-10 md:h-12" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks}
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-j2k-white hover:bg-j2k-red/20">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-j2k-black text-j2k-white border-j2k-white border-l-2 flex flex-col">
            <Link to="/" className="flex items-center justify-center py-4">
              <img src="/j2k-logo.png" alt="J2K Studios Logo" className="h-12" />
            </Link>
            <nav className="flex flex-col space-y-4 mt-8 text-center">
              {navLinks}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;