"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface MapComponentProps {
  position: [number, number];
  popupText: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ position, popupText }) => {
  const [lat, lng] = position;
  // OpenStreetMap embed URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`;
  
  // Google Maps external URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="h-full w-full min-h-[300px] relative border-2 border-j2k-red/20 group">
      <iframe
        title="J2K Studios Location"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Overlay Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-j2k-red text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg hover:bg-j2k-black transition-colors"
        >
          <ExternalLink size={14} />
          Open in Google Maps
        </a>
      </div>

      <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] text-gray-500 rounded shadow-sm">
        {popupText}
      </div>
    </div>
  );
};

export default MapComponent;