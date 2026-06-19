import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

import MapBoundsHandler from "./MapBoundsHandler";
import LocationMarkerCluster from "./LocationMarkerCluster";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LocationsMap({ locations, onBoundsChange }) {
  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={6}
      style={{ height: "375px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MapBoundsHandler onBoundsChange={onBoundsChange} />

      <LocationMarkerCluster locations={locations} />
    </MapContainer>
  );
}

export default LocationsMap;