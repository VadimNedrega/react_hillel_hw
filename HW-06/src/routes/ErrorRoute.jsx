import { useFavoritesStore } from "../store/favoriteStore";
import { useLocations } from "../hooks/useLocations";
import { Heart } from "lucide-react";
import FavoritesList from "../components/favorites/FavoriteList";
import Loader from "../components/ui/Loader"

function FavoritesRoute() {
  const favoriteIds = useFavoritesStore((s) => s.favoriteIds);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);

  const { data: locations, isLoading, isError } = useLocations();

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading favorites</p>;

  const favoriteLocations = (locations || []).filter((loc) =>
    favoriteIds.includes(loc.id)
  );

  if (favoriteLocations.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <Heart className="mx-auto mb-2 opacity-40" />
        No favorite locations yet
      </div>
    );
  }

  return (
    <div className="space-y-4">

      <h1 className="text-2xl font-semibold text-gray-800">
        Favorites
      </h1>

      <FavoritesList
        locations={favoriteLocations}
        onRemove={removeFavorite}
      />

    </div>
  );
}

export default FavoritesRoute;