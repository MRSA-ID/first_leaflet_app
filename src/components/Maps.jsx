import React from "react";
import image from "../assets/map-marker.png";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Circle,
  Polyline,
  Tooltip,
  LayersControl,
  LayerGroup,
  FeatureGroup,
} from "react-leaflet";
import L from "leaflet";

var myIcon = L.icon({
  iconUrl: image,
  iconSize: [41, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const Maps = ({ marker }) => {
  const home = [marker.lat, marker.lng];
  const circleGeo = [-6.917092889041664, 107.63796592359316];
  return (
    <div>
      <MapContainer
        center={home}
        zoom={8}
        scrollWheelZoom={false}
        id="mapid"
        style={{ height: "500px" }}
      >
        <LayersControl>
          <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Marker with popup">
            <LayerGroup>
              <Marker position={circleGeo} icon={myIcon}>
                <Popup>ini kantor CircleGeo</Popup>
              </Marker>
              <Marker position={home} icon={myIcon}>
                <Popup>Ini rumah rama</Popup>
              </Marker>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Layer group with circles">
            <LayerGroup>
              <Circle center={home} radius={400}>
                <Tooltip direction="top" opacity={1}>
                  My Home
                </Tooltip>
              </Circle>
              <Circle center={circleGeo} color="green" radius={400}>
                <Tooltip direction="top" opacity={1}>
                  Kantor CircleGeo
                </Tooltip>
              </Circle>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="PolyLine">
            <FeatureGroup color="purple">
              <Popup>Popup in FeatureGroup</Popup>
              <Polyline positions={[home, circleGeo]} color="blue" />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Maps;
