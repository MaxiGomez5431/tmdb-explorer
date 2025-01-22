import { Link } from "react-router";
import { useState } from "react";


export default function NavBar ({data}) {

  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  return (
    <nav className="flex flex-1 items-center justify-center space-x-6 w-auto max-w-1/3">

      {/* Home */}
      <Link to="/" className="linkStyle">
        Home
      </Link>

      {/* Explore */}
      <div
        className="relative"
        onMouseEnter={() => setIsExploreOpen(true)}
        onMouseLeave={() => setIsExploreOpen(false)}
      >
        <button className="linkStyle">Explore</button>
        {isExploreOpen && (
          <div className="absolute top-full left-0 bg-TMDB-900 rounded shadow-lg">
            <Link to="/explore/movies" className="block px-4 py-2 text-white hover:bg-TMDB-500">
              Movies
            </Link>
            <Link to="/explore/series" className="block px-4 py-2 text-white hover:bg-TMDB-500">
              Series
            </Link>
          </div>
        )}
      </div>

      {/* Genres */}
      <div
        className="relative"
        onMouseEnter={() => setIsGenresOpen(true)}
        onMouseLeave={() => setIsGenresOpen(false)}
      >
        <button className="linkStyle">Genres</button>
        {isGenresOpen && data?.genres && (
        <div className="absolute top-full left-0 bg-TMDB-900 overflow-y-auto rounded shadow-lg">
          {data.genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genres/${genre.id}`}
              className="block px-4 py-2 text-white hover:bg-TMDB-500"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      )}
      </div>
    </nav>
  )
}