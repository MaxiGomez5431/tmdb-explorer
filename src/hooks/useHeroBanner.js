import { useEffect, useRef, useState } from "react";
import { API_ENDPOINTS } from "../assets/apiConfig";

function useHeroBanner({data, timeoutRef }) {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const changeMovieWithAnimation = (next = true) => {
    if (isAnimating) return;

    setIsAnimating(true);
    changeMovie(next); 
    resetTimer();  

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

  const resetTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      changeMovie();
    }, 10000);
  };

  useEffect(() => {
    if (data) {
      resetTimer();
      console.log(data)
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };

  }, [data, selectedMovie]);

  //se puede poner en otro hook para simplificar este

  useEffect(() => {
    if (!data || !data.results) return;
  
    setIsImageLoaded(false); 
  
    const previousImg = new Image();
    const currentImg = new Image();
    const nextImg = new Image();
    
    const prevIndex = selectedMovie > 0 ? selectedMovie - 1 : data.results.length - 1;
    const nextIndex = selectedMovie < data.results.length - 1 ? selectedMovie + 1 : 0;
  
    
    previousImg.src = `${API_ENDPOINTS.IMAGE_BACKDROP}${data.results[prevIndex]?.backdrop_path}`;
    nextImg.src = `${API_ENDPOINTS.IMAGE_BACKDROP}${data.results[nextIndex]?.backdrop_path}`;
    currentImg.src = `${API_ENDPOINTS.IMAGE_BACKDROP}${data.results[selectedMovie]?.backdrop_path}`;
    
    currentImg.onload = () => {
      setIsImageLoaded(true);
    };
  
  }, [selectedMovie, data]);
  

  return {changeMovieWithAnimation, resetTimer, selectedMovie, isImageLoaded};
}

export default useHeroBanner;