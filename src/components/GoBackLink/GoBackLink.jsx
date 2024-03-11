import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import css from "./GoBackLink.module.css";
import { useRef } from "react";

export default function GoBackLink() {
  const location = useLocation();
  const goBack = useRef(location.state ?? "/");
  return (
    <div className={css.back}>
      <Link to={goBack.current}>
        <IoMdArrowRoundBack /> Go back
      </Link>
    </div>
  );
}
