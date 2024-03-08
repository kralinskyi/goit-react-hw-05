import { Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchMovie } from "../../components/Api/moviesDataBaseApi";
import Loader from "../../components/Loader/Loader";
import BackToHomePageLink from "../../components/BackToHomePageLink/BackToHomePageLink";
import MovieItem from "../../components/MovieItem/MovieItem";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

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
      {<div className={css.center}>{isLoading && <Loader />}</div>}

      {error && <p>Something wrong...</p>}

      {movie && (
        <>
          <BackToHomePageLink />
          <MovieItem movie={movie} />
          <div className={css.subtitle_container}>
            <h2 className={css.subtitle}>Additional information:</h2>
          </div>
          <AdditionalInfo />
          <div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
