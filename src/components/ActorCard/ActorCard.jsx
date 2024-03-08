import css from "./ActorCard.module.css";

export default function ActorCard({ data }) {
  if (!data.profile_path) {
    return null;
  }

  return (
    <li key={data.id}>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
        alt={data.name}
        className={css.actor_photo}
      />
      <p>
        {data.name}
        <br />
        as {data.character}
      </p>
    </li>
  );
}
