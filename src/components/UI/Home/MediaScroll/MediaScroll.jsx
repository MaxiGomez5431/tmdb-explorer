import { useEffect, useRef, useState } from "react"
import useFetch from "../../../../hooks/useFetch"
import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import MediaScrollBtns from "./MediaScrollBtns";
import MediaScrollImg from "./MediaScrollImg";

export default function MediaScroll({ url, title, id, mediaType, ...props}) {
  const { data } = useFetch(url);
  const [usableData, setUsableData] = useState(null)
  const scrollRef = useRef(null);
  
  useEffect(() => {
    if (data) {
      let curatedData = data.results.filter((movie) => movie.backdrop_path && movie.poster_path )
      curatedData = curatedData.length === 0 ? null : curatedData
      setUsableData(curatedData)
    }
  },[data])
  
  return (
    usableData && (
      <>
        <section className="relative bg-TMDB-950 group scroll-mt-16 w-full py-3" id={id} {...props}>
          <h2 className="text-white text-3xl py-1 containerPadding">{title}</h2>
  
          <div className="flex justify-between items-center">
            <div
              className="flex containerPadding items-center flex-row overflow-x-scroll overflow-y-visible mediaScrollBar w-full"
              ref={scrollRef}
            >
              {usableData?.map((media) => (
                <MediaScrollImg
                  key={media.id}
                  ImageUrl={`${API_ENDPOINTS.IMAGE_POSTER}${media.poster_path}`}
                  alt={media.title}
                  id={media.id}
                  mediaType={mediaType}
                />
              ))}
            </div>
  
            <MediaScrollBtns scrollRef={scrollRef} />
          </div>
        </section>
      </>
    )
  );
}