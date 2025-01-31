import MovieDetailsHero from "./MovieDetailsHero/MovieDetailsHero"
import MovieActors from "./MovieActors"
import MovieProduction from "./MovieProduction"
import MediaScroll from "../Home/MediaScroll/MediaScroll"
import { useParams } from "react-router";
import { API_ENDPOINTS } from "../../../assets/apiConfig";
import Gradient from "../../utilities/Gradient";

export default function MovieDetails () {
  const { id } = useParams();

  return (

    <>
      <MovieDetailsHero id={id} />
      <MovieActors id={id} />

      <div>
        <MovieProduction id={id}/>
        <Gradient color={"TMDB-950"}/>
      </div>

      <MediaScroll url={API_ENDPOINTS.GET_MOVIE_RECOMMENDATION(id)} title={"Recommendations"} className={"bg-TMDB-800 pt-16"}/>
      <MediaScroll url={API_ENDPOINTS.GET_MOVIE_SIMILAR(id)} title={"Similar"} className={"bg-TMDB-800"}/>
    </>
  )
}