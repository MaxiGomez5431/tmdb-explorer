import Hero from "./Hero/Hero"
import MediaScroll from "./MediaScroll/MediaScroll"
import MediaScrollTop from "./MediaScroll/MediaScrollTop"
import { API_ENDPOINTS } from "../../../assets/apiConfig"
import Footer from "../Footer/Footer"
import ImageGrid from "./ImagesGrid/ImagesGrid"

function Home() {

  return (
    <>
      <Hero/>

      <MediaScroll url={API_ENDPOINTS.GET_POPULAR_MOVIES(2)}  title={"Popular Movies"}     mediaType={"movie"} id="first"/>
      <MediaScroll url={API_ENDPOINTS.GET_NOW_PLAYING_MOVIES(3)} title={"Movies Now Playing"} mediaType={"movie"}/>
      
      <MediaScrollTop url={API_ENDPOINTS.GET_TOP_RATED_MOVIES(1)}  title={"Top 10 Movies"}  mediaType={"movie"}/>

      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_MOVIES(2)}   title={"Top Rated"}       mediaType={"movie"}/>
      <MediaScroll url={API_ENDPOINTS.GET_UPCOMING_MOVIES}    title={"Upcoming Movies"} mediaType={"movie"}/>
      
      <MediaScrollTop url={API_ENDPOINTS.GET_TOP_RATED_SERIES(1)}  title={"Top 10 Series"}  mediaType={"serie"}/>

      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_SERIES(2)}  title={"Recomendated Series"}  mediaType={"serie"}/>
      <MediaScroll url={API_ENDPOINTS.GET_TOP_RATED_SERIES(3)}  title={"Popular Movies Series"}  mediaType={"serie"}/>

      <ImageGrid />

      <Footer />
      
    </>
  )
}

export default Home