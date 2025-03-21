import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";

import styles from "./MoviesList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={styles.list}>
      {movies.map((el) => (
        <li key={el.id} className={styles.item}>
          <Link to={`/movies/${el.id}`}>
            <MovieCard movie={el} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
