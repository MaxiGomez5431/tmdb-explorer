import { useEffect, useRef } from "react"
import { API_ENDPOINTS } from "../../../assets/apiConfig"
import useFetch from "../../../hooks/useFetch"
import MediaScrollBtns from "../Home/MediaScroll/MediaScrollBtns"
import MovieActorsImg from "./MovieActorsImg"

export default function MovieDetails ({id}) {
  const {data} = useFetch(API_ENDPOINTS.GET_MOVIE_CREDITS(id))
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    
    <section className="relative bg-TMDB-950 h-auto w-full group flex flex-col justify-between items-left ">

      <h1 className="text-white text-3xl py-2 containerPadding">Cast</h1>

      <div className="flex flex-col justify-center items-center w-full ">
        
        <div
          className="flex items-center flex-row overflow-x-scroll overflow-y-visible mediaScrollBar w-full h-[300px] containerPadding "
          ref={scrollRef}
        >
          {data?.cast.map((actor) => (
            <MovieActorsImg
              key={actor.cast_id}
              ImageUrl={actor.profile_path}
              name={actor.name}
              characterName={actor.character}
              alt={actor.name}
            />
          ))}
          
        </div>
        
        <MediaScrollBtns scrollRef={scrollRef} />

      </div>

    </section>

  )
}