import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/Api/moviesDataBaseApi";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  // Якщо немає title в params, повертаємо ""
  const movieTitle = params.get("title") ?? "";

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

  const findMoviesByTitle = (filter) => {
    // setParams(target.value);
  };

  return (
    <>
      <div className={css.input}>
        <input
          placeholder="find movie by name"
          value={movieTitle}
          onChange={({ target: { value } }) => findMoviesByTitle(value)}
        />
      </div>
      <div className={css.center}>{isLoading && <Loader />}</div>
      {error && <p>Something wrong...</p>}
      {/* <MovieList /> */}
      {/* <MovieList movies={movies} /> */}
    </>
  );
}
