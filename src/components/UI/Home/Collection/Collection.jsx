import CollectionGradient from "./CollectionGradient"
import Backdrop from "../../../utilities/Backdrop"
import useFetch from "../../../../hooks/useFetch"
import { API_ENDPOINTS } from "../../../../assets/apiConfig"
import { useEffect } from "react"


export default function Collection ({id}) {
  const collectionData = useFetch(API_ENDPOINTS.GET_COLLECTION(id))

  useEffect(() => {
    console.log("collection data, ", collectionData)
  })

  return (
    <section 
      className="min-h-[90%] bg-cover bg-center transition-all duration-700 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP}${collectionData?.data?.backdrop_path})`,
      }}
    >

    <div
      className="
      bg-black/40
      z-10
      flex flex-col justify-evenly items-center
      transition-all duration-700
      w-full h-full"
    > 

      

      <div className="flex flex-wrap justify-between w-full containerPadding">
        {
          collectionData?.data?.parts.map((movie) => (
            <Backdrop
              ImageUrl={movie.backdrop_path}
              title={movie.title}
              id={movie.id}
              key={movie.id}
              mediaType={"movie"}
            />
          ))
        }
      </div>


    </div>
  
      
    </section>
  )
}