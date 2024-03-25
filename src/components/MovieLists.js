import React from "react";
import { MovieCard } from "./MovieCard";
import { useSelector } from "react-redux";

export const MovieLists = ({ title, movies }) => {
  const searchToggle = useSelector((store) => store.search.searchToggle);
  const bgColor = (!searchToggle)?"bg-gradient-to-t from-black":"";
  const titleColor = (!searchToggle)?"text-white":"text-black";

  return (
    <div className="pt-3 md:pt-0 mb-4">
      <h1 className={`${titleColor} pl-[30px] md:pl-[50px] text-[12px] md:text-[20px] font-extrabold mb-2`}> {title} </h1>
      <div className={`pl-[30px] md:pl-[50px] ${bgColor} flex overflow-x-scroll no-scrollbar`}>
          {movies?.map((movie) => (
            (movie.poster_path && <MovieCard key={movie.id} movieData={movie} />)
          ))}
      </div>
    </div>
  );
};
