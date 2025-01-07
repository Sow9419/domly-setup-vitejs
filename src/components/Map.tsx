import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { properties } from '@/data/properties';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with temporary token
    // Replace this with your Mapbox token when available
    mapboxgl.accessToken = mapboxToken || 'your-mapbox-token';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.3522, 48.8566], // Paris coordinates
      zoom: 12
    });

    // Add markers for properties
    properties.forEach(property => {
      // Create marker element
      const el = document.createElement('div');
      el.className = 'property-marker';
      el.style.width = '50px';
      el.style.height = '50px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid #0EA5E9';
      el.style.overflow = 'hidden';
      
      // Add property image
      const img = document.createElement('img');
      img.src = property.images[0].url;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      el.appendChild(img);

      // Add marker to map
      // Note: Replace with actual coordinates when available
      new mapboxgl.Marker(el)
        .setLngLat([2.3522, 48.8566])
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="relative w-full h-full">
      {!mapboxToken && (
        <div className="absolute top-4 left-4 right-4 z-10 bg-white p-4 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Enter your Mapbox token"
            className="w-full p-2 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-2">
            Get your token at mapbox.com
          </p>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;