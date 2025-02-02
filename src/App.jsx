import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/UI/Header/Header"
import Home from "./components/UI/Home/Home";
import ExploreMovieGenre from "./components/UI/Explore/ExploreMovieGenre";
import { API_ENDPOINTS } from "./assets/apiConfig";
import Details from "./components/UI/Details/Details"
import Explore from "./components/UI/Explore/Explore";
import ExploreCatalog from "./components/UI/Explore/ExploreCatalog";
import ExploreSearch from "./components/UI/Explore/ExploreSearch.jsx";
import { MediaProvider } from "./context/MediaContext.jsx";

function App() {
  return (
    <main className="h-screen flex flex-col bg-TMDB-950">

      <BrowserRouter>
        <Header />

        <MediaProvider>

          <Routes>
            <Route path="/" element={<Home />} />


            <Route path="/movie/:id" element={<Details />} />
            <Route path="/serie/:id" element={<Details />} />

            <Route path="/search/:query" element={<Explore title="Movies"/>}>
              <Route index element={<ExploreSearch url={API_ENDPOINTS.SEARCH_MOVIE}/>} />
            </Route>

            <Route path="/explore/movies" element={<Explore title="Movies" url={API_ENDPOINTS.GET_MOVIE_GENRES}/>}>
              <Route index element={<ExploreCatalog url={API_ENDPOINTS.GET_POPULAR_MOVIES} page={1} type={"movie"}/>} />
              <Route path="genres/:id" element={<ExploreMovieGenre genresUrl={API_ENDPOINTS.GET_MOVIE_BY_GENRE} type={"movie"} />} />
            </Route>

            <Route path="/explore/series" element={<Explore title="Series" url={API_ENDPOINTS.GET_SERIES_GENRES} />}>
              <Route index element={<ExploreCatalog url={API_ENDPOINTS.GET_POPULAR_SERIES} page={1} type={"serie"}/>} />
              <Route path="genres/:id" element={<ExploreMovieGenre genresUrl={API_ENDPOINTS.GET_SERIE_BY_GENRE} type={"serie"} />} />
            </Route>
          </Routes>

        </MediaProvider>

      </BrowserRouter>

    </main>
  );
}

export default App
