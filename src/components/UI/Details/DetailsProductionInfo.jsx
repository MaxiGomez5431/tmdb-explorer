import { API_ENDPOINTS } from "../../../assets/apiConfig";
import { useMediaType } from "../../../context/MediaContext";
import useFetch from "../../../hooks/useFetch";


export default function DetailsProductionInfo ({id}) {
  const mediaType = useMediaType()
  let mediaUrl = mediaType === "movie" ? API_ENDPOINTS.GET_MOVIE_DETAILS : API_ENDPOINTS.GET_SERIE_DETAILS
  const { data } = useFetch(mediaUrl(id));

  const titleStyle = "text-neutral-400 text-2xl py-1"
  const textStyle = "text-white text-xl font-light py-1"

  return (

    <section className="flex flex-col sm:flex-row flex-wrap justify-between items-start bg-TMDB-950 text-white text-left containerPadding py-10 px-4 relative">

      <div className="my-2">
        <h1 className={titleStyle}>Production company</h1>
        { 
          data &&
          data.production_companies.map((company, index) => (
            <p key={index} className={textStyle}>{company.name}</p>
          ))
        }
      </div>

      <div className="my-2">
        <h1 className={titleStyle}>Production countries</h1>
        { 
          data &&
          data.production_countries.map((country, index) => (
            <p key={index} className={textStyle}>{country.name}</p>
          ))
        }
      </div>

      <div className="my-2">
        <h1 className={titleStyle}>Budget</h1>
        <p className={textStyle}>{`$${data?.budget}`}</p>
      </div>

      <div className="my-2">
        <h1 className={titleStyle}>Revenue</h1>
        <p className={textStyle}>{`$${data?.revenue}`}</p>
      </div>

    </section>

  )
}