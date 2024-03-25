import React from "react";

const Iframe = ({ trailerVideo, auto, mute }) => {
  return (
    <iframe
      id="mainTrailerVideo"
      className="w-full aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?autoplay=" +
        auto +
        "&mute=" +
        mute +
        "&showinfo=0&modestbranding=0&rel=0&controls=0&loop=0&playlist=" +
        trailerVideo?.key
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default Iframe;
