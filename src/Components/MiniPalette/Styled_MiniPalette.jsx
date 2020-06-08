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
    background-color: grey;
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
