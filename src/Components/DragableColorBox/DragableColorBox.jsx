import React from 'react';
import { DragableWrapper } from './Styled_DragableColorBox';
const DragableColorBox = ({ color }) => {
  return <DragableWrapper color={color}>{color}</DragableWrapper>;
};

export default DragableColorBox;
