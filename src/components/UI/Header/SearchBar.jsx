import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Aquí puedes agregar lógica para manejar la búsqueda
  };

  return (
    <div className="flex items-center bg-white  backdrop-blur-md rounded-full px-4 py-2 m-2 max-w-44 md:max-w-72 shadow-md">
      {/* Ícono de búsqueda */}
      <i 
        className="fa-solid fa-magnifying-glass text-TMDB-950 text-lg mr-2"
        onClick={handleSearch}
      />
      
      {/* Campo de entrada */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 bg-transparent placeholder-gray-600 outline-none w-[100px] sm:w-[150px]"
      />

    </div>
  );
}