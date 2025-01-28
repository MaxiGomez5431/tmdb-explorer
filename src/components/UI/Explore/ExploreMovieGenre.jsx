import { API_ENDPOINTS } from "../../../assets/apiConfig";
import ExploreMovies from "./Explore"
import { useParams } from "react-router";

export default function ExploreGenres() {
  const { id } = useParams();
  const buildUrl = (page) => API_ENDPOINTS.GET_MOVIE_BY_GENRE(id, page);

  return (
    <ExploreMovies 
      title="Explore Genre" 
      url={buildUrl}
      page={1} 
    />
  );
}