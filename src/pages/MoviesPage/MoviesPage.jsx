import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  return (
    <>
      <form>
        <input placeholder="find movie"></input>
      </form>
      <MovieList />
    </>
  );
}
