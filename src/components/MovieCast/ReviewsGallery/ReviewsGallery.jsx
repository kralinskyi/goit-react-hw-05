import ReviewCard from "../../ReviewCard/ReviewCard";
import css from "./ReviewsGallery.module.css";

export default function ReviewsGallery({ reviews }) {
  if (reviews.length === 0) {
    return <p className={css.no_reviews}>No reviews on this movie yet.</p>;
  }

  return (
    <ul className={css.review_gallery}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ul>
  );
}
