import React from "react";
import useTrailerVideo from "../customHooks/useMainTrailerVideo";
import { useSelector } from "react-redux";
import Iframe from "./Iframe";

const TrailerVideo = ({ movieId, mute }) => {
  const trailerVideo = useSelector((store) => store.movies.mainTrailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className="pt-[100px] md:pt-0 bg-black md:bg-none">
      {trailerVideo && <Iframe trailerVideo={trailerVideo} auto={'1'}/>}
    </div>
  );
};

export default TrailerVideo;
