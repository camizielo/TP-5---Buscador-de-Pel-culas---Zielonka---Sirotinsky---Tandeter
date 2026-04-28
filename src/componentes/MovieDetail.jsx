export default function MovieDetail({ movie, onBack }) {
  return (
    <div>
      <button onClick={onBack}>Volver</button>

      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />

      <p>Año: {movie.Year}</p>
      <p>Género: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actores: {movie.Actors}</p>
      <p>Sinopsis: {movie.Plot}</p>
      <p>Duración: {movie.Runtime}</p>
      <p>Idioma: {movie.Language}</p>
      <p>País: {movie.Country}</p>
      <p>IMDb: {movie.imdbRating}</p>
    </div>
  );
}