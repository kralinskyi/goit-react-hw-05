import { Link } from "react-router-dom";
import css from "./MovieListElement.module.css";

export default function MovieListElement({ movie, state }) {
  if (!movie.poster_path) {
    return null; // Якщо poster_path відсутній, повертаємо null
  }

  return (
    <li className={css.item}>
      <Link to={`/${movie.id}`} className={css.link} state={state}>
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
  );
}
