import { useState } from "react";

export default function useMediaModal () {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla el modal
  const [selectedMedia, setSelectedMedia] = useState(null); // Almacena datos de la película seleccionada


  const handleImageClick = (media) => {
    setSelectedMedia(media); // Establece la película seleccionada
    setIsModalOpen(true); // Muestra el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
    setSelectedMedia(null); // Limpia los datos seleccionados
  };

  return({isModalOpen, selectedMedia, handleImageClick, closeModal})

}