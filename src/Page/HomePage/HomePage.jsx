// import Header from 'components/Header/Header';
import { getMoviesTranding } from 'Services/Api/Api';
import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
// import { SearchFormButton } from 'components/SearchBar/SearchBar.styled';
import { MoviesList } from 'components/MovieList/MovieList';
import { Title } from 'components/MovieList/MovieList.styled';

import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  const [trandingArray, setTrandingArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fnFetch = async () => {
      try {
        setIsLoading(true);
        const response = await getMoviesTranding();

        if (response.results.length === 0) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }

        setTrandingArray(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fnFetch();
  }, []);

  return (
    <>
      <Container>
        <Title>Tranding today:</Title>

        <MoviesList trandingArray={trandingArray} />

        {isLoading && <Loader />}
      </Container>
    </>
  );
};
