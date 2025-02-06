import { useState } from "react";
import { useNavigate } from 'react-router';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() === "") return; // Evita búsquedas vacías
    console.log("Searching for:", searchQuery);
    navigate(`/search/${searchQuery}`);
  };
  
  return (
    <div className="flex items-center bg-white backdrop-blur-md rounded px-4 py-2 my-2 mx-4 shadow-md max-w-[220px]">
      {/* Ícono de búsqueda */}
      <i 
        className="fa-solid fa-magnifying-glass text-TMDB-950 text-lg mr-2 cursor-pointer"
        onClick={handleSearch} // Ejecuta la búsqueda al hacer clic
      />
      
      {/* Campo de entrada */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 bg-transparent placeholder-gray-600 outline-none "
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Ejecuta la búsqueda al presionar Enter
      />
    </div>
  );
}
