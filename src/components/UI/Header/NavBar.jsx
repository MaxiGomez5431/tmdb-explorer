import { Link } from "react-router";

export default function NavBar ({data}) {

  return (
    <nav className="flex flex-1 items-center justify-center space-x-6 w-auto max-w-1/3">

      <Link to="/" className="linkStyle">
        Home
      </Link>
      <Link to="/explore/movies" className="linkStyle">
        Movies
      </Link>
      <Link to="/explore/series" className="linkStyle">
        Series
      </Link>
     
    </nav>
  )
}