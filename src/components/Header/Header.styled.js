import styled from '@emotion/styled';
export const HeaderBlock = styled.div`
  max-width: 1200px;
  display: flex;
  padding: 10px;

  /* justify-content: space-around; */
  margin-left: auto;
  margin-right: auto;
  /* display: grid;
  grid-template-columns: 1fr 1fr 20fr;
  grid-gap: 16px; */
  color: white;
  height: 60px;
  background: blue;
  align-items: center;
`;
export const HeaderWrapper = styled.div`
  /* max-width: 1200px; */

  padding: 15px;
  font-weight: 600;
  font-size: 24px;
  justify-content: center;
  margin-left: 30px;
  color: white;

  /* padding-bottom: 24px; */
  & a {
    color: white;
    padding: 15px;
    margin: 20px;
  }
  & a:hover {
    background: white;
    color: blue;
  }
`;
