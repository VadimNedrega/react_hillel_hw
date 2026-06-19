import { useParams } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import { useFavoritesStore } from "../store/favoriteStore";
import LocationList from "../components/locations/LocationList";
import Loader from "../components/ui/Loader";

function LocationDetailsRoute() {
  const { id } = useParams();

  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const favorites = useFavoritesStore((s) => s.favoriteIds);

  const isFavorite = favorites.includes(String(id));

  const { data, isLoading, isError } = useLocation(String(id));

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading location</p>;

  return (
    <LocationList
      data={data}
      id={id}
      isFavorite={isFavorite}
      onToggleFavorite={toggleFavorite}
    />
  );
}

export default LocationDetailsRoute;