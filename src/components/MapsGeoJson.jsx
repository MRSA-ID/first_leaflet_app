import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";

import nationalParks from "../national-parks.json";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../assets/marker-icon-2x.png").default,
  iconUrl: require("../assets/marker-icon.png").default,
  shadowUrl: require("../assets/marker-shadow.png").default,
});

const MapsGeoJson = () => {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (!map) return;

    const parksGeoJson = new L.GeoJSON(nationalParks, {
      onEachFeature: (feature = {}, layer) => {
        const { properties = {} } = feature;
        const { Name } = properties;

        if (!Name) return;

        layer.bindPopup(`<p>${Name}</p>`);
      },
    });

    parksGeoJson.addTo(map);
  }, []);

  return (
    <Map
      ref={mapRef}
      center={[39.5, -98.35]}
      zoom={4}
      style={{ height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default MapsGeoJson;
