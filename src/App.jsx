import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/UI/Header"
import Home from "./components/UI/Home/Home";

function App() {
  return (
    <main className="h-screen w-screen flex flex-col">

      <BrowserRouter>
      
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        
      </BrowserRouter>

    </main>
  );
}

export default App
