"use client";

import React from 'react';

interface MapComponentProps {
  position: [number, number];
  popupText: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ position, popupText }) => {
  // Using an OpenStreetMap iframe for maximum stability and to avoid library conflicts
  const [lat, lng] = position;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="h-full w-full min-h-[300px] relative border-2 border-j2k-red/20">
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
      <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] text-gray-500 rounded shadow-sm">
        {popupText}
      </div>
    </div>
  );
};

export default MapComponent;