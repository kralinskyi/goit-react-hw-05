import { useSearchParams } from "react-router-dom";
import css from "./MoviesFilter.module.css";

export default function MoviesFilter() {
  const [params, setParams] = useSearchParams();

  const findMoviesByTitle = (filter) => {
    params.set("title", filter);
    setParams(params);
  };

  const movieTitle = params.get("title") ?? "";

  return (
    <div className={css.input}>
      <input
        placeholder="find movie by name"
        value={movieTitle}
        onChange={({ target: { value } }) => findMoviesByTitle(value)}
      />
    </div>
  );
}
