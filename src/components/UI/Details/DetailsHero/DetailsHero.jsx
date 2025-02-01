import useFetch from "../../../../hooks/useFetch";
import MovieDetailsInfo from "./DetailsInfo"
import { API_ENDPOINTS } from "../../../../assets/apiConfig";
import { useEffect } from "react";
import { useMediaType } from "../../../../context/MediaContext";

export default function DetailsHero({id}) {
  const mediaType = useMediaType()
  const mediaUrl = mediaType === "movie" ? API_ENDPOINTS.GET_MOVIE_DETAILS : API_ENDPOINTS.GET_SERIE_DETAILS
  const { data } = useFetch(mediaUrl(id));

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section
      className="min-h-full w-full bg-cover bg-center transition-all duration-700 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP}${data?.backdrop_path})`,
      }}
    >
      <div 
        className="
        bg-black/70 z-10
        flex justify-end items-end flex-col
        transition-all duration-700
        w-full h-screen"
      >

        {data &&
          <div className="w-full absolute z-10 min-h-auto bg-gradient-to-t from-TMDB-950 flex justify-between containerPadding items-end pb-10"> 

            <MovieDetailsInfo data={data} />
            
            <img src={`${API_ENDPOINTS.IMAGE_POSTER}${data.poster_path}`} className="posterSize"/>
          </div>
        }

      </div>

    </section>
  );
}

