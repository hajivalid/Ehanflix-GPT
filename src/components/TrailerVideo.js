import React from "react";
import useTrailerVideo from "../customHooks/useMainTrailerVideo";
import { useSelector } from "react-redux";

const TrailerVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.mainTrailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className="pt-[100px] md:pt-0 bg-black md:bg-none">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
