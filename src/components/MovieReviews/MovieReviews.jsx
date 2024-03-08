import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../Api/moviesDataBaseApi";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";
import ReviewsGallery from "../ReviewsGallery/ReviewsGallery";

export default function MovieReviews() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieReview(movieId);
        setReviews(data);
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
      {reviews && <ReviewsGallery reviews={reviews} />}
    </>
  );
}
