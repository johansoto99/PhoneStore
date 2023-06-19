import styled from 'styled-components/macro';

export const Container = styled.div``;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 4fr;
    margin-top: 80px;
  }
  
`;

export const h = styled.header `
  header{
    background: url('./static/products/telefonos.png');
    background-size: cover;
    background-position:center;
    height: 300px;
  }
  header h1{
    text-align: center;
    font-size: 80px;
    color: #2f00ff;
    padding: 20px 0;
}`;

export const Side = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
  header{
    background-image: url(${require('static/telefonos.png')});
    background-size: cover;
    width: 100vw;
    background-position:center;
    height: 50vh;
  }
  header h1{
    text-align: center;
    font-size: 80px;
    color: #2f00ff;
    padding: 20px 0;
}
`;
