import React from 'react';
import { DragableWrapper } from './Styled_DragableColorBox';
const DragableColorBox = ({ color, name }) => {
  return <DragableWrapper color={color}>{name}</DragableWrapper>;
};

export default DragableColorBox;
