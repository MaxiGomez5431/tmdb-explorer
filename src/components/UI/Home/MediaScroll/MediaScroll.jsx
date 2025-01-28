import { useEffect, useRef } from "react"
import useFetch from "../../../../hooks/useFetch"
import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import MediaScrollBtns from "./MediaScrollBtns";
import MediaScrollImg from "./MediaScrollImg";

export default function MediaScroll({ url, title, id}) {
  const { data } = useFetch(url);
  const scrollRef = useRef(null);
  
  useEffect(() => {
    console.log(data)
  },[data])
  
  return (
    <section className="relative bg-TMDB-950 group scroll-mt-16 w-full" id={id}>
      <h2 className="text-white text-3xl py-2 containerPadding">{title}</h2>

      <div className="flex justify-between items-center">
        
        <div
          className="flex containerPadding items-center flex-row overflow-x-scroll overflow-y-visible mediaScrollBar w-full h-[300px]"
          ref={scrollRef}
        >
          {data?.results.map((media) => (
            <MediaScrollImg
              key={media.id}
              ImageUrl={`${API_ENDPOINTS.IMAGE_POSTER}${media.poster_path}`}
              alt={media.title}
              id={media.id}
            />
          ))}
        </div>
        
        <MediaScrollBtns scrollRef={scrollRef} />

      </div>
    </section>
  );
}