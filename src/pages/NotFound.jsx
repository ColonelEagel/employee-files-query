import { Link } from "react-router-dom";

/**
 * Component for displaying a not found page.
 * @returns {JSX.Element} The not found page UI.
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL and try again.</p>
      <p>If the problem persists, please contact support.</p>
      <p>Thank you.</p>
      <p>Go back to <Link to="/">The Home page</Link></p>
    </div>
  );
}