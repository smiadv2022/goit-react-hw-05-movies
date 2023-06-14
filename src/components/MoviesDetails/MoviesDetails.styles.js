import styled from '@emotion/styled';

export const Movie = styled.div`
  padding: 5px;
  display: flex;
  /* flex-direction: column; */
  /* gap: 5px; */
  font-size: 600;
  margin: 5px;
  border: 1px solid blue;
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
  /* width: 75%; */
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
