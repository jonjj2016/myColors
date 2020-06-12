import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import { Wrapper } from './Styled_DragableColorList';

const DragableColorList = ({ colors, onDelete }) => {
  return (
    <React.Fragment>
      {colors.map((color, index) => (
        <DragableColorBox index={index} onDelete={onDelete} name={color.name} color={color.color} key={index} />
      ))}
    </React.Fragment>
  );
};

export default DragableColorList;
