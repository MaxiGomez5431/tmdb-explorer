import ExploreCatalog from "./ExploreCatalog";
import { useParams } from "react-router";

export default function ExploreGenres({genresUrl, type}) {
  const { id } = useParams();
  const buildUrl = (page) => genresUrl(id, page);

  return (
    <ExploreCatalog 
      url={buildUrl}
      page={1} 
      type={type}
    />
  );
}