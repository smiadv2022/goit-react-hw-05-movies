import React from 'react';
import { TrandigList, TrandigListItem } from './MovieList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ trandingArray, page }) => {
  const location = useLocation();

  return (
    <>
      <TrandigList>
        {trandingArray.map(movie => (
          <TrandigListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title} - ({movie.id})
            </Link>
          </TrandigListItem>
        ))}
      </TrandigList>
    </>
  );
};
