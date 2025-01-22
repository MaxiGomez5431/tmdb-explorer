import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Aquí puedes agregar lógica para manejar la búsqueda
  };

  return (
    <div className="flex items-center bg-TMDB-900/70 backdrop-blur-md rounded-full px-4 py-2 m-2 w-full max-w-72 shadow-md">
      {/* Ícono de búsqueda */}
      <i 
        className="fa-solid fa-magnifying-glass text-white text-lg mr-2"
        onClick={handleSearch}
      />
      
      {/* Campo de entrada */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for movies, series..."
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
      />

    </div>
  );
}