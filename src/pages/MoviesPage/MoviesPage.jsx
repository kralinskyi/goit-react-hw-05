import { useEffect, useMemo, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/Api/moviesDataBaseApi";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();

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

  // Якщо немає title в params, повертаємо ""
  const movieTitle = params.get("title") ?? "";

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.trim().toLowerCase().includes(movieTitle.trim().toLowerCase())
    );
  }, [movieTitle, movies]);

  return (
    <>
      <div className={css.center}>
        {isLoading && <Loader />}
        {error && <p>Something wrong...</p>}
      </div>

      <MoviesFilter />
      {movieTitle && <MovieList movies={filteredMovies} />}
    </>
  );
}
