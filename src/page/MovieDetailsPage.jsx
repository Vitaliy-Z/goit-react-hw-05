import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "../api/apiServer";
import MovieDetails from "../components/movieDetails/MovieDetails";
import AdditionalInfo from "../components/additionalInfo/AdditionalInfo";
import Error from "../components/error/Error";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (err) {
        setError(err);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <>
      {error && <Error />}
      {movie && (
        <>
          <MovieDetails movie={movie} />
          <AdditionalInfo />
          <Outlet />
        </>
      )}
    </>
  );
}
