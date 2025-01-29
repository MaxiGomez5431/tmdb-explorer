import { useEffect } from "react";
import useFetch from "../../../../hooks/useFetch";
import MovieDetailsInfo from "./MovieDetailsInfo"
import { API_ENDPOINTS } from "../../../../assets/apiConfig";

function MovieDetailsHero({id}) {
  const { data } = useFetch(API_ENDPOINTS.GET_MOVIE_DETAILS(id));

  useEffect (() => {
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
        bg-black/70
        z-10
        flex justify-end items-end flex-col
        transition-all duration-700
        w-full h-screen"
      >

        {data &&

          <div className="w-full absolute z-10 min-h-auto bg-gradient-to-t from-TMDB-950 flex justify-between containerPadding items-end pb-10"> 

            <MovieDetailsInfo data={data}> {/*PORQUE ESTO NO ESTá adentro de movie details info */}

              <div className="!mt-5">
                <h1 className="text-xl text-white font-semibold">{data.tagline || "Synopsis"}</h1>
                <p className="text-md text-white">{data.overview}</p>
              </div>
              
            </MovieDetailsInfo>

            
            <img src={`${API_ENDPOINTS.IMAGE_POSTER}${data.poster_path}`} className="posterSize"/>
          </div>
        }

      </div>

    </section>
  );
}

export default MovieDetailsHero;