import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetch("https://www.omdbapi.com/?i=" + movieId + "&apikey=7a3d7aa5")
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  if (!movie) {
    return <div className="text-white text-center mt-5">Loading...</div>;
  }

  return (
    <div className="text-center text-white mt-3">
      <h1>{movie.Title}</h1>
      <h3>{movie.Genre}</h3>
      <p>{movie.Country}</p>
      <p>{movieId}</p>

      <img src={movie.Poster} alt={movie.Title} style={{ width: "300px" }} />

      <p className="m-1">
        {movie.Ratings && movie.Ratings.length > 0
          ? movie.Ratings[0].Value
          : "No rating"}
      </p>

      <p className="my-5 mt-2 px-5">{movie.Plot}</p>
    </div>
  );
};

export default Details;
