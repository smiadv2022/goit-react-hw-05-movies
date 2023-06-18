import { getMovieInfo } from 'Services/Api/Api';

import MainInfo from 'components/MainMovieInfo/MainInfo';

import { useEffect } from 'react';
import { useState } from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';

import {
  Link,
  // Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Movie } from './MoviesDetails.styles';
import { Container } from 'components/App.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';
  // const goBackLink = useRef(location.state?.from ?? '/');

  const [movieIdDetal, setMovieIdDetal] = useState({});

  useEffect(() => {
    const fnFetch = async () => {
      // setIsLoading(true);
      try {
        const response = await getMovieInfo({ movieId });
        // console.log('rrr', response);

        if (!response) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        setMovieIdDetal(response);
      } catch (error) {
        // toast.info('Sorry, no photo from: "${search}!"');

        console.error(error);
      }
    };
    if (movieId !== '') {
      fnFetch();
    }
  }, [movieId, movieIdDetal]);

  const { poster_path, title, vote_average, overview, genres } = movieIdDetal;

  return (
    <>
      <Container>
        {/* <Link to={goBackLink.current}> */}
        <Link to={goBackLink}>
          <h4>
            <BsArrow90DegLeft /> GO BACK
          </h4>
        </Link>
      </Container>
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
      {/* </Container> */}
      <Movie>
        <ul>
          <li>
            <NavLink to="casts">
              <h3>Cast</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews">
              <h3>Reviews</h3>
            </NavLink>
          </li>
        </ul>
      </Movie>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
