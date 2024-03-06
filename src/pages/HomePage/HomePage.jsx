import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import fetchMovies from "../../components/Api/moviesDataBaseApi";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <h1 className={css.title}>Trending today</h1>
          <MovieList movies={movies} />
        </>
      )}
    </>
  );
}
