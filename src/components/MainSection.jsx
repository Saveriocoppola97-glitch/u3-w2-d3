/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainSection = ({ title, query }) => {
  const [allFilm, setAllFilm] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFilms = () => {
    setLoading(true);

    fetch("https://www.omdbapi.com/?s=" + query + "&apikey=7a3d7aa5")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllFilm(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="container-fluid px-4 my-3 min-vh-100">
      <h3 className="text-white mb-3">{title}</h3>
      {loading === true && (
        <div className="text-center my-5">
          <div className="spinner-border text-light" role="status"></div>
        </div>
      )}
      {loading === false && (
        <div className="row justify-content-center">
          {allFilm.slice(0, 6).map((film) => {
            return (
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainSection;
