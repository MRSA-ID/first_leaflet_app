import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";

import nationalParks from "../Data/national-parks.json";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../assets/marker-icon-2x.png").default,
  iconUrl: require("../assets/marker-icon.png").default,
  shadowUrl: require("../assets/marker-shadow.png").default,
});

console.log(nationalParks.features[0]);
const MapsGeoJson = () => {
  return (
    <MapContainer center={[39.5, -98.35]} zoom={4} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={nationalParks.features} />
    </MapContainer>
  );
};

export default MapsGeoJson;
