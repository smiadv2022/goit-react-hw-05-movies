import React from 'react';
import { TrandigList, TrandigListItem } from './TrandingList.styled';
import { Link, useLocation } from 'react-router-dom';
// import { SearchFormButton } from 'components/SearchBar/SearchBar.styled';

export const TrandingMoviesList = ({ trandingArray }) => {
  const location = useLocation();
  // const backLinkHref = location.state;
  // console.log('LocationM', location.pathname, 'path');
  // console.log('LocationM', location.from, 'from');
  // console.log('nextlist', trandingArray);
  return (
    <>
      <TrandigList>
        {trandingArray.map(movie => (
          <TrandigListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </TrandigListItem>
        ))}
      </TrandigList>
    </>
  );
};
