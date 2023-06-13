import styled from '@emotion/styled';
export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  /* display: grid;
  grid-template-columns: 1fr; */
  flex-direction: column;
  grid-gap: 16px;
  padding-bottom: 24px;
  background: grey;
  height: 100vh;
`;
export const Message = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  font-size: 36px;
  font-weight: 600;
  color: red;
`;
