import React, { useState } from "react";
import { TrailerTitle } from "./TrailerTitle";
import TrailerVideo from "./TrailerVideo";
import { useSelector } from "react-redux";

function MainTrailer() {
    const [volume, setVolume] = useState('0');
    const movies = useSelector((store) => {
        return store.movies.nowPlayingMovies;
      });
      if (!movies) return;

      const volumeToggle = () => {
        setVolume(!volume);
      }

      const mainMovie = movies[0];
      const {original_title, overview, id} = mainMovie;

    return (
        <div>
            <TrailerTitle title={original_title} overView={overview} volumeToggle={volumeToggle}/>
            <TrailerVideo movieId={id} mute={volume}/>
        </div>
    )
}

export default MainTrailer;
