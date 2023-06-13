import styled from '@emotion/styled';

export const TrandigList = styled.ul`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 600;
  marging: 5px;
`;
export const TrandigListItem = styled.li`
  display: flex;
  gap: 1px;
  align-items: center;
  // width: 100px;
  padding: 5px;
  font-size: 400;
  color: black;
  line-height: 1rem;
  background-color: transporante;
  border: 1px solid lightgray;
  border-radius: 10px;
  & a {
    color: black;
    font-size: 500;
    font-weight: 600;
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
export const Title = styled.h2`
  margin: 20px 5px 1rem 5px;
  color: #111827;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;
