import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainTrailer from './MainTrailer';
import MovieGenres from './MovieGenres';
import usePopularMovies from '../customHooks/usePopularMovies';
import useUpComingMovies from '../customHooks/useUpComingMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';

const Browse = () => {

  //Fetching Movies List
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <div>
      <Header/>
      <MainTrailer/>
      <MovieGenres/>
    </div>
  )
}

export default Browse