import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-j2k-black text-j2k-white p-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="flex justify-center md:justify-start mb-2">
            <img src="/j2k-logo.png" alt="J2K Studios Logo" className="h-10" />
          </Link>
          <p className="text-sm font-sans">&copy; {new Date().getFullYear()} J2K Studios. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="#" className="text-j2k-white hover:text-j2k-red transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </Link>
          <Link to="#" className="text-j2k-white hover:text-j2k-red transition-colors" aria-label="Facebook">
            <Facebook size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;