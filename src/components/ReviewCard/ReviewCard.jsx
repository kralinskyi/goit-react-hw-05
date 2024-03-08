import css from "./ReviewCard.module.css";
export default function ReviewCard({ review }) {
  return (
    <li>
      <h3>Author: {review.author}</h3>
      <p>Created: {new Date(review.created_at).toLocaleString()}</p>
      <p>{review.content}</p>
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}>
        <i>Read original</i>
      </a>
    </li>
  );
}
