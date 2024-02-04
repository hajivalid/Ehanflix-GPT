import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";
import { addGPTMovieResults } from "../utils/redux/searchSlice";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const gptSearchInput = useRef();
  const dispatch = useDispatch();
  const identifier = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const searchHandler = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query" +
      gptSearchInput.current.value +
      ". only give me 9 movies, comma separated like the example result given ahead. Example results: Animal, Wonka, Jawan, Salaar, Lift, Leo, Raw, Aquaman, Acide";

    const getGPTSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    if (!getGPTSearchResults?.choices)
      return alert("Oops something went wrong!");

    const GPTMovies =
      getGPTSearchResults?.choices[0]?.message?.content.split(", ");
    const promiseArray = GPTMovies.map((movie) => searchMovieTMDB(movie)); //it will return 9 promises
    const results = await Promise.all(promiseArray);
    console.log(results);

    dispatch(
      addGPTMovieResults({ movieNames: GPTMovies, movieResults: results })
    );
  };
  return (
    <div className="p-7 flex items-center justify-center">
      <form
        className="grid grid-cols-12 text-[18px] bg-[rgba(0,0,0,0.7)] rounded-lg w-[55%]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={gptSearchInput}
          className="w-full bg-transparent p-5 text-white col-start-1 col-end-11 outline-none"
          type="text"
          required
          placeholder={lang[identifier].searchPlaceHolder}
        />
        <button
          className="p-2 text-[18px] font-bold text-[#ff0000] rounded-sm w-full hover:text-white col-start-11 col-end-13"
          type="submit"
          onClick={searchHandler}
        >
          {lang[identifier].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
