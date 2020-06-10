import styled from 'styled-components';

export const DragableWrapper = styled.div`
  height: 20%;
  width: 25%;
  display: inline-block;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;
