import styled from '@emotion/styled';

export const Movie = styled.div`
  padding: 5px;
  display: flex;
  /* flex-direction: column; */
  /* gap: 5px; */
  font-size: 600;
  max-width: 1200px;
  margin: 5px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
  & h3 {
    color: black;
  }
  & ul h3 {
    color: blue;
  }
`;
export const MoviePoster = styled.div`
  padding: 5px;
  display: flex;
  /* width: 25%; */
  /* flex-direction: column; */
  /* gap: 5px; */
  font-size: 600;
  margin: 5px;
  border: 1px solid blue;
`;
export const MovieAbout = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  /* gap: 5px; */
  font-size: 600;
  margin: 5px;
  border: 1px solid blue;
  & h3 {
    color: blue;
    margin: 0;
    padding: 10px;
    margin-bottom: 24px;
    z-index: 2000;
  }
  & h2 {
    /* color: blue; */
    margin: 0;
    padding: 0;
  }
  & h1 {
    /* color: blue; */
    margin: 0;
    padding: 0;
    text-decoration: underline;
  }
  & h4 {
    /* color: blue; */
    margin: 0;
    padding: 0;
    margin: 0;
    font-size: 18px;
    color: blue;
  }
`;
