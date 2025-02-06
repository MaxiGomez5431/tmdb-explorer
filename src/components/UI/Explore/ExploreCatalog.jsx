import useFetch from "../../../hooks/useFetch"
import Backdrop from "../../utilities/Backdrop"
import { useEffect, useState } from "react"

export default function ExploreCatalog({url, page, type}) {
  const [actualPage, setActualPage] = useState(page)
  const [extendableData, setExtendableData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const {data} = useFetch(url(actualPage))
  
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

      {
        extendableData && extendableData.length > 0 ? (
          <>
            <div className="flex flex-row flex-wrap justify-left items-center w-full bg-TMDB-950">
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
          
          <button className="whiteBtn !w-full !my-10" onClick={addMoreMovies}>
            Load more movies
          </button>
        </>

        ) : (

          <div className="flex justify-center items-center w-auto h-auto bg-TMDB-900 rounded p-10">
            <p className="text-5xl text-white bfont-old">The search had no results, search anything else!</p>
          </div>

        )
      }


      
    </div>
  )
}