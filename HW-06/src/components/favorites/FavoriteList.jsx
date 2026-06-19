import FavoriteCard from "./FavoriteCard";

function FavoritesList({ locations, onRemove }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {locations.map((loc) => (
        <FavoriteCard
          key={loc.id}
          loc={loc}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default FavoritesList;