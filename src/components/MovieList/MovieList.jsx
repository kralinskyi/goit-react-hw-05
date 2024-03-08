import css from "./MovieList.module.css";
import MovieListElement from "./MovieListElement/MovieListElement";

export default function MovieList({ movies }) {
  return (
    <>
      <ul className={css["movie-list"]}>
        {movies.map((movie) => (
          <MovieListElement key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
