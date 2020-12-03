import React, { Component } from "react";
import L from "leaflet";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "../src/Map1.css";

export class Map1 extends Component {
  render() {
    const position = [18.49023, 73.85251];
    var myIcon = L.icon({
      iconUrl: "https://www.flaticon.com/svg/static/icons/svg/684/684908.svg",

      iconSize: [30, 30],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -41],
    });
    return (
      <div className="map-container-main">
        <div className="map-container">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={myIcon}>
              <Popup>PVG's COET,PUNE</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default Map1;
