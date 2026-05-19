function MovieDetails({ selectedMovie }) {
    if (!selectedMovie) return null;

    return (
    <div style={{ marginTop: 20 }}>
      <h2>{selectedMovie.title}</h2>
      <p>Year: {selectedMovie.year}</p>
      <p>Genre: {selectedMovie.genre}</p>
      <p>Rating: {selectedMovie.rating}</p>
    </div>
  );
}

export default MovieDetails;