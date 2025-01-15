import Hero from "./Hero/Hero"
import MediaScroll from "./MediaScroll/MediaScroll"
import { API_ENDPOINTS } from "../../../assets/apiConfig"

function Home() {

  return (
    <>
      <Hero/>
      <MediaScroll url={API_ENDPOINTS.GET_POPULAR_MOVIES} title={"prueba"}/>
      
    </>
  )
}

export default Home