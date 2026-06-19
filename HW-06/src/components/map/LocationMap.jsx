import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocationMap({ location }) {
  if (!location) return null;

  return (
    <div className="w-full h-[350px]">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        className="w-full h-full rounded-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[location.lat, location.lng]}>
          <Popup>
            <div>
              <div className="font-semibold">{location.name}</div>
              <div className="text-sm text-gray-600">
                {location.address}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;