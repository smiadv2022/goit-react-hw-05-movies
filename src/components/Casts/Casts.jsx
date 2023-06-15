import { getMovieCasts } from 'components/Api/Api';
import {
  Movie,
  MoviePoster,
} from 'components/MoviesDetails/MoviesDetails.styles';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastsList } from './Casts.styled';

const Casts = () => {
  const [casts, setCasts] = useState();
  const { movieId } = useParams();

  // console.log('movieId??????', movieId);

  useEffect(() => {
    const fnFetch = async () => {
      // setIsLoading(true);
      try {
        const response = await getMovieCasts({ movieId });
        console.log('ccc', response);
        setCasts(response.cast);
        console.log('ccc.detalcostst', response.cast);

        if (!response) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        // setMovieIdDetal(response);
        // console.log('movieIdDetal', movieIdDetal.title);
      } catch (error) {
        // toast.info('Sorry, no photo from: "${search}!"');

        console.error(error);
      }
    };
    // if (search !== '') {
    fnFetch();
    // }
  }, [movieId]);

  if (!casts) {
    return;
  }

  // useEffect(() => {
  //   const fetchCast = async () => {
  //     try {
  //       const response = await getMovieCasts({ movieId });
  //       setCasts(response.casts);
  //       // console.log('casts response', response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCast();
  // }, [movieId]);

  // if (!casts) {
  //   return;
  // }
  console.log('casts ', movieId);
  return (
    <div>
      <Movie>
        {/* {' '} */}
        Casts:
        <ul>
          {casts.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              <CastsList>
                <MoviePoster>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : 'noFound'
                    }
                    alt="actor`s"
                    width="150"
                    // height="320"
                  ></img>
                </MoviePoster>

                <div>
                  <h2>{name}</h2>
                  <h3>Character: {character} </h3>
                </div>
              </CastsList>
            </li>
          ))}
        </ul>
      </Movie>
    </div>
  );
};

export default Casts;
