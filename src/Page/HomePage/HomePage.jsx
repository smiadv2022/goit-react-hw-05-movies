// import Header from 'components/Header/Header';
import { getMoviesTranding } from 'Services/Api/Api';
import { Container } from 'components/App.styled';
// import { SearchFormButton } from 'components/SearchBar/SearchBar.styled';
import { TrandingMoviesList } from 'components/TrandigList/TrandingList';
import { Title } from 'components/TrandigList/TrandingList.styled';

import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  const [trandingArray, setTrandingArray] = useState([]);

  useEffect(() => {
    const fnFetch = async () => {
      try {
        const response = await getMoviesTranding();

        if (response.results.length === 0) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        setTrandingArray(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fnFetch();
  }, []);

  return (
    <>
      <Container>
        <Title>Tranding today:</Title>

        <TrandingMoviesList trandingArray={trandingArray} />
      </Container>
    </>
  );
};
