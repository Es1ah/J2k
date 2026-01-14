import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-j2k-black text-j2k-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-script text-j2k-white hover:text-j2k-red transition-colors">
          J2K Studios
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg font-sans hover:text-j2k-red transition-colors">Home</Link>
          <Link to="/portfolio" className="text-lg font-sans hover:text-j2k-red transition-colors">Portfolio</Link>
          <Link to="/services" className="text-lg font-sans hover:text-j2k-red transition-colors">Services</Link>
          <Link to="/about" className="text-lg font-sans hover:text-j2k-red transition-colors">About Us</Link>
          <Link to="/contact" className="text-lg font-sans hover:text-j2k-red transition-colors">Contact</Link>
        </nav>
        <Button className="md:hidden bg-j2k-red hover:bg-j2k-red/80 text-j2k-white">Menu</Button> {/* Placeholder for mobile menu */}
      </div>
    </header>
  );
};

export default Header;