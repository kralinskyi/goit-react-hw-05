import css from "./MovieItem.module.css";
import GoBackLink from "../../components/GoBackLink/GoBackLink";

export default function MovieItem({ movie }) {
  return (
    <>
      <GoBackLink />
      <div className={css.movie}>
        <div className={css.image_container}>
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={css.details}>
          <h2 className={css.title}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p className={css.overview}>{movie.overview}</p>
          <div className={css.metadata}>
            <p className={css.release}>
              <b>Release Date: </b>
              {movie.release_date}
            </p>
            <p className={css.budget}>
              <b>Budget: </b>$ {movie.budget}
            </p>
            <p className={css.rating}>
              <b>Rating:</b> {movie.vote_average}
            </p>
            <p className={css.genres}>
              <b>Genres:</b>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <div className={css.production}>
              {movie.production_companies[0].logo_path && (
                <b>Production companies:</b>
              )}
              {movie.production_companies.map((company) => (
                <div key={company.id}>
                  {company.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                    />
                  )}
                </div>
              ))}
            </div>
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link_to_homepage}>
              Movie home page
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
