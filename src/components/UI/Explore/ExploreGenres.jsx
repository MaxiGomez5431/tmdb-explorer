import { Outlet, Link } from "react-router";
import useFetch from "../../../hooks/useFetch";
import {useRef} from "react";
import MediaScrollBtns from "../Home/MediaScroll/MediaScrollBtns"

export default function ExploreGenres({ title, url }) {
  const { data } =  useFetch(url || "")
  const scrollRef = useRef(null);

  return (
    <section className="min-h-lvh">
      <div
        className="bg-TMDB-950 relative pt-20 h-auto
        flex flex-col justify-center items-center text-center group"
      >
        <h1 className="text-3xl text-white font-medium uppercase">{title}</h1>

        {data?.genres?.length > 0 && (
          <div className="relative w-full">
            <div
              className="flex containerPadding items-center flex-row overflow-x-scroll overflow-y-visible mediaScrollBar w-full py-5"
              ref={scrollRef}
            >
              {data.genres.map((genre) => (
                <Link
                  key={genre.id}
                  to={`genres/${genre.id}`}
                  className="px-4 py-2 mx-1 text-white rounded bg-slate-700 hover:bg-TMDB-500"
                >
                  {genre.name}
                </Link>
              ))}
            </div>

            <MediaScrollBtns
              scrollRef={scrollRef}
              leftStyle="MediaGenderScrollBtnLeft"
              rightStyle="MediaGenderScrollBtnRight"
              animation={"translate-x-1"}
            />
          </div>
        )}
      </div>

      <Outlet />
    </section>
  );
}