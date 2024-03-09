// import { useEffect, useMemo, useState } from "react";
// import MovieList from "../../components/MovieList/MovieList";
// import { fetchMoviesByTitle } from "../../components/Api/moviesDataBaseApi";
// import Loader from "../../components/Loader/Loader";
// import css from "./MoviesPage.module.css";
// import { useSearchParams } from "react-router-dom";
// import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";

// export default function MoviesPage() {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [filter, setFilter] = useState("");

//   const [params] = useSearchParams();

//   // Якщо немає title в params, повертаємо ""
//   const movieTitle = params.get("title") ?? "";
//   setFilter(movieTitle);

//   useEffect(() => {
//     async function getTrendingMovies() {
//       try {
//         setIsLoading(true);
//         setError(null);
//         const data = await fetchMoviesByTitle(filter);
//         setMovies(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getTrendingMovies();
//   }, [filter]);

//   const filteredMovies = useMemo(() => {
//     return movies.filter((movie) =>
//       movie.title.trim().toLowerCase().includes(movieTitle.trim().toLowerCase())
//     );
//   }, [movieTitle, movies]);

//   return (
//     <>
//       <div className={css.center}>
//         {isLoading && <Loader />}
//         {error && <p>Something wrong...</p>}
//       </div>

//       <MoviesFilter />
//       <MovieList movies={filteredMovies} />
//     </>
//   );
// }

// Вище фільтрація масиву фільмів по динамічному input в <MoviesFilter />

import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByTitle } from "../../components/Api/moviesDataBaseApi";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const movieTitle = params.get("query") ?? "";

  useEffect(() => {
    async function refreshMovies() {
      handleSubmit(movieTitle);
    }

    refreshMovies();
  }, [movieTitle]);

  const handleSubmit = async (movieTitle) => {
    try {
      setMovies([]);
      setIsLoading(true);
      setError(null);
      const data = await fetchMoviesByTitle(movieTitle);

      setMovies(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MoviesFilter onSubmit={handleSubmit} />
      <div className={css.center}>
        {isLoading && <Loader />}
        {error && <p>Something wrong...</p>}
        {movies.length === 0 && !isLoading && !error && movieTitle && (
          <p>No movies found for the given query.</p>
        )}
      </div>

      <MovieList movies={movies} />
    </>
  );
}
