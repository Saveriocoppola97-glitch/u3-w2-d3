import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recently = () => {
  const [newFilms, setNewFilms] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=breaking%20bad&apikey=7a3d7aa5")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("BREAKING BAD LISTA:", data);
        setNewFilms(data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid px-4 my-4 min-vh-100">
      <h3 className="text-white mb-3">Recently Added</h3>

      <div className="row justify-content-center">
        {newFilms.slice(0, 6).map((film) => (
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

export default Recently;
