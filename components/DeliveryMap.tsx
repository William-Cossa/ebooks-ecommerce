"use client";
import React, { useMemo } from "react";
import { GoogleMap, LoadScript, Polygon, Marker } from "@react-google-maps/api";
import { Map } from "lucide-react";
import {
  deliveryBoundaryPoints,
  deliveryPolygon,
} from "@/config/google-maps-zones";

const mapContainerStyle = {
  width: "100%",
  height: "396px",
};

const center = { lat: -25.9553, lng: 32.5892 };

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
  ],
};

const DeliveryMap = () => {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-300 ">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API || ""}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
          options={options}
        >
          <Polygon
            paths={deliveryPolygon}
            options={{
              fillColor: "#10B981",
              fillOpacity: 0.3,
              strokeColor: "#10B981",
              strokeOpacity: 0.9,
              strokeWeight: 3,
            }}
          />

          {/* Marcadores dos pontos principais */}
          {/* {deliveryBoundaryPoints.map((point, index) => (
            <Marker
              key={index}
              position={{ lat: point.lat, lng: point.lng }}
              title={point.name}
              icon={customIcon}
            />
          ))} */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DeliveryMap;
