import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/UI/Header/Header"
import Home from "./components/UI/Home/Home";
import Explore from "./components/UI/Explore/Explore";
import ExploreMovieGenre from "./components/UI/Explore/ExploreMovieGenre";
import { API_ENDPOINTS } from "./assets/apiConfig";
import MovieDetails from "./components/UI/Details/MovieDetails"

function App() {
  return (
    <main className="h-screen flex flex-col bg-TMDB-950">

      <BrowserRouter>
      
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/genres/:id" element={<ExploreMovieGenre />} />
          <Route path="/explore/movies" element={<Explore title="Explore movies" url={API_ENDPOINTS.GET_POPULAR_MOVIES} page={1}/>} />
          <Route path="/explore/series" element={<Explore title="Explore series" url={API_ENDPOINTS.GET_POPULAR_SERIES} page={1}/>} />
        </Routes>
        
      </BrowserRouter>

    </main>
  );
}

export default App
