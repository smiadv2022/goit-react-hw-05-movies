import { getMovieInfo } from 'components/Api/Api';
import { Container } from 'components/App.styled';
import MainInfo from 'components/MainMovieInfo/MainInfo';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();
  // const location = useLocation();
  const [movieIdDetal, setMovieIdDetal] = useState({});

  useEffect(() => {
    const fnFetch = async () => {
      // setIsLoading(true);
      try {
        const response = await getMovieInfo({ movieId });
        console.log('rrr', response);
        setMovieIdDetal(response);
        console.log('rrr.detal', movieIdDetal);

        if (!response) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        // setMovieIdDetal(response);
        console.log('movieIdDetal', movieIdDetal.title);
      } catch (error) {
        // toast.info('Sorry, no photo from: "${search}!"');

        console.error(error);
      }
    };
    // if (search !== '') {
    fnFetch();
    // }
  }, [movieId, movieIdDetal]);

  // console.log(movieId);
  const { poster_path, title, vote_average, overview, genres } = movieIdDetal;
  console.log(overview);
  return (
    <Container>
      <MainInfo
        posterPath={
          poster_path
            ? `https://image.tmdb.org/t/p/w342/${poster_path}`
            : 'noFound'
        }
        title={title}
        popularity={vote_average}
        overview={overview}
        genres={
          genres && genres.length > 0
            ? genres.map(({ name }) => name).join(', ') + '.'
            : ''
        }
      />
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
      <Outlet />
    </Container>
  );
};

export default MoviesDetails;
