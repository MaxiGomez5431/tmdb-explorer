import { useParams, Outlet } from "react-router";

export default function ExploreGenres() {
  const { query } = useParams(); // Obtiene el valor de :query desde la URL


  return (
    <section className="min-h-lvh">
      <div
        className="bg-TMDB-950 relative pt-20 pb-10 h-auto
        flex flex-col justify-center items-center text-center group"
      >
        <h1 className="text-3xl m-2 text-white font-medium uppercase">{`Searching "${query}"`}</h1>
      </div>

      <Outlet />
    </section>
  );
}