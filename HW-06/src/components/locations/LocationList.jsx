import { useState } from "react";
import LocationMap from "../map/LocationMap";
import LocationShipmentsChart from "./LocationShipmentsChart";
import LocationCard from "./LocationCard";

function LocationList({ data, id, isFavorite, onToggleFavorite }) {
  const [openImage, setOpenImage] = useState(false);

  return (
    <div className="space-y-6">

      <LocationCard
        data={data}
        id={id}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />

      <div className="flex items-center gap-4">

        <img
          src={data.image}
          alt={data.name}
          onClick={() => setOpenImage(true)}
          className="w-20 h-20 rounded-xl object-cover border shadow-sm cursor-pointer hover:opacity-90 transition"
        />

        <div className="flex gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 bg-gray-100 rounded-full">
            {data.city}
          </span>

          <span className="px-2 py-1 bg-gray-100 rounded-full">
            {data.type}
          </span>
        </div>

      </div>

      <div className="flex gap-6 text-sm text-gray-600">
        <span>
          Rating: <b className="text-gray-800">{data.rating}</b>
        </span>

        <span>
          Shipments: <b className="text-gray-800">{data.shipments}</b>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="border rounded-lg overflow-hidden">
          <LocationMap location={data} />
        </div>

        <div className="border rounded-lg p-3">
          <LocationShipmentsChart location={data} />
        </div>

      </div>

      {openImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[2000]"
          onClick={() => setOpenImage(false)}
        >
          <img
            src={data.image}
            alt={data.name}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}

    </div>
  );
}

export default LocationList;