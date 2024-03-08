import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../Api/moviesDataBaseApi";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";
import ActorsGallery from "../ActorsGallery/ActorsGallery";

export default function MovieCast() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieCredits(movieId);
        setActors(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      {<div className={css.center}>{isLoading && <Loader />}</div>}
      {error && <p>Something wrong...</p>}
      <ActorsGallery data={actors} />
    </>
  );
}
