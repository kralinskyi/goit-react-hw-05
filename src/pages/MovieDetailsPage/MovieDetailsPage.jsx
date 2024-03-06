import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchMovie } from "../../components/Api/moviesDataBaseApi";
import Loader from "../../components/Loader/Loader";
import BackToHomePageLink from "../../components/BackToHomePageLink/BackToHomePageLink";

export default function MovieDetailsPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <BackToHomePageLink />
      <div className={css.center}>{isLoading && <Loader />}</div>

      {error && <p>Something wrong...</p>}

      {movie && (
        <div className={css.movie}>
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
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer">
                Movie home page
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
