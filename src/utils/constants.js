export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTk2ZWY2ZGIwN2U4MTc1OTI4MWU3YTkxMWYxNDhlNiIsInN1YiI6IjY1YmNjNWVlYzE0NGRkMDE3YzAwY2RjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RRLBVIJTIss73c6Pw9lKufHlXeqVRUHrxSf2GriZ-gg",
  },
};
export const SUPPORTED_LANGUAGES = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "Telugu",
    code: "te",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Kannada",
    code: "ka",
  },
  {
    name: "Tamil",
    code: "ta",
  },
];

//API LIST
export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const POPULAR_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UP_COMING_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
