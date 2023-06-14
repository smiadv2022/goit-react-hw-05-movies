import React from 'react';

const MainInfo = ({ posterPath, title, popularity, overview, genres }) => {
  return (
    <div>
      MainInfo
      <img
        src={posterPath ? posterPath : ''}
        alt="Movie`s poster"
        width="200"
      ></img>
      <h1>{title}</h1>
      <p>User rating: {popularity} from 10.</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres}</p>
    </div>
  );
};

export default MainInfo;
