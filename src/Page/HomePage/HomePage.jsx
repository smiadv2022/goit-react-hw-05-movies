// import Header from 'components/Header/Header';
import { getMoviesTranding } from 'Services/Api/Api';
import { Container } from 'components/App.styled';
// import { SearchFormButton } from 'components/SearchBar/SearchBar.styled';
import { TrandingMoviesList } from 'components/TrandigList/TrandingList';
import { Title } from 'components/TrandigList/TrandingList.styled';

import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  const [trandingArray, setTrandingArray] = useState([]);

  useEffect(() => {
    const fnFetch = async () => {
      // setIsLoading(true);
      try {
        const response = await getMoviesTranding();
        // console.log('rrr.results', response.results.length);
        if (response.results.length === 0) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        setTrandingArray(response.results);
        // console.log('setar', trandingArray);
      } catch (error) {
        // toast.info('Sorry, no photo from: "${search}!"');

        console.error(error);
      }
    };
    // if (search !== '') {
    fnFetch();
    // }
  }, []);
  // console.log('beefore return trandig ar', trandingArray);
  return (
    <>
      <Container>
        <Title>Tranding today:</Title>

        <TrandingMoviesList trandingArray={trandingArray} />
      </Container>
    </>
  );
};
