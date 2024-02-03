import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieLists = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white pl-[50px] text-[20px] font-bold mb-3">{title}</h1>
      <div className="pl-[50px] bg-gradient-to-t from-black flex overflow-x-scroll no-scrollbar">
        <div className="flex mb-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
