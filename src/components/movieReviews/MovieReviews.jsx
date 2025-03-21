import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsMovieById, makeSrcForPoster } from "../../api/apiServer";

import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviewsMovieById(movieId);
        setReviews(data);
      } catch (err) {
        setError(err);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <Error />}
      {reviews.length === 0 ? (
        <p>No reviews yet!</p>
      ) : (
        <ul className={styles.list}>
          {reviews.map((el) => (
            <li key={el.id} className={styles.item}>
              <div className={styles.wrapper}>
                <img
                  src={makeSrcForPoster(el.author_details.avatar_path)}
                  alt={`Photo by ${el.author}`}
                  className={styles.image}
                />
                <h4 className={styles.name}>{el.author}</h4>
              </div>
              <p className={styles.text}>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
