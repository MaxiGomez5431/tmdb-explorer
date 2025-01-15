import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import { useRef } from "react";
import useFetch from "../../../../hooks/useFetch"
import useHeroBanner from "../../../../hooks/useHeroBanner";
import HeroButtons from "./HeroButtons";
import HeroMovieInfo from "./HeroMovieInfo";

function Hero() {
  const { data } = useFetch(API_ENDPOINTS.GET_POPULAR_MOVIES);
  const timeoutRef = useRef(null);
  const {changeMovieWithAnimation, selectedMovie, setSelectedMovie} = useHeroBanner({data, timeoutRef })
  
  return (
    <section
      className="min-h-[80%] w-full bg-cover bg-center transition-all duration-700 flex flex-col justify-end items-left relative"
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP}${data?.results[selectedMovie].backdrop_path})`,
      }}
    >
      {data && (
        <div 
          className="
          bg-black/70
          p-4 z-10
          flex justify-around items-center flex-col
          transition-all duration-700
          w-full h-full"
        >

          <div className="flex flex-col md:flex-row justify-center items-center">

            <img
              key={data?.results[selectedMovie].id}  // Forzar re-render al cambiar la imagen
              src={`${API_ENDPOINTS.IMAGE_POSTER}${data?.results[selectedMovie].poster_path}`}
              alt={data?.results[selectedMovie].title}
              className="p-10 w-60 md:w-auto opacity-0 transition-all duration-700 ease-in-out"
              onLoad={(e) => {
                e.target.classList.remove("opacity-0");
                e.target.classList.add("opacity-100");
              }}
            />
            
            <HeroMovieInfo data={data} selectedMovie={selectedMovie} />
          </div>

          <HeroButtons 
            changeMovie={changeMovieWithAnimation} 
            totalItems={data?.results.length} 
            setSelectedMovie={setSelectedMovie} 
          />

        </div>
      )}
    </section>
  );
}

export default Hero;