import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import css from "./BackToHomePageLink.module.css";

export default function BackToHomePageLink() {
  return (
    <div className={css.back}>
      <Link to="/">
        <IoMdArrowRoundBack /> Back to home page
      </Link>
    </div>
  );
}
