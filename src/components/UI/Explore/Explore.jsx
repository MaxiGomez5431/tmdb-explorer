import useReachBottom from "../../../hooks/useReachBottom"
import useFetch from "../../../hooks/useFetch"
import Backdrop from "../../utilities/Backdrop"
import { useEffect, useState } from "react"

export default function Explore ({title, url, page}) {
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
    let curatedData = data?.results.filter((movie) => movie.backdrop_path)

    if(data && !extendableData) {
      setExtendableData(curatedData)
    } 
    else if (data && isFetching) {

      setExtendableData((prevData) => [...prevData, ...curatedData]);
      setIsFetching(false)
    }
  }, [data])

  return (
    <section className="min-h-lvh">

      <div 
        className="bg-TMDB-900 relative pt-20 pb-10 h-52
        flex flex-col justify-center items-center text-center
        "
      >
        <h1 className="text-3xl m-2 text-white font-medium uppercase">{title}</h1>
        <p className="text-lg text-white font-light">Explore diferent movies and genres from the collection of The Movie Data Base</p>
        <div className="w-full absolute bottom-0 z-10 min-h-[10%] bg-gradient-to-t from-TMDB-950" />
      </div>


      <div className="flex flex-wrap justify-center items-center bg-TMDB-950">
      {
        extendableData &&
        extendableData.map((movie) => (
          
          <Backdrop
            ImageUrl={movie.backdrop_path} 
            title={movie.title || movie.name} 
            id={movie.id}
            key={movie.id}
          />
        ))
      }
      </div>

    </section>
  )
}