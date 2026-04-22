export default function MovieCard({ movie, onSelect }) {
  return (
    <div onClick={() => onSelect(movie.imdbID)}>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "no-image.png"} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
    </div>
  );
}