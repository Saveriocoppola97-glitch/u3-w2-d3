import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import FooterNtx from "./components/FooterNtx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Hero />
      <Routes>
        <Route
          path="/"
          element={<MainSection title="Trending Now" query="avengers" />}
        />
        <Route
          path="tv-shows"
          element={<MainSection title="Watch it Again" query="harry potter" />}
        />
        <Route
          path="movies"
          element={<MainSection title="New Releases" query="star wars" />}
        />
        <Route path="/movie-details/:movieId" element={<Details />} />
      </Routes>
      <footer>
        <FooterNtx />
      </footer>
    </BrowserRouter>
  );
}

export default App;
