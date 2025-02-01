import Genres from "../../../utilities/Genres"
import Score from "../../../utilities/Score"
import SeparationSpan from "../../../utilities/SeparationSpan";

export default function HeroMovieInfo ({data, children}) {

  function formatDate(dateString, locale = "en-US") {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {month: "long", year: "numeric" });
  }

  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    let timeString = "";
    
    if (hours > 0) {
      timeString += `${hours}h`;
    }
    
    if (remainingMinutes > 0) {
      if (timeString) timeString += " ";
      timeString += `${remainingMinutes}m`;
    }
    
    return timeString || null;
  }
  

  return (
    <div className="flex flex-col text-left max-w-[40%] space-y-2">
      <h1 className="text-white lg:text-4xl md:text-3xl text-2xl">
        {data?.title || data?.name}
      </h1>

      <Genres 
        genreIds={data?.genres} 
        className="flex flex-wrap my-3 justify-start" 
      />

      <div className="flex items-center space-x-4">
        <p className="text-lg text-gray-400 ">{formatDate(data.release_date || data.first_air_date || "No Release Date Info")}</p>   
        <SeparationSpan />
        <p className="text-lg text-gray-400 ">{formatTime(data.runtime) || `${data.seasons.length} Seasons`}</p>   
      </div>

      <div className="flex items-center space-x-2">
        <Score 
          score={data?.vote_average} 
          className="text-white"
        />
        <p className="text-white text-lg font-semibold">{`/`}</p>
        <p className="text-white text-lg font-semibold">{data?.vote_average}</p>
      </div>

      <div className="!mt-5">
        <h1 className="text-xl text-white font-semibold">{data.tagline || "Synopsis"}</h1>
        <p className="text-md text-white">{data.overview}</p>
      </div>

      {children}
      
    </div>
  )
}