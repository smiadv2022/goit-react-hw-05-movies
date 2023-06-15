import { getMovieReviews } from 'components/Api/Api';
import { Movie } from 'components/MoviesDetails/MoviesDetails.styles';
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
      // setIsLoading(true);
      try {
        const response = await getMovieReviews({ movieId });
        console.log('rrr', response);
        setReviews(response.results);
        console.log('rrr.detalrew', reviews);

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

    fnFetch();
  }, [movieId, reviews]);

  if (!reviews) {
    return;
  }
  console.log('cReviews ', reviews.length);
  const countFind = reviews.length;
  // console.log('cRevID ', rev[0].id);
  return (
    <>
      <Movie>
        Reviews :
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
          <p>Not found reviews</p>
        )}
      </Movie>
      ;
    </>
  );
};

export default Reviews;
