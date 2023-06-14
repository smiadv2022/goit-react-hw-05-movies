import {
  Movie,
  MovieAbout,
  MoviePoster,
} from 'components/MoviesDetails/MoviesDetails.styles';
import React from 'react';

const MainInfo = ({ posterPath, title, popularity, overview, genres }) => {
  return (
    <div>
      <Movie>
        <MoviePoster>
          <img
            src={posterPath ? posterPath : ''}
            alt="Movie`s poster"
            width="200"
          ></img>
        </MoviePoster>
        <MovieAbout>
          <h1>{title}</h1>
          <h3>User rating: {popularity} from 10.</h3>
          <h2>Overview:</h2>
          <h3>{overview}</h3>
          <h2>Genres:</h2>
          <h4>{genres}</h4>
        </MovieAbout>
      </Movie>
    </div>
  );
};

export default MainInfo;
