import { useEffect, useRef, useState } from "react"
import useFetch from "../../../../hooks/useFetch"
import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import MediaScrollBtns from "./MediaScrollBtns";
import MediaScrollImg from "./MediaScrollImg";
import number1 from '../../../../assets/number1.webp';
import {numbers} from "../../../../assets/numbers";

export default function MediaScrollTop({ url, title, id, mediaType, ...props }) {
  const { data } = useFetch(url);
  const [usableData, setUsableData] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (data) {
      let curatedData = data.results.filter((movie) => movie.backdrop_path && movie.poster_path);
      curatedData = curatedData.length === 0 ? null : curatedData;
      curatedData = curatedData.slice(0, 10);
      setUsableData(curatedData);
    }
  }, [data]);

  return (
    usableData && (
      <section className="relative bg-TMDB-950 group scroll-mt-16 w-full py-3 " id={id} {...props}>
        <h1 className="text-6xl md:text-8xl my-5 font-semibold text-[#294eed] containerPadding"> {title} </h1>

        <div className="flex justify-between items-center">
          <div
            className="flex containerPadding items-center flex-row overflow-x-scroll mediaScrollBar w-full space-x-24"
            ref={scrollRef}
          >
            {usableData?.map((media, index) => (
              <div key={media.id} className="relative ml-[80px]">
                
                <img 
                  src={numbers[index]}
                  alt=""
                  className="absolute -left-2/3 md:-left-1/2 bottom-2" 
                />

                <MediaScrollImg
                  ImageUrl={`${API_ENDPOINTS.IMAGE_POSTER}${media.poster_path}`}
                  alt={media.title}
                  id={media.id}
                  mediaType={mediaType}
                />
              </div>
            ))}
          </div>

          <MediaScrollBtns scrollRef={scrollRef} />
        </div>
      </section>
    )
  );
}