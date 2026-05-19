import MovieCard from "../MovieCard/MovieCard";

function MovieList({ movies, onSelectMovie }) {
    return (
    <>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </>
  );
}

export default MovieList;