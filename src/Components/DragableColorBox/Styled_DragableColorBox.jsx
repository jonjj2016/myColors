import styled from 'styled-components';

export const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  height: 25%;
  left: 0;
  bottom: 0;
  padding: 10px;
  color: ${(props) => (props.isDark ? '#fff' : '#111')};
  display: flex;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  justify-content: space-between;
  opacity: 0;
  transition: 400ms;
  .delete {
    transition: 300ms;
    &:hover {
      color: ${(props) => (props.isDark ? '#1AB9D5' : '#fff')};
    }
  }
`;
export const DragableWrapper = styled.div`
  width: 20%;
  height: 25%;
  display: inline-block;
  cursor: pointer;
  margin-bottom: -4px;
  margin-top: -2px;
  position: relative;
  background-color: ${({ color }) => color};
  &:hover {
    ${BoxContent} {
      opacity: 1;
    }
  }
`;
