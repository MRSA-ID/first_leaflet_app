import React from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Polygon,
  Polyline,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import euGeo from "../Data/eu-geo.json";

const MapVectorGrid = () => {
  return (
    <MapContainer
      center={[47.040182144806664, 9.667968750000002]}
      zoom={4}
      style={{ height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {euGeo.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[0],
          item[1],
        ]);
        return (
          <Polygon
            pathOptions={{
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
            }}
            positions={coordinates}
          />
        );
      })}
    </MapContainer>
  );
};

export default MapVectorGrid;
