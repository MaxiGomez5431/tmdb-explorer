import { useEffect, useState } from "react";
import TmdbLogo from "../../assets/TMDBLogo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconStyle =
    "flex justify-center items-center text-white m-1 w-10 h-10 duration-100 hover:bg-gray-500";

  return (
    <header
      className={`fixed top-0 z-50 w-full flex justify-between items-center px-4 transition-all duration-300 ${
        isScrolled
          ? "bg-TMDB-500/10 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <img src={TmdbLogo} alt="TMDB Logo" className="w-40 m-4" />
      </div>

      <div className="flex items-center">
        <i className={`fa-solid fa-magnifying-glass fa-xl ${iconStyle}`} />
      </div>
    </header>
  );
}
