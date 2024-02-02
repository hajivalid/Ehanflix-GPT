export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTk2ZWY2ZGIwN2U4MTc1OTI4MWU3YTkxMWYxNDhlNiIsInN1YiI6IjY1YmNjNWVlYzE0NGRkMDE3YzAwY2RjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RRLBVIJTIss73c6Pw9lKufHlXeqVRUHrxSf2GriZ-gg'
  }
};

//API LIST
export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';