import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

function LocationMarkerCluster({ locations }) {
  return (
    <MarkerClusterGroup key={locations.map(l => l.id).join("-")}>
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>
            <div style={{ minWidth: "180px" }}>
              <h3>{loc.name}</h3>
              <p>{loc.address}</p>
              <p>Type: {loc.type}</p>
              <p>⭐ {loc.rating}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}

export default LocationMarkerCluster;