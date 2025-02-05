import { useEffect, useState } from "react";
import useMobile from "../../../hooks/useMobile"
import { Link } from "react-router";
import { API_ENDPOINTS } from "../../../assets/apiConfig";
import TmdbLogo from "../../../assets/TMDBLogo.png";
import NavBar from "./NavBar";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import useFetch from "../../../hooks/useFetch";
import SearchBar from "./SearchBar";

export default function Header() {
  const {isMobile} = useMobile(900)
  const [isScrolled, setIsScrolled] = useState(false);
  const {data} = useFetch(API_ENDPOINTS.GET_MOVIE_GENRES)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 z-50 w-full flex justify-between items-center transition-all duration-300 containerPadding ${
        isScrolled
          ? "bg-TMDB-500/10 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex-none">
        <img src={TmdbLogo} alt="TMDB Logo" className="w-40 my-4" />
      </Link>

      { !isMobile ?
        <>
          {/* Navbar */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <NavBar data={data} />
          </div>

          {/* Search Bar */}
          <div className="flex-none">
            <SearchBar />
          </div>
        </>

        :
        
        <div className="flex-none">
          <DrawerMenu data={data} />
        </div>

        
      }

    </header>
  );
}
