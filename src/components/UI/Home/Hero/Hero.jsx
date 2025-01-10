import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import { useRef } from "react";
import useFetch from "../../../../hooks/useFetch"
import useHeroBanner from "../../../../hooks/useHeroBanner";
import Genres from "../../../utilities/Genres"
import Score from "../../../utilities/Score"
import HeroButtons from "./HeroButtons";


//poner una barrita que indique cuantas peliculas hay y por cual vamos, que sea un map con el length de la cantidad de peliculas, y que ponga blanca según el selectedMovie y el resto grises

function Hero() {
  const { data } = useFetch(API_ENDPOINTS.GET_POPULAR_MOVIES);
  const timeoutRef = useRef(null);
  const {changeMovieWithAnimation, resetTimer, selectedMovie, isImageLoaded} = useHeroBanner({data, timeoutRef })
  
  return (
    <section
      className="h-[80%] w-full bg-cover bg-center transition-all duration-700 flex flex-col justify-end items-left relative"
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP}${data?.results[selectedMovie].backdrop_path})`,
      }}
    >
      {data && (
        <div 
          className="
          bg-gradient-to-t from-black to-transparent
          p-4 z-10
          "
        >
          <p className="text-white text-4xl my-3">
            {data?.results[selectedMovie]?.title}
          </p>

          <Genres 
            genreIds={data?.results[selectedMovie]?.genre_ids} 
            className="flex flex-wrap my-3" 
          />

          <Score 
            score={data?.results[selectedMovie].vote_average} 
            className="text-white my-3"
          />

          {/*ver mas info CAMBIARRRR*/} 
          <button
            className="
            text-black bg-white
            p-3 rounded"
          >Ver mas información</button>
          
          <HeroButtons changeMovie={changeMovieWithAnimation} resetTimer={resetTimer} />

        </div>
      )}
    </section>
  );
}

export default Hero;