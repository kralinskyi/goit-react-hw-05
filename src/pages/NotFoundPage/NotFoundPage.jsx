import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <p>Page not found...</p>
      <Link to="/">Go to home page</Link>
    </>
  );
}
