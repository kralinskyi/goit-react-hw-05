import { Link } from "react-router-dom";
// import GoBackLink from "../../components/GoBackLink/GoBackLink";

export default function NotFoundPage() {
  return (
    <>
      <p>Page not found...</p>
      {/* <GoBackLink /> */}
      <Link to="/">Go to home page</Link>
    </>
  );
}
