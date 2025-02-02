import useReachBottom from "../../../hooks/useReachBottom"
import useFetch from "../../../hooks/useFetch"
import Backdrop from "../../utilities/Backdrop"
import { useEffect, useState } from "react"

export default function ExploreCatalog({url, page, type}) {
  const [actualPage, setActualPage] = useState(page)
  const [extendableData, setExtendableData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const {data} = useFetch(url(actualPage))

  useReachBottom(() => {addMoreMovies()})
  
  const addMoreMovies = () => {
    setActualPage(actualPage + 1)
    setIsFetching(true)
  }

  useEffect(() => {

    setExtendableData(null);
    setActualPage(page);

  }, [url, page]);

  useEffect(() => {
    let curatedData = data?.results.filter((media) => media.backdrop_path)

    if(data && !extendableData) {
      setExtendableData(curatedData)
    } 
    else if (data && isFetching) {

      setExtendableData((prevData) => [...prevData, ...curatedData]);
      setIsFetching(false)
    }
  }, [data])


  return (

    <div className="flex flex-col bg-TMDB-950 justify-center items-center containerPadding">
      <div className="flex flex-row flex-wrap justify-between items-center bg-TMDB-950">
        {
          extendableData &&
          extendableData.map((media) => (
            <div key={media.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <Backdrop
                ImageUrl={media.backdrop_path} 
                title={media.title || media.name} 
                mediaType={type}
                id={media.id}
              />
            </div>
          ))
        }
      </div>

      <i className="fa-solid fa-spinner text-6xl text-white m-10 animate-spin" /> 
    </div>
  )
}