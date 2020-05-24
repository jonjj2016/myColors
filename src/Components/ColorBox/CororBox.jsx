import React from 'react';
import './ColorBox.css';

const CororBox = ({ background, name }) => {
  return (
    <div style={{ backgroundColor: background.color }} className='ColorBox'>
      <span>{name} </span>
      <span>More</span>
    </div>
  );
};

export default CororBox;
