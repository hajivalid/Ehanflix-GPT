export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  },
};


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
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
