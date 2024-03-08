import { NavLink } from "react-router-dom";
import css from "./AdditionalInfo.module.css";

export default function AdditionalInfo() {
  return (
    <ul className={css.extra_info}>
      <li>
        <NavLink to="cast">Cast info</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
    </ul>
  );
}
