import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 48.0731315612793,
  lng: -1.840972661972046,
};

export default function MapComponent() {
  const googleMapsApiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY ?? '';

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API key is missing. Please check your environment variables.</div>;
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
  });

  if (loadError) return <div>Error loading maps. Please try again later.</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      aria-label="Google Map showing the location"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}