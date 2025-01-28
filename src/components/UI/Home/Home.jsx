import Hero from "./Hero/Hero"
import MediaScroll from "./MediaScroll/MediaScroll"
import Collection from "./Collection/Collection"
import { API_ENDPOINTS } from "../../../assets/apiConfig"

function Home() {

  return (
    <>
      <Hero/>

      <MediaScroll url={API_ENDPOINTS.GET_POPULAR_MOVIES(2)}     title={"Popular Movies"} id="first"/>
      <MediaScroll url={API_ENDPOINTS.GET_NOW_PLAYING_MOVIES} title={"Now Playing"}/>
      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_MOVIES}   title={"Top Rated"}/>
      <MediaScroll url={API_ENDPOINTS.GET_UPCOMING_MOVIES}    title={"Upcoming Movies"}/>

      <Collection id={264}/>

      <MediaScroll url={API_ENDPOINTS.GET_POPULAR_MOVIES(3)}     title={"Popular Movies"}/>
      <MediaScroll url={API_ENDPOINTS.GET_NOW_PLAYING_MOVIES} title={"Now Playing"}/>
      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_MOVIES}   title={"Top Rated"}/>
      <MediaScroll url={API_ENDPOINTS.GET_UPCOMING_MOVIES}    title={"Upcoming Movies"}/>

      
    </>
  )
}

export default Home