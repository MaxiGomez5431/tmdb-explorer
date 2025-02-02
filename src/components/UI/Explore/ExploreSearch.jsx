import ExploreCatalog from "./ExploreCatalog";
import Explore from "./Explore";
import { useParams } from "react-router";

export default function ExploreSearch({url}) {
  const { query } = useParams();
  const buildUrl = (page) => url(query, page);

  return (
    <>
      

      <ExploreCatalog 
        url={buildUrl}
        page={1} 
        type={"movie"}
      />
    </>
  );
}