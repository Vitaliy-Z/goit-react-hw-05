import { useEffect, useState } from "react";
import MovieList from "../components/moviesList/MoviesList";
import { fetchTrendingMovies } from "../api/apiServer";

export default function HomePage() {
  const [trandingMovies, setTrandingMovies] = useState(null);

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrandingMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrandingMovies();
  }, []);

  return <div>{trandingMovies && <MovieList movies={trandingMovies} />}</div>;
}
