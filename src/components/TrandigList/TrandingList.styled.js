import styled from '@emotion/styled';

export const TrandigList = styled.ul`
  padding: 5px;
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  font-size: 600;
  margin: 5px;
  text-decoration: none;
  list-style-type: circle;
  z-index: 1000;
`;
export const TrandigListItem = styled.li`
  /* display: flex; */
  list-style-type: circle;
  list-style-position: inside;
  /* list-style-type: square; */
  /* gap: 1px; */
  align-items: center;
  // width: 100px;
  padding: 5px;
  font-weight: 700;
  color: black;
  line-height: 2rem;
  background-color: transporante;
  border: 1px solid lightgray;
  border-radius: 10px;
  & a {
    color: black;
    width: 100%;
    font-weight: 700;
    /* background: red; */
    /* text-decoration: none; */
  }
  &:hover,
  &:focus {
    background-color: #303f9f;
    background-color: blue;
    background-color: #3f51b5;
    background-color: #303f9f;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
export const Title = styled.h1`
  margin: 20px 5px 20px 5px;
  color: #111827;
  color: blue;
  font-size: 1118 1.5rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  padding-left: 20px;
`;
