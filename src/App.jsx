import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setNoResults(false);

    try {
      const data = await searchMovies(query);

      if (data.Response === "False") {
        setNoResults(true);
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch {
      setError("Error al buscar");
    }

    setLoading(false);
  };

  const handleSelect = async (id) => {
    setLoading(true);

    try {
      const data = await getMovieDetail(id);
      setSelected(data);
    } catch {
      setError("Error al cargar detalle");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Buscador de Películas 🎬</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {noResults && <p>No se encontraron resultados</p>}

      {!selected && <MovieList movies={movies} onSelect={handleSelect} />}
      {selected && <MovieDetail movie={selected} onBack={() => setSelected(null)} />}
    </div>
  );
}

export default App;

