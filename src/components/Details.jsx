import { useParams } from "react-router-dom";

const Details = () => {
  const { movieId } = useParams();

  return (
    <div className="text-white text-center min-vh-100">
      <h2>Details</h2>
      <p>ID film: {movieId}</p>
    </div>
  );
};

export default Details;
