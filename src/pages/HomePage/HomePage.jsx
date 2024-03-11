import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/Api/moviesDataBaseApi";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getPopularMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const popularMovies = await fetchMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPopularMovies();
  }, []);

  return (
    <>
      <div className={css.center}>{isLoading && <Loader />}</div>
      {error && <p>Something wrong...</p>}
      <>
        {!isLoading && !error && <h1 className={css.title}>Trending today</h1>}
        <MovieList movies={movies} state={location} />
      </>
    </>
  );
}
