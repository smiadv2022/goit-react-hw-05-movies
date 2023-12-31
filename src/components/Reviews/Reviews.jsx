import { getMovieReviews } from 'Services/Api/Api';
import { Movie } from 'Page/MoviesDetails/MoviesDetails.styles';
// import { TrandingMoviesList } from 'components/TrandigList/TrandingList';
// import {
//   TrandigList,
//   TrandigListItem,
// } from 'components/TrandigList/TrandingList.styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fnFetch = async () => {
      try {
        const response = await getMovieReviews({ movieId });

        if (!response) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (movieId !== '') {
      fnFetch();
    }
  }, [movieId]);

  if (!reviews) {
    return;
  }

  const countFind = reviews.length;

  return (
    <>
      <Movie>
        <h3>Reviews:</h3>
        {countFind > 0 ? (
          <ul>
            {reviews.map(rev => (
              <li key={rev.id}>
                <h3>{rev.author}</h3>
                <p>{rev.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h4>
            {' '}
            <br />
            <br />
            Not found reviews{' '}
          </h4>
        )}
      </Movie>
      ;
    </>
  );
};

export default Reviews;
