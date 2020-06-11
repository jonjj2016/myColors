import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GalleryWrapper = styled.div`
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
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
    align-items: center;
    color: #444;
  }
  .palettes {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
  }
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #eee;
  /* background-image: url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'); */
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;
export const MyLink = styled(Link)`
  color: #444;
  text-decoration: none;
  a {
    color: #fff;
  }
`;
