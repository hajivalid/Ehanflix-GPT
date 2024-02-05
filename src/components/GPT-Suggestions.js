import React from "react";
import { useSelector } from "react-redux";
import { MovieLists } from "./MovieLists";

const GPTSuggestions = () => {
  const gptResults = useSelector((store) => store.search);
  const {movieNames, movieResults} = gptResults;

  if (!movieNames && !movieResults) return;

  return (
    <div className="mt-5">
      <div className="">
        {movieNames.map((movie, index) => <MovieLists key={movie} title={movie} movies={movieResults[index]} />)}
      </div>
    </div>
  );
};

export default GPTSuggestions;
