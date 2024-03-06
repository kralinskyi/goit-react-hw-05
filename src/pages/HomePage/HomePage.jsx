import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import fetchMovies from "../../components/Api/hmdbApi";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const popularMovies = await fetchMovies(page);
        setMovies(popularMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPopularMovies();
  }, [page]);

  return (
    <>
      <h1>Welcome! Popular movies here!</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
}
