import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Example of map manipulation
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      map.setZoom(10);
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        ref={mapRef}
      >
        {/* Child components, markers, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapPage;
