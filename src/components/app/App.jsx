import { Route, Routes } from "react-router-dom";
import HomePage from "../../page/HomePage";
import MoviesPage from "../../page/MoviesPage";
import MovieDetailsPage from "../../page/MovieDetailsPage";
import NotFoundPage from "../../page/NotFoundPage";

import "./App.css";
import MovieCast from "../movieCast/MovieCast";
import MovieReviews from "../movieReviews/MovieReviews";
import Navigation from "../navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
