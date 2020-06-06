import styled from 'styled-components';

export const Palette = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .Palette-colors {
    height: 90%;
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
