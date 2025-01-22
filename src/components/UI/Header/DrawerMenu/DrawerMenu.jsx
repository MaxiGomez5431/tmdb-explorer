import { useState } from "react";
import { Link } from "react-router"; // Suponiendo que usas React Router

import SearchBar from "../SearchBar";

export default function DrawerMenu({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el menú */}
      <div onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
        <i className="fa-solid fa-bars text-white text-xl" />
      </div>

      {/* Menú deslizante */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-TMDB-900 flex flex-col justify-start items-end 
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

          <div className="flex flex-col">

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

         
            {/* text géneros */}
            <div
              onClick={() => setIsGenresOpen(!isGenresOpen)}
              className="DrawerMenuText mb-0 space-x-2"
            >
              
              <i
                className={`fa-solid transition-transform duration-300 ${
                  isGenresOpen ? "fa-chevron-up rotate-180" : "fa-chevron-down"
                }`}
              />

              <span>Genres</span>
            </div>

            {/* Lista de géneros */}
            <div
              className={`transition-all duration-500 ${
                isGenresOpen
                  ? "max-h-[480px] opacity-100 pointer-events-auto visible"
                  : "max-h-0 opacity-0 pointer-events-none invisible"
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 px-4 py-2 border border-t-0 mx-2">
                {data &&
                  data.genres &&
                  data.genres.map((genre) => (
                    <Link
                      key={genre.id}
                      to={`/genres/${genre.id}`}
                      className="text-white hover:text-TMDB-300 text-sm font-light text-center border border-TMDB-300 rounded-md py-2 px-3 transition-colors"
                    >
                      {genre.name}
                    </Link>
                  ))}
              </div>
            </div>

          </div>  
        </div>
      </div>
    </>
  );
}
