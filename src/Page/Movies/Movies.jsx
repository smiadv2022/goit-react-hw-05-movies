import { getMoviesSearch } from 'Services/Api/Api';
import { Container } from 'components/App.styled';
import { SearchbarForm } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MovieList/MovieList';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
// import { toast } from 'react-toastify';

export const Movies = () => {
  // const [search, setSearch] = useState('');
  // const location = useLocation();
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const [error, setError] = useState(null);
  // const page = 1;
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = filterText => {
    setSearchParams({ query: filterText, page: '1' });
    setIsLoading(true);

    setImages([]);
  };
  const onClick = () => {
    setSearchParams({ query: query, page: String(Number(currentPage) + 1) });
  };
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const query = searchParams.get('query');
    const currentPage = searchParams.get('page');

    setError(null);
    if (!query) return;
    const fnFetch = async () => {
      try {
        setIsLoading(true);
        const response = await getMoviesSearch(query, currentPage);

        if (response.results.length === 0) {
          throw new Error(`Sorry, no movies for query!`);
        }

        setImages(prevImages => [...prevImages, ...response.results]);

        setTotalPages(response.total_pages);
      } catch (error) {
        setError(error);
        setTotalPages(0);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query !== '') {
      fnFetch();
    }
  }, [searchParams]);

  return (
    <div>
      <Container>
        <SearchbarForm
          onSubmit={handleSearch}
          value={searchParams.get('query')}
        />
        {error && <h2>{error.message}</h2>}
        <MoviesList trandingArray={images} />

        {isLoading && <Loader />}
        {currentPage < totalPages && (
          <Button onClick={onClick}>
            Load more {currentPage}/({totalPages})
          </Button>
        )}
      </Container>
    </div>
  );
};
