import NavBar from "./components/NavBar";
import FooterNtx from "./components/FooterNtx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

function App() {
  return (
    <body className="bg-dark">
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <MainSection title="Trending Now" query="avengers" />
        <MainSection title="Watch it Again" query="harry potter" />
        <MainSection title="New Releases" query="star wars" />
      </main>
      <footer>
        <FooterNtx />
      </footer>
    </body>
  );
}

export default App;
