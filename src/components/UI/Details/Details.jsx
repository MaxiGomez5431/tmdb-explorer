import DetailsHero from "./DetailsHero/DetailsHero"
import DetailsCast from "./DetailsCast/DetailsCast"
import DetailsProductionInfo from "./DetailsProductionInfo"
import MediaScroll from "../Home/MediaScroll/MediaScroll"
import { API_ENDPOINTS } from "../../../assets/apiConfig";
import { useParams } from "react-router";
import { useMediaType } from "../../../context/MediaContext";
import Footer from "../Footer/Footer";

export default function Details() {
  const { id } = useParams();
  const mediaType = useMediaType()
  
  const recomendationsUrl =
    mediaType === "movie"
      ? API_ENDPOINTS.GET_MOVIE_RECOMMENDATION(id)
      : API_ENDPOINTS.GET_SERIE_RECOMMENDATION(id);

  const similarUrl =
    mediaType === "movie"
      ? API_ENDPOINTS.GET_MOVIE_SIMILAR(id)
      : API_ENDPOINTS.GET_SERIE_SIMILAR(id);

  return (
    <>
      <DetailsHero id={id} />
      <DetailsCast id={id} />

      <div>
        <DetailsProductionInfo id={id} />
      </div>

      <MediaScroll url={recomendationsUrl} title={"Recommendations"} className={"bg-TMDB-950 group"} mediaType={mediaType} />
      <MediaScroll url={similarUrl} title={"Similar"} className={"bg-TMDB-950 group"} mediaType={mediaType} />

      <Footer />
    </>
  );
}
