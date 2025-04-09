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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}