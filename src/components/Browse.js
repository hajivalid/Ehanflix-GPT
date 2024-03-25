import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainTrailer from "./MainTrailer";
import MovieGenres from "./MovieGenres";
import usePopularMovies from "../customHooks/usePopularMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import GPTSearch from "./GPT-Search";
import { useSelector } from "react-redux";
import GPTSuggestions from "./GPT-Suggestions";

const Browse = () => {
  const searchToggle = useSelector((store) => store.search.searchToggle);

  //Fetching Movies List
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  // var player;
  // useEffect(() => {
  //   // Load YouTube iframe API script dynamically
  //   const tag = document.createElement('script');
  //   tag.src = 'https://www.youtube.com/iframe_api';
  //   const firstScriptTag = document.getElementsByTagName('script')[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //   // Callback function once the script is loaded
  //   window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  //   // Clean up function to remove the callback and prevent memory leaks
  //   return () => {
  //     delete window.onYouTubeIframeAPIReady;
  //   };
  // }, []);

  // function onYouTubeIframeAPIReady() {
  //   player = new window.YT.Player("mainTrailerVideo", {
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     },
  //   });
  // }
  // function onPlayerReady() {
  //   console.log("hey Im ready");
  //   //do whatever you want here. Like, player.playVideo();
  // }
  
  // function onPlayerStateChange() {
  //   console.log("my state changed");
  // }

  return (
    <div>
      <Header />
      {searchToggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainTrailer />
          <MovieGenres />
        </>
      )}
    </div>
  );
};

export default Browse;
