import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import { useRef } from "react";
import useFetch from "../../../../hooks/useFetch"
import useHeroBanner from "../../../../hooks/useHeroBanner";
import HeroButtons from "./HeroButtons";
import HeroMovieInfo from "./HeroMovieInfo";
import HeroGradient from "./HeroGradient";

function Hero() {
  const { data } = useFetch(API_ENDPOINTS.GET_POPULAR_MOVIES(1));
  const timeoutRef = useRef(null);
  const {changeMovieWithAnimation, selectedMovie, setSelectedMovie} = useHeroBanner({data, timeoutRef })
  
  return (
    <section
      className="min-h-full w-full bg-cover bg-center transition-all duration-700 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP}${data?.results[selectedMovie].backdrop_path})`,
      }}
    >
      {data && (
        <div 
          className="
          bg-black/70 
          p-4 z-10
          flex justify-center items-center flex-col
          transition-all duration-700
          w-full h-screen"
        >

          <div className="flex flex-col md:flex-row justify-center items-center">

            <img
              key={data?.results[selectedMovie].id}
              src={`${API_ENDPOINTS.IMAGE_POSTER}${data?.results[selectedMovie].poster_path}`}
              alt={data?.results[selectedMovie].title}
              className="p-10  lg:w-auto md:w-80 sm:w-72 w-64 opacity-0 scale-95 transition-all duration-700 ease-in-out"
              onLoad={(e) => {
                e.target.classList.remove("opacity-0", "scale-95");
                e.target.classList.add("opacity-100", "scale-100");
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

      <HeroGradient />

    </section>
  );
}

export default Hero;