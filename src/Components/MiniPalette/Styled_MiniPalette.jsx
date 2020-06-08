import styled from 'styled-components';

export const MiniPaletteWrapper = styled.div`
  background-color: #eee;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  overflow: hidden;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  .colors {
    background-color: #444;
    height: 150px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin: 0;
    align-items: center;
    padding-top: 0.5rem;
    font-size: 1rem;
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
