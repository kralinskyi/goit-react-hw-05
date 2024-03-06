import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <>
      <ul className={css["movie-list"]}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.item}>
            <Link to={`/${movie.id}`} className={css.link}>
              <div className={css.image_container}>
                <img
                  className={css.poster}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <p className={css.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
