import Button from "../Button/Button";

function MovieCard({ movie, onSelectMovie }) {
    return (
    <div style={{ border: "1px solid white", margin: 10, padding: 10 }}>
      <h2><b>{movie.title}</b></h2>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
      <p>{movie.rating}</p>

      <Button onClick={() => onSelectMovie(movie)}>
        Select
      </Button>
    </div>
  );
}

export default MovieCard;