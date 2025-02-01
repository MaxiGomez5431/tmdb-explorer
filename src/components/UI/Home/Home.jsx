import Hero from "./Hero/Hero"
import MediaScroll from "./MediaScroll/MediaScroll"
import Collection from "./Collection/Collection"
import { API_ENDPOINTS } from "../../../assets/apiConfig"

function Home() {

  return (
    <>
      <Hero/>

      <MediaScroll url={API_ENDPOINTS.GET_POPULAR_MOVIES(3)}  title={"Popular Movies"}  mediaType={"movie"} id="first"/>
      <MediaScroll url={API_ENDPOINTS.GET_NOW_PLAYING_MOVIES} title={"Now Playing"}     mediaType={"movie"}/>
      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_MOVIES}   title={"Top Rated"}       mediaType={"movie"}/>
      <MediaScroll url={API_ENDPOINTS.GET_UPCOMING_MOVIES}    title={"Upcoming Movies"} mediaType={"movie"}/>

      <Collection id={264}/>

      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_SERIES}   title={"Top Rated Series"}       mediaType={"serie"}/>
      <MediaScroll url={API_ENDPOINTS.GET_POPULAR_SERIES(2)}  title={"Popular Movies Series"}  mediaType={"serie"}/>
      <MediaScroll url={API_ENDPOINTS.GET_NOW_PLAYING_SERIES} title={"Now Playing Series"}     mediaType={"serie"}/>
      
    </>
  )
}

export default Home