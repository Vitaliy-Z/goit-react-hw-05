import axios from "axios";

const API = {
  token:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTRjYTMzM2ZjMDQ1ZTYyOTdkYTZlZTBjOWZiNGVlMSIsIm5iZiI6MTYwODc1NTA1Ni4xMTIsInN1YiI6IjVmZTNhNzcwMzE2NDRiMDA0MGY2NTIzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.udard3WOMinUJkQQtAM3u83rbS9I6IJPB8vXJpZTi44",
  key: "894ca333fc045e6297da6ee0c9fb4ee1"
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API.token}`;
axios.defaults.params = {
  language: "ua-UA"
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    params: { page: 1 }
  });
  return data.results;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: { page: 1, query }
  });
  return data.results;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const fetchCastMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchReviewsMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
};

export const makeSrcForPoster = (posterPath) =>
  posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://png.pngtree.com/png-clipart/20230823/original/pngtree-default-placeholder-businessman-half-length-portr-picture-image_8195617.png";
