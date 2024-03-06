import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <>
      <ul className={css.movieList}>
        {movies.map((movie) => (
          <li className={css.movie} key={movie.id}>
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={css.details}>
              <h2 className={css.title}>{movie.title}</h2>
              <p className={css.overview}>{movie.overview}</p>
              <div className={css.metadata}>
                <p className={css.release}>
                  Release Date: {movie.release_date}
                </p>
                <p className={css.rating}>Rating: {movie.vote_average}</p>
                <p className={css.genres}>Genres: Action, Thriller, Comedy</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
