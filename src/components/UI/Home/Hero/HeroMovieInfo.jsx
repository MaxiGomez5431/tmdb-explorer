import Genres from "../../../utilities/Genres"
import Score from "../../../utilities/Score"
import { Link } from "react-router";

export default function HeroMovieInfo ({data, selectedMovie, children}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-white lg:text-4xl md:text-3xl text-2xl my-3">
        {data?.results[selectedMovie]?.title}
      </h1>

      <Genres 
        genreIds={data?.results[selectedMovie]?.genre_ids} 
        className="flex flex-wrap my-3" 
        justify={"justify-center"}
        mediaType={"movies"}
      />

      <Score 
        score={data?.results[selectedMovie].vote_average} 
        className="text-white my-3"
      />

      <Link 
        className="whiteBtn"

        to={`/movie/${data?.results[selectedMovie].id}`}
      >
        <i className="fa-solid fa-circle-info"/>
        <p>See more info</p>
      </Link>
  </div>
  )
}