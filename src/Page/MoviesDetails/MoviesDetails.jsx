import { getMovieInfo } from 'Services/Api/Api';

import MainInfo from 'components/MainMovieInfo/MainInfo';

import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';

import {
  Link,
  // Link,
  NavLink,
  // Navigate,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from 'react-router-dom';
import { Movie } from './MoviesDetails.styles';
import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? '/');

  const [movieIdDetal, setMovieIdDetal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fnFetch = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieInfo({ movieId });

        if (!response) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }

        setMovieIdDetal(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId !== '') {
      fnFetch();
    }
  }, [movieId]);
  // console.log(movieIdDetal);
  if (!movieIdDetal) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movieIdDetal;

  return (
    <>
      <Container>
        <Link to={goBackLink.current}>
          {/* <Link to={goBackLink}> */}
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
      {isLoading && <Loader />}
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
