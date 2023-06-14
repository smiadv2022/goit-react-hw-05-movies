import React from 'react';
import { NavLink } from 'react-router-dom';

const ExtraInfo = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="casts">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ExtraInfo;
