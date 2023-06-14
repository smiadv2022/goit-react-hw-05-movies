import React from 'react';
import { TrandigList, TrandigListItem } from './TrandingList.styled';
import { Link } from 'react-router-dom';

export const TrandingMoviesList = ({ trandingArray }) => {
  // console.log('nextlist', trandingArray);
  return (
    <TrandigList>
      {trandingArray.map(movie => (
        <TrandigListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </TrandigListItem>
      ))}
    </TrandigList>
  );
};
