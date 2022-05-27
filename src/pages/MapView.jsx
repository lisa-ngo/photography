import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';

// map code from 
// https://documentation.maptiler.com/hc/en-us/articles/4405444890897-How-to-display-MapLibre-GL-JS-map-using-React-JS

export default function MapView () {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(151.210);
  const [lat] = useState(-33.865);
  const [zoom] = useState(5);
  const [API_KEY] = useState('He6LpYj69MXCrmZ13bYT');

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
  });

  return <>
    <h1>Map</h1>
    <div className="pagecontainer">
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </div>
  </>
}