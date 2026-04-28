import { useState } from "react";
import { searchMovies, getMovieDetail } from "./services/api";

import SearchBar from "./componentes/SearchBar";
import MovieList from "./componentes/MovieList";
import MovieDetail from "./componentes/MovieDetail";
import Loader from "./componentes/Loader";
import ErrorMessage from "./componentes/ErrorMessage";

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
      console.log(data);

      if (data.Response === "False") {
        setNoResults(true);
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      console.log(err);
      setError("Error al buscar");
    }

    setLoading(false);
  };

  const handleSelect = async (id) => {
    setLoading(true);

    try {
      const data = await getMovieDetail(id);
      setSelected(data);
    } catch (err) {
      console.log(err);
      setError("Error al cargar detalle");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Buscador de Películas 🎬</h1>

      <SearchBar 
        onSearch={handleSearch}
        onClear={() => {
          setMovies([]);
          setSelected(null);
          setNoResults(false);
          setError("");
        }}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {noResults && <p>No se encontraron resultados</p>}

      {!selected && (
        <MovieList movies={movies} onSelect={handleSelect} />
      )}

      {selected && (
        <MovieDetail
          movie={selected}
          onBack={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default App;