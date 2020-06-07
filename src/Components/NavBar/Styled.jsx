import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
  width: 100vw;
  .logo {
  }
`;
export const SliderWrapper = styled.div`
  width: 340px;
  margin: 0 10px;
  display: inline-block;
  .rc-slider-track {
    background: transparent;
  }
  .rc-slider-handle,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover,
  .rc-slider-handle:active {
    background-color: green;
    outline: none;
    border: 3px solid green;
    box-shadow: none;
    height: 13px;
    width: 13px;
    margin-left: -7px;
    margin-top: -3px;
  }
  .rc-slider-rail {
    height: 8px;
  }
`;
export const SelectWrapper = styled.div`
  margin-left: auto;
  margin-right: 1rem;
`;
export const Span = styled.span``;
export const Logo = styled(Link)`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 1.4rem;
  background-color: #eceff1;
  font-family: 'Roboto', Helvetica, sans-serif;

  height: 100%;
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #222;
`;
