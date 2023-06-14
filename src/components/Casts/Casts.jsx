import { getMovieCasts } from 'components/Api/Api';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Casts = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  console.log('movieId??????', movieId);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await getMovieCasts({ movieId });
        setCasts(response.casts);
        console.log('casts response', response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (!casts) {
    return;
  }
  console.log('casts ', casts);
  return (
    <div>
      Casts
      {/* <ul>
        {casts.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : 'noFound'
              }
              alt="actor`s"
              width="220"
              height="320"
            ></img>
            <p>{name}</p>
            <p>Character: {character} </p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Casts;
