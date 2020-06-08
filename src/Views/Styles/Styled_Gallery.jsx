import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  .container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
  }
  .palettes {
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
  }
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: blue;
  /* background-image: url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'); */
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;
