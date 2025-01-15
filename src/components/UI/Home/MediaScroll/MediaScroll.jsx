import { useEffect, useRef } from "react"
import useFetch from "../../../../hooks/useFetch"
import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import { useNavigate } from 'react-router';
import MediaScrollBtns from "./MediaScrollBtns";

export default function MediaScroll ({url, title}) {
  const {data} = useFetch(url)
  const navigate = useNavigate();
  const scrollRef = useRef(null)

  useEffect(() => {
    console.log("en MEdiaScroll, ",data)
  }, [data])

  const handleClick = (id) => {
    navigate(`/logo/${id}`);
  };

  return (
    <section className="relative bg-green-200">
      <h3 className="text-white text-2xl p-2 font-bold">{title}</h3>
      
      <div className="flex justify-between items-center">
        
      <div
        className="flex items-center flex-row overflow-x-scroll overflow-y-hidden mediaScrollBar"
        ref={scrollRef}
      >
          {data?.results.map((media) => (
            <img
              key={media.id}
              src={`${API_ENDPOINTS.IMAGE_POSTER}${media.poster_path}`}
              className="w-auto max-h-60 md:max-h-72 m-1"
              alt={media.title}
              onClick={() => {handleClick(media.id)}}
            />
          ))}
        </div>

        <MediaScrollBtns scrollRef={scrollRef} />

      </div>

    </section>
  )
}