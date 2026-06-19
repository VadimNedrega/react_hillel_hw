import { useState } from "react";
import { Link } from "react-router-dom";

function FavoriteCard({ loc, onRemove }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden">

        {/* IMAGE */}
        <div className="h-32 w-full overflow-hidden">
          <img
            src={loc.image}
            alt={loc.name}
            onClick={() => setOpen(true)}
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">

          <h3 className="text-lg font-semibold text-gray-800">
            {loc.name}
          </h3>

          <p className="text-sm text-gray-500">
            {loc.address}
          </p>

          <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            {loc.type}
          </span>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-3">

            <Link
              to={`/dashboard/location/${loc.id}`}
              className="text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
            >
              View
            </Link>

            <button
              onClick={() => onRemove(loc.id)}
              className="text-sm px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition"
            >
              Remove
            </button>

          </div>

        </div>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={loc.image}
            alt={loc.name}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </>
  );
}

export default FavoriteCard;