import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=" + movieId + "&apikey=7a3d7aa5")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore fetch");
        }
      })
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div className="text-center text-white mt-3">
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <h3>{movie.Genre}</h3>
          <p>{movie.Country}</p>
          <p>{movieId}</p>
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ width: "300px" }}
          />
          <p className="m-1">{movie.Ratings[0].Value}</p>
          <p className="my-5 mt-2 px-5">{movie.Plot}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
