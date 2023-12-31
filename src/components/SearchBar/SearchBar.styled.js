import styled from '@emotion/styled';

export const Searchbar = styled.div`
  /* top: 0;
  left: 0;
  /* position: sticky;
  z-index: 1100; */
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  /* padding-left: 10px;
  padding-right: 10px;
  padding-top: 12px;
  padding-bottom: 12px; */
  /* margin-right: auto; */
  /* margin-left: auto; */
  margin: 0;
  padding: 0;

  color: #fff;
  border-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

/*
//  * Стили компонента SearchForm
//  */
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  /* max-width: 600px; */
  /* margin-left: 10px; */
  background-color: #fff;
  border-radius: 5px;
  border-color: blue;
  /* background: gray; */
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-image: 80%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;

  background-color: #adafbb;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background: #303f9f;
    opacity: 1;
  }
  &:hover svg {
    background: #303f9f;
    opacity: 1;
  }
  & svg {
    width: 25px;
    height: 25px;
    fill: red;
  }
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 46px;
  font: inherit;
  font-size: 20px;
  /* border: none; */
  outline: none;
  /* background: gray;
  color: white; */
  padding-left: 10px;
  padding-right: 10px;
  /* background: #3f51b5; */
  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
