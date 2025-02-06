import { useState, useRef, useEffect } from "react";
import { Link } from "react-router"; // Suponiendo que usas React Router
import SearchBar from "../SearchBar";

export default function DrawerMenu({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú

  // Detectar clics fuera del menú para cerrarlo
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <>
      {/* Botón para abrir el menú */}
      <div onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
        <i className="fa-solid fa-bars text-white text-xl" />
      </div>

      {/* Menú deslizante */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-2/3 md:w-1/2 bg-TMDB-900 flex flex-col justify-start items-end 
          transform transition-transform duration-300 shadow-xl 
          overflow-y-auto
          ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Botón para cerrar el menú */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="m-4 cursor-pointer text-white text-xl"
        >
          <i className="fa-solid fa-xmark" />
        </div>

        {/* Opciones del menú */}
        <div className="flex flex-col items-center space-y-6 text-left w-full">

          <SearchBar />

          <div className="flex flex-col w-full">

            <Link
              to="/"
              className="DrawerMenuText"
            >
              Home
            </Link>
            <Link
              to="/explore/movies"
              className="DrawerMenuText"
            >
              Movies
            </Link>
            <Link
              to="/explore/series"
              className="DrawerMenuText"
            >
              Series
            </Link>

          </div>  
        </div>
      </div>
    </>
  );
}
