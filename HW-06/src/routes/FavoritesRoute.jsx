import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favoriteStore";
import { useLocations } from "../hooks/useLocations";

function FavoritesRoute() {
  const favoriteIds = useFavoritesStore((s) => s.favoriteIds);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);

  const { data: locations, isLoading, isError } = useLocations();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading favorites</p>;

  const favoriteLocations = (locations || []).filter((loc) =>
    favoriteIds.includes(loc.id)
  );

  if (favoriteLocations.length === 0) {
    return <p>No favorite locations yet</p>;
  }

  return (
    <div>
      <h1>Favorites</h1>

      <ul>
        {favoriteLocations.map((loc) => (
          <li key={loc.id}>
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
            <p>{loc.type}</p>

            <Link to={`/dashboard/location/${loc.id}`}>
              View details
            </Link>

            <button onClick={() => removeFavorite(loc.id)}>
              Remove from favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesRoute;