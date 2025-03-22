import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const HomePage = lazy(() => import("../../page/HomePage"));
const MoviesPage = lazy(() => import("../../page/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../page/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../page/NotFoundPage"));

import MovieCast from "../movieCast/MovieCast";
import MovieReviews from "../movieReviews/MovieReviews";
import Navigation from "../navigation/Navigation";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Suspense
          fallback={
            <PacmanLoader
              color="red"
              cssOverride={{
                margin: "30px auto",
                color: "#007bff"
              }}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
