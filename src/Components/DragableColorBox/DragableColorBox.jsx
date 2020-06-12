import React from 'react';
import { DragableWrapper, BoxContent } from './Styled_DragableColorBox';
import chroma from 'chroma-js';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { SortableElement } from 'react-sortable-hoc';

const DragableColorBox = ({ color, name, onDelete }) => {
  const isDarkcolor = chroma(color).luminance() <= 0.18;

  const onClick = () => {
    onDelete(name);
  };
  return (
    <DragableWrapper color={color}>
      <BoxContent isDark={isDarkcolor}>
        <span>{name}</span>

        <DeleteOutlineOutlined onClick={onClick} className='delete' />
      </BoxContent>
    </DragableWrapper>
  );
};

export default DragableColorBox;
