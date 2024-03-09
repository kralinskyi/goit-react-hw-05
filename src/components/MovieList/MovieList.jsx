import css from "./MovieList.module.css";
import MovieListElement from "../MovieListElement/MovieListElement";
import { useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className={css["movie-list"]}>
        {movies.map((movie) => (
          <MovieListElement key={movie.id} movie={movie} state={location} />
        ))}
      </ul>
    </>
  );
}
