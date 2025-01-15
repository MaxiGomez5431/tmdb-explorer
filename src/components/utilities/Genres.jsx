import useFetch from "../../hooks/useFetch"
import { API_ENDPOINTS } from "../../assets/apiConfig"
import { useEffect, useState } from "react"
import React from "react"

//mejorar estilo, poner barras verticales entre cada elemento

export default function Genres ({genreIds, ...props}) {
  const { data } = useFetch(API_ENDPOINTS.GET_MOVIE_GENRES)
  const [genreArray, setGenreArray] = useState()

  useEffect(() => {
    if (data) {
      setGenreArray(getGenreNamesByIds(genreIds, data.genres))
    }
  }, [data, genreIds])
  
  function getGenreNamesByIds(genreIds, genres) {
    return genreIds.map(id => genres.find(genre => genre.id === id).name);
  }

  return (
    <>
      {
        genreArray && genreIds &&

        <div {...props} className="flex justify-center items-center">
          {
            genreArray.map((genre, index) => (
              <React.Fragment key={genre}>
                <p className="text-white md:text-xl mr-3">
                  {genre}
                </p>
                {index < genreArray.length - 1 && <span className="text-white mr-3">|</span>}
              </React.Fragment>
            ))
          }
        </div>
      }
    </>
  )
}