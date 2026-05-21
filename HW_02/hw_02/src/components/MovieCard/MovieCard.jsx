import Button from "../Button/Button";
import "./MovieCard.css";

function MovieCard({ movie, onSelectMovie }) {
    return (
    <div className="movie-card">
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