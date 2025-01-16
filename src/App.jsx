import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/UI/Header"
import Home from "./components/UI/Home/Home";

function App() {
  return (
    <main className="h-screen flex flex-col">

      <BrowserRouter>
      
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<div>Hola</div>} />
        </Routes>
        
      </BrowserRouter>

    </main>
  );
}

export default App
