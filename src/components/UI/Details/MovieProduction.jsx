import { API_ENDPOINTS } from "../../../assets/apiConfig";
import useFetch from "../../../hooks/useFetch";

export default function MovieDetails ({id}) {
  const { data } = useFetch(API_ENDPOINTS.GET_MOVIE_DETAILS(id));

  const titleStyle = "text-neutral-400 text-2xl py-1"
  const textStyle = "text-white text-xl font-light py-1"

  return (

    <section className="flex flex-wrap justify-between items-center bg-TMDB-950 text-white text-left containerPadding py-10 px-4 relative">

      <div>
        <h1 className={titleStyle}>Production company</h1>
        { 
          data &&
          data.production_companies.map((company) => (
            <p className={textStyle}>{company.name}</p>
          ))
        }
      </div>

      <div>
        <h1 className={titleStyle}>Production countries</h1>
        { 
          data &&
          data.production_countries.map((country) => (
            <p className={textStyle}>{country.name}</p>
          ))
        }
      </div>

      <div>
        <h1 className={titleStyle}>Budget</h1>
        <p className={textStyle}>{`$${data?.budget}`}</p>
      </div>

      <div>
        <h1 className={titleStyle}>Revenue</h1>
        <p className={textStyle}>{`$${data?.revenue}`}</p>
      </div>

    </section>

  )
}