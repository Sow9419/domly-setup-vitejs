import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  // Initialize map function
  const initializeMap = () => {
    if (!mapContainer.current || mapInstance.current) return;

    try {
      mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHRweHgxeDQwMXB5MmptbGw3Z2JsMnB2In0.O8lasM04g4tQoqYS6P5UFw';
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        zoom: 1.5,
        center: [30, 15],
        pitch: 45,
      });

      mapInstance.current = map;

      map.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.scrollZoom.disable();

      const setupMapEffects = () => {
        if (!mapInstance.current) return;
        mapInstance.current.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });
        setMapInitialized(true);
      };

      map.on('style.load', setupMapEffects);

      return map;
    } catch (error) {
      console.error('Error initializing map:', error);
      return null;
    }
  };

  // Setup rotation animation
  const setupRotationAnimation = (map: mapboxgl.Map) => {
    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map) return;
      
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    const events = {
      mousedown: () => { userInteracting = true; },
      dragstart: () => { userInteracting = true; },
      mouseup: () => {
        userInteracting = false;
        spinGlobe();
      },
      touchend: () => {
        userInteracting = false;
        spinGlobe();
      },
      moveend: () => { spinGlobe(); }
    };

    // Add event listeners
    Object.entries(events).forEach(([event, handler]) => {
      map.on(event, handler);
    });

    // Start spinning
    spinGlobe();

    // Return cleanup function
    return () => {
      Object.entries(events).forEach(([event, handler]) => {
        map.off(event, handler);
      });
    };
  };

  useEffect(() => {
    const map = initializeMap();
    let cleanupRotation: (() => void) | undefined;

    if (map) {
      cleanupRotation = setupRotationAnimation(map);
    }

    return () => {
      cleanupRotation?.();
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      setMapInitialized(false);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default Map;