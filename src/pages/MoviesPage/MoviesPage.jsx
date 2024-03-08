import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/Api/moviesDataBaseApi";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";

// https://api.themoviedb.org/3/search/movie

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <div className={css.input}>
        <input placeholder="find movie by name"></input>
      </div>
      <div className={css.center}>{isLoading && <Loader />}</div>
      {error && <p>Something wrong...</p>}
      <MovieList movies={movies} />
    </>
  );
}
