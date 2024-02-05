import React from "react";
import { MovieLists } from "./MovieLists";
import { useSelector } from "react-redux";

function MovieGenres() {
  const movies = useSelector((store) => store.movies);
  if(!movies) return;
  const { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies } = movies;

  return (
    <div className="bg-black z-20">
      <div className="bg-transparent relative mt-[0px] md:-mt-[250px]">
        <MovieLists title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieLists title={"Popular"} movies={popularMovies} />
        <MovieLists title={"Top Rated"} movies={topRatedMovies} />
        <MovieLists title={"Up Coming"} movies={upComingMovies} />
      </div>
    </div>
  );
}

export default MovieGenres;
