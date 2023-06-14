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
import { Container } from 'components/App.styled';

export const SearchbarForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText.trim() === '') {
      return;
    }
    onSubmit(searchText);

    setSearchText('');
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        {' '}
        <SearchFormLabel></SearchFormLabel>
        <SearchFormInput
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
