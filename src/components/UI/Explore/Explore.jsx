import { Outlet, Link } from "react-router";
import useFetch from "../../../hooks/useFetch";

export default function Explore({title, url}) {
  const { data } = url ? useFetch(url) : { data: null };

  return (
    <section className="min-h-lvh">
      <div
        className="bg-TMDB-900 relative pt-20 pb-10 h-auto
        flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-3xl m-2 text-white font-medium uppercase">{title}</h1>

        <div className="flex flex-wrap justify-left items-center overflow-hidden">
          {data?.genres.map((genre) => (
            <Link
              key={genre.id}
              to={`genres/${genre.id}`}
              className="px-4 py-2 text-white hover:bg-TMDB-500"
            >
              {genre.name}
            </Link>
          ))}
        </div>

        <div className="w-full absolute bottom-0 z-10 min-h-[10%] bg-gradient-to-t from-TMDB-950" />
      </div>

      <Outlet />
    </section>
  );
}