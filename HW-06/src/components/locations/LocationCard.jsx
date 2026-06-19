import { Heart } from "lucide-react";
import { Button } from "../ui/button";

function LocationCard({ data, id, isFavorite, onToggleFavorite }) {
  return (
    <div className="space-y-4">

      <div className="flex items-start justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            {data.name}
          </h1>

          <p className="text-sm text-gray-500">
            {data.address}
          </p>
        </div>

        <Button
          onClick={() => onToggleFavorite(String(id))}
          className={`flex items-center gap-2 transition ${
            isFavorite
              ? "bg-gray-300 hover:bg-gray-500 text-black"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          <Heart size={16} fill={isFavorite ? "black" : "white"} />
          {isFavorite ? "Remove from favorite" : "Add to favorite"}
        </Button>

      </div>

      <div className="flex gap-6 text-sm text-gray-600">
        <span>
          Type: <b className="text-gray-800">{data.type}</b>
        </span>

        <span>
          Rating: <b className="text-gray-800">{data.rating}</b>
        </span>
      </div>

    </div>
  );
}

export default LocationCard;