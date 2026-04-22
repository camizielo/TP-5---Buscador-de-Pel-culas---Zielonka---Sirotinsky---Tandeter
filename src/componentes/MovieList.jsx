import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSelect }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}