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
      className="min-h-full w-full bg-cover bg-center transition-all duration-700 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP}${collectionData?.data?.backdrop_path})`,
      }}
    >

    <div
      className="
      bg-black/40
      p-4 z-10
      flex flex-col justify-evenly items-center
      transition-all duration-700
      w-full h-full"
    > 



      <img src={`https://images.squarespace-cdn.com/content/v1/5c62c09c4d546e27dc1016c7/1549976171566-X2RVWGU4G2GD1JXMVTRQ/logo.png?format=1500w`} alt="" />

      <div className="flex flex-wrap justify-evenly w-full">
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
    

    <CollectionGradient />
      
    </section>
  )
}