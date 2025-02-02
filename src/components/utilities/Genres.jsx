import useFetch from "../../hooks/useFetch";
import { API_ENDPOINTS } from "../../assets/apiConfig";
import { useEffect, useState } from "react";
import React from "react";
import SeparationSpan from "./SeparationSpan";

export default function Genres({ genreIds, justify, ...props }) {
  const { data } = useFetch(API_ENDPOINTS.GET_MOVIE_GENRES);
  const [genreArray, setGenreArray] = useState([]);

  useEffect(() => {
    if (data) {
      setGenreArray(getGenreNamesByIds(genreIds, data.genres));
    }
  }, [data, genreIds]);

  function getGenreNamesByIds(genreIds, genres) {
    return genreIds.map((item) => {
      if (typeof item === "object" && item.name) {
        return item.name;
      }
      const genre = genres.find((genre) => genre.id === item);
      return genre ? genre.name : null;
    });
  }

  return (
    <>
      {genreArray.length > 0 && genreIds && (
        <div {...props} className={`flex flex-wrap ${justify}`}>
          {genreArray.map((genre, index) => (
            <React.Fragment key={genre}>
              <p className="text-white text-center md:text-lg mr-1">{genre}</p>
              {index < genreArray.length - 1 && <SeparationSpan/>}
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
}
