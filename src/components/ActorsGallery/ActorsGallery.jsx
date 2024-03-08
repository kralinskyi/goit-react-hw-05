import ActorCard from "../ActorCard/ActorCard";
import css from "./ActorsGallery.module.css";

export default function ActorsGallery({ data }) {
  return (
    <ul className={css.gallery}>
      {data.map((cardData) => (
        <ActorCard key={cardData.id} data={cardData} />
      ))}
    </ul>
  );
}
