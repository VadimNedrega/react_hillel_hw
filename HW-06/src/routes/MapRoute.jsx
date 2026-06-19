import { useMemo, useState } from "react";
import { useLocations } from "../hooks/useLocations";
import LocationsMap from "../components/map/LocationsMap";
import { useSearchParams, Link } from "react-router-dom";
import Loader from "../components/ui/Loader";

function MapRoute() {
  const [bounds, setBounds] = useState(null);

  const { data: locations = [], isLoading, isError } = useLocations();

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";

  const visibleLocations = useMemo(() => {
    let filtered = locations;

    if (bounds) {
      filtered = filtered.filter((loc) =>
        bounds.contains([loc.lat, loc.lng])
      );
    }

    if (search) {
      filtered = filtered.filter((loc) =>
        loc.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((loc) => loc.type === type);
    }

    return filtered;
  }, [locations, bounds, search, type]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading map</p>;

  return (
    <div>

      <div className="flex items-center justify-between mt-2 mb-4">

        <div className="flex items-center gap-2 text-sm text-gray-600 font-bold">
          <span>Visible locations:</span>

          <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 border">
            {visibleLocations.length}
          </span>

          <span>/</span>

          <span>{locations.length}</span>
        </div>

        <div className="flex gap-2 items-center w-full p-2">
          <input
            value={search}
            placeholder="Search by name"
            onChange={(e) =>
              setSearchParams((prev) => {
                const params = new URLSearchParams(prev);

                if (e.target.value) {
                  params.set("search", e.target.value);
                } else {
                  params.delete("search");
                }

                return params;
              })
            }
            className="w-64 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={type}
            onChange={(e) =>
              setSearchParams((prev) => {
                const params = new URLSearchParams(prev);

                if (e.target.value) {
                  params.set("type", e.target.value);
                } else {
                  params.delete("type");
                }

                return params;
              })
            }
            className="w-40 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
          >
            <option value="">All</option>
            <option value="branch">Branch</option>
            <option value="locker">Locker</option>
            <option value="pickup">Pickup Point</option>
          </select>
        </div>

      </div>

      <div className="flex gap-4 mt-5">
        <div className="w-1/3 bg-grey border rounded-xl shadow-sm p-2 h-[375px] overflow-y-auto">
          <h2 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2 px-2">
            Locations
          </h2>

          {visibleLocations.length === 0 ? (
            <p className="text-sm text-gray-400 px-2">No locations found</p>
          ) : (
            <div className="space-y-1 font-bold">
              {visibleLocations.map((loc) => (
                <Link
                  key={loc.id}
                  to={`/dashboard/location/${loc.id}`}
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="w-2/3">
          <LocationsMap
            locations={visibleLocations}
            onBoundsChange={setBounds}
          />
        </div>
      </div>

    </div >
  );
}

export default MapRoute;