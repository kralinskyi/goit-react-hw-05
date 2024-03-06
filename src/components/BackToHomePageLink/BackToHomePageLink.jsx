import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import css from "./BackToHomePageLink.module.css";

export default function BackToHomePageLink() {
  return (
    <div>
      <Link to="/" className={css.back}>
        <IoMdArrowRoundBack /> Back to home page
      </Link>
    </div>
  );
}
