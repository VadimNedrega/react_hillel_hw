import './App.css'
import { movies } from '../src/data/movies'
import MovieDetails from './components/MovieDetails/MovieDetails'
import MovieList from './components/MovieList/MovieList'
import { useState } from 'react'

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <>
      <h1>Movies</h1>

      <MovieList
        movies={movies}
        onSelectMovie={setSelectedMovie}
      />

      <MovieDetails selectedMovie={selectedMovie} />
    </>

  )
}

export default App
