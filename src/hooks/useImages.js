import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { API_OPTIONS, API_ENDPOINTS } from "../assets/apiConfig";

function useImages(moviesData, selectedMovie) {
  const [imagesData, setImagesData] = useState(null); //Data of the images of the most popular movie

  useEffect(() => {
    if(moviesData){
      fetchImages(moviesData[selectedMovie])
    }
  }, [moviesData, selectedMovie])

  const fetchImages = async (movieData) => {

    if (movieData) {

      try {
        const response = await fetch(API_ENDPOINTS.GET_MOVIE_IMAGES(movieData), API_OPTIONS);
        const images = await response.json();
        setImagesData(images);
      } catch (err) {
        console.error("Error fetching images:", err);
      }

    } else {
      console.warn("La data no tiene el formato esperado o no está disponible");
    }
  };



  return { imagesData };
}

export default useImages;