import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../assets/apiConfig";

function useHeroBanner({data}) {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeMovieWithAnimation = (next = true) => {
    if (isAnimating) return;

    setIsAnimating(true);
    changeMovie(next); 
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };
  
  const changeMovie = (next = true) => {
    setSelectedMovie((prev) =>
      next
        ? (prev + 1) % data?.results.length
        : (prev - 1 + data?.results.length) % data?.results.length
    );
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  //se puede poner en otro hook para simplificar este

  useEffect(() => {
    if (!data || !data.results) return;
  
    // Precarga de imágenes de fondo
    const previousBackdropImg = new Image();
    const currentBackdropImg = new Image();
    const nextBackdropImg = new Image();
  
    // Precarga de imágenes de póster
    const previousPosterImg = new Image();
    const currentPosterImg = new Image();
    const nextPosterImg = new Image();
  
    const prevIndex = selectedMovie > 0 ? selectedMovie - 1 : data.results.length - 1;
    const nextIndex = selectedMovie < data.results.length - 1 ? selectedMovie + 1 : 0;
  
    // Precargar imágenes de fondo
    previousBackdropImg.src = `${API_ENDPOINTS.IMAGE_BACKDROP}${data.results[prevIndex]?.backdrop_path}`;
    currentBackdropImg.src = `${API_ENDPOINTS.IMAGE_BACKDROP}${data.results[selectedMovie]?.backdrop_path}`;
    nextBackdropImg.src = `${API_ENDPOINTS.IMAGE_BACKDROP}${data.results[nextIndex]?.backdrop_path}`;
  
    // Precargar imágenes de póster
    previousPosterImg.src = `${API_ENDPOINTS.IMAGE_POSTER}${data.results[prevIndex]?.poster_path}`;
    currentPosterImg.src = `${API_ENDPOINTS.IMAGE_POSTER}${data.results[selectedMovie]?.poster_path}`;
    nextPosterImg.src = `${API_ENDPOINTS.IMAGE_POSTER}${data.results[nextIndex]?.poster_path}`;
  
  }, [selectedMovie, data]);
  

  return {changeMovieWithAnimation, selectedMovie, setSelectedMovie, isAnimating, setIsAnimating};
}

export default useHeroBanner;
