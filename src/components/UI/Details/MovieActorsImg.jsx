import { useState } from "react";
import { API_ENDPOINTS } from "../../../assets/apiConfig";

export default function MovieActorsImg({ ImageUrl, name, characterName }) {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImage =  ImageUrl ? `${API_ENDPOINTS.IMAGE_POSTER}${ImageUrl}` : `https://ia601307.us.archive.org/1/items/instagram-plain-round/instagram%20dip%20in%20hair.jpg`

  return (
    <div
      className="flex justify-center items-center posterSize my-1 mr-2 bg-cover bg-center relative rounded overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de oscurecer la imagen al pasar el mouse */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? "opacity-50" : "opacity-0"}`}
      ></div>

      {/* Contenedor del nombre con animación */}
      <div
        className={`absolute bottom-0 right-0 left-0 p-4 flex flex-col justify-center items-center text-center transform transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <p className="text-white text-lg font-semibold">{characterName}</p>
        <p className="text-neutral-300 text-md font-semibold">{name}</p>
      </div>
    </div>
  );
}
