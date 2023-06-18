import React, { useState } from 'react';
// import swal from 'sweetalert';
import { FcSearch } from 'react-icons/fc';

import {
  Searchbar,
  SearchForm,
  SearchFormLabel,
  SearchFormInput,
  SearchFormButton,
} from './SearchBar.styled';
// import { useSearchParams } from 'react-router-dom';

export const SearchbarForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  // if (value) setSearchText(value);
  const handleChange = e => {
    setSearchText(e.target.value);
    // setSearchParams({ query: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText.trim() === '') {
      return;
    }

    // const filterText = e.currentTarget.elements.input.value;
    // console.log(searchText, 'params-------------------', filterText);
    onSubmit(searchText);

    setSearchText('');
  };
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log('params', searchParams);
  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormLabel></SearchFormLabel>
        <SearchFormInput
          name="input"
          type="text"
          autocomplete="off"
          placeholder="Search images and
            photos"
          onChange={handleChange}
          value={searchText}
        ></SearchFormInput>{' '}
        <SearchFormButton>
          <FcSearch />
        </SearchFormButton>
      </SearchForm>
    </Searchbar>
  );
};
