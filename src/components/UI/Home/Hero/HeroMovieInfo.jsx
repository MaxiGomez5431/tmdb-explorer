import Genres from "../../../utilities/Genres"
import Score from "../../../utilities/Score"

export default function HeroMovieInfo ({data, selectedMovie}) {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-white lg:text-4xl md:text-3xl text-2xl my-3">
        {data?.results[selectedMovie]?.title}
      </h1>

      <Genres 
        genreIds={data?.results[selectedMovie]?.genre_ids} 
        className="flex flex-wrap my-3 justify-center" 
      />

      <Score 
        score={data?.results[selectedMovie].vote_average} 
        className="text-white my-3"
      />
  </div>
  )
}