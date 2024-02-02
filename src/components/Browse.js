import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainTrailer from './MainTrailer';
import MovieGenres from './MovieGenres';

const Browse = () => {

  //Fetching Now Playing Movies
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainTrailer/>
      <MovieGenres/>
    </div>
  )
}

export default Browse