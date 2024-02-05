import React from "react";
import { TrailerTitle } from "./TrailerTitle";
import TrailerVideo from "./TrailerVideo";
import { useSelector } from "react-redux";

function MainTrailer() {

    const movies = useSelector((store) => {
        return store.movies.nowPlayingMovies;
      });
      if (!movies) return;

      const mainMovie = movies[3];
      const {original_title, overview, id} = mainMovie;

    return (
        <div>
            <TrailerTitle title={original_title} overView={overview}/>
            <TrailerVideo movieId={id}/>
        </div>
    )
}

export default MainTrailer;
