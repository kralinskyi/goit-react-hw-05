import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  // useParams

  return (
    <>
      <div className={css.image_container}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={css.details}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.overview}>{movie.overview}</p>
        <div className={css.metadata}>
          <p className={css.release}>Release Date: {movie.release_date}</p>
          <p className={css.rating}>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </>
  );
}
