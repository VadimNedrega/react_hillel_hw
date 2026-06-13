import { useLocation } from "../hooks/useLocation";
import { useParams } from "react-router-dom";
import { useFavoritesStore } from "../store/favoriteStore";


function LocationDetailsRoute() {
  const { id } = useParams();
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const favorites = useFavoritesStore((s) => s.favoriteIds);

  const isFavorite = favorites.includes(String(id));

  const { data, isLoading, isError } = useLocation(String(id));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading location</p>;


  return (
    <div>
      <h1>Location Details</h1>

      <p>Name: {data.name}</p>
      <p>Address: {data.address}</p>
      <p>Type: {data.type}</p>
      <p>Rating: {data.rating}</p>

      <button onClick={() => toggleFavorite(String(id))}>
        {isFavorite ? "★ Remove from favorites" : "☆ Add to favorites"}
      </button>
    </div>
  );
}

export default LocationDetailsRoute;