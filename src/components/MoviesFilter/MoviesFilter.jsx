// import { useSearchParams } from "react-router-dom";
// import css from "./MoviesFilter.module.css";

// export default function MoviesFilter() {
//   const [params, setParams] = useSearchParams();

//   const findMoviesByTitle = (filter) => {
//     params.set("title", filter);
//     setParams(params);
//   };

//   const movieTitle = params.get("title") ?? "";

//   return (
//     <form className={css.input}>
//       <input
//         placeholder="find movie by name"
//         value={movieTitle}
//         onChange={({ target: { value } }) => findMoviesByTitle(value)}
//       />
//       <button type="submit">Find</button>
//     </form>
//   );
// }

// Динамічний запис url(передавалося значення для фільтрації списку фільмів)

import { useSearchParams } from "react-router-dom";
import css from "./MoviesFilter.module.css";

export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();

  const findMoviesByTitle = (query) => {
    params.set("query", query);
    setParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.query.value;

    findMoviesByTitle(searchValue);
    onSubmit(searchValue);
  };

  return (
    <form className={css.input} onSubmit={handleSubmit}>
      <input placeholder="find movie by name" name="query" />
      <button type="submit">Find</button>
    </form>
  );
}
