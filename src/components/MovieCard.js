import React from 'react';
import { POSTER_URL } from '../utils/constants';

export const MovieCard = ({movieData}) => {

  if(!movieData?.poster_path) return;

  return (
    <div>
        <div className='w-[120px] md:w-[190px] mr-3 hover:scale-90 hover:origin-center hover:ease-in hover:duration-150'>
            <img className='rounded-md' src={POSTER_URL + movieData?.poster_path} alt="Poster" />
        </div>
    </div>
  )
}
