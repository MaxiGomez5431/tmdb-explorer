import { useRef } from "react"
import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import useFetch from "../../../../hooks/useFetch"
import MediaScrollBtns from "../../Home/MediaScroll/MediaScrollBtns"
import DetailsCastImg from "./DetailsCastImg"
import { useMediaType } from "../../../../context/MediaContext"

export default function DetailsCast ({id}) {
  const mediaType = useMediaType()
  let mediaUrl = mediaType === "movie" ? API_ENDPOINTS.GET_MOVIE_CREDITS : API_ENDPOINTS.GET_SERIE_CREDITS
  const {data} = useFetch(mediaUrl(id))
  const scrollRef = useRef(null);

  return (
    data?.cast?.length > 0 && (
      <section className="relative bg-TMDB-950 h-auto w-full group flex flex-col justify-between items-left">
        <h1 className="text-white text-3xl py-2 containerPadding">Cast</h1>
  
        <div className="flex flex-col justify-center items-center w-full">
          <div
            className="flex items-center flex-row overflow-x-scroll overflow-y-visible mediaScrollBar w-full h-[300px] containerPadding"
            ref={scrollRef}
          >
            {data?.cast.map((actor, index) => (
              <DetailsCastImg
                key={index}
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
  );
  
}