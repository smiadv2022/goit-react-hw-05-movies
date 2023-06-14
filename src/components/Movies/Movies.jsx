import { getMoviesSearch } from 'components/Api/Api';
import { Container } from 'components/App.styled';
import { SearchbarForm } from 'components/SearchBar/SearchBar';
import { TrandingMoviesList } from 'components/TrandigList/TrandingList';
import {
  Title,
  TrandigList,
  TrandigListItem,
} from 'components/TrandigList/TrandingList.styled';
// import { SearchForm } from 'components/SearchBar/SearchBar.styled';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  // const query = useSearchParams.get('query');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = searchText => {
    // console.log(searchText, 'sbar', search);
    setSearch(searchText);
    setImages([]);
    setError(null);
    setIsLoading(true);
    setPage(1);
    setTotalPages(0);
    // setImages([]);

    console.log(searchText, 'sss', search);
  };

  useEffect(() => {
    const fnFetch = async () => {
      // setIsLoading(true);
      try {
        const response = await getMoviesSearch({ search });
        // console.log('rrr.results', response.results.length);
        if (response.results.length === 0) {
          throw new Error(`Sorry, no movies from trandig day!`);
        }
        setImages(response.results);
        // console.log('setar', trandingArray);
      } catch (error) {
        // toast.info('Sorry, no photo from: "${search}!"');

        console.error(error);
      }
    };
    if (search !== '') {
      fnFetch();
    }
  }, [search]);
  console.log(images, 'simages');
  return (
    <div>
      <Container>
        <SearchbarForm onSubmit={handleSearch} />

        {/* <Container> */}
        {/* <Title>Tranding today</Title> */}

        <TrandingMoviesList trandingArray={images} />
      </Container>
    </div>
  );
};
