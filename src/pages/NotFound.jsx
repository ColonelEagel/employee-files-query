import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="not-found">
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <p>Please check the URL and try again.</p>
          <p>If the problem persists, please contact support.</p>
          <p>Thank you.</p>
          <p>go back to <Link href="/">The Home page</Link></p>
    </div>
  )
}
