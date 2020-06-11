import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MiniPaletteWrapper = styled(Link)`
  /* background-color: #eee; */
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  overflow: hidden;
  position: relative;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  box-shadow: 10px 10px 5px -6px rgba(255, 255, 255, 0.58);
  &:hover {
    cursor: pointer;
  }
  .colors {
    /* background-color: #444; */
    height: 150px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    align-items: center;
    padding-top: 0.5rem;
    font-size: 1rem;
    /* height: 100px; */
    position: relative;
    span {
      margin-left: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;
export const MiniColorBox = styled.div`
  background-color: ${(props) => props.color};
  height: 25%;
  width: 20%;
  margin: 0 auto;
  display: inline-block;
  margin-bottom: -4px;
  position: relative;
`;
