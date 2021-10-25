import React from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Maps from "./components/Maps";
import MapsGeoJson from "./components/MapsGeoJson";

function App() {
  const marker = {
    lat: -6.315659,
    lng: 106.925204,
  };

  return (
    <div className="App">
      <div>
        <h1>Map Layering Control</h1>
        <Maps marker={marker} />
      </div>
      <div className="destination">
        <h1>Maps Fetching Data GeoJSON</h1>
        <MapsGeoJson />
      </div>
    </div>
  );
}

export default App;
