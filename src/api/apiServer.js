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

// fetchTrendingMovies().then((data) => console.log(data));
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    params: { page: 1 }
  });
  return data;
};

// fetchSearchMovie("sun").then((data) => console.log(data));
export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: { page: 1, query }
  });
  return data;
};

// fetchMovieById(447273).then((data) => console.log(data));
export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

// fetchCreditsMovieById(447273).then((data) => console.log(data));
export const fetchCreditsMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

// fetchReviewsMovieById(447273).then((data) => console.log(data));
export const fetchReviewsMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

// console.log(makeSrcForPoster("/2siOHQYDG7gCQB6g69g2pTZiSia.jpg"));
export const makeSrcForPoster = (posterPath) =>
  `https://image.tmdb.org/t/p/w500${posterPath}`;
