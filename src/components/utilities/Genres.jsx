import useFetch from "../../hooks/useFetch";
import { API_ENDPOINTS } from "../../assets/apiConfig";
import { useEffect, useState } from "react";
import React from "react";
import SeparationSpan from "./SeparationSpan";
import { Link } from "react-router";


export default function Genres({ genreIds, justify, mediaType, ...props }) {
  const { data } = useFetch(API_ENDPOINTS.GET_MOVIE_GENRES);
  const [genreArray, setGenreArray] = useState([]);

  useEffect(() => {
    if (data) {
      setGenreArray(getGenreObjectsByIds(genreIds, data.genres));
    }
  }, [data, genreIds]);

  function getGenreObjectsByIds(genreIds, genres) {
    return genreIds.map((item) => {
      if (typeof item === "object" && item.name) {
        return { id: item.id, nombre: item.name };
      }
      const genre = genres.find((genre) => genre.id === item);
      return genre ? { id: genre.id, nombre: genre.name } : null;
    }).filter(Boolean);
  }
  
  return (
    <>
      {genreArray.length > 0 && genreIds && (
        <div {...props} className={`flex flex-wrap ${justify}`}>
          {genreArray.map((genre, index) => (
            <React.Fragment key={genre.id}>
              <Link 
                to={`/explore/${mediaType}/genres/${genre.id}`}
                className="text-white text-center md:text-lg mr-1 hover:text-TMDB-500 duration-100"
              >
                  {genre.nombre}
              </Link>
              {index < genreArray.length - 1 && <SeparationSpan/>}
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
}
