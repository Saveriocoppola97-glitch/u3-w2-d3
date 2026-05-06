import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainSection = ({ title, query }) => {
  const [allFilm, setAllFilm] = useState([]);

  const getFilms = () => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=7a3d7aa5`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        setAllFilm(data.Search || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="container-fluid px-4 my-3 min-vh-100">
      <h3 className="text-white mb-3">{title}</h3>
      {console.log(allFilm)}
      <div className="row justify-content-center">
        {allFilm.slice(0, 6).map((film) => (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-2"
            key={film.imdbID}
          >
            <Link to={"/movie-details/" + film.imdbID}>
              <img
                src={film.Poster}
                alt={film.Title}
                className="img-fluid movie-card"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
