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
    <div className="flex flex-wrap justify-center items-center bg-TMDB-950">
    {
      extendableData &&
      extendableData.map((media) => (
        
        <Backdrop
          ImageUrl={media.backdrop_path} 
          title={media.title || media.name} 
          mediaType={type}
          id={media.id}
          key={media.id}
        />
      ))
    }
    </div>
  )
}