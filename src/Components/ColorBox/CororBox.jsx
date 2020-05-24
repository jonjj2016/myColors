import React from 'react';
import { ColorBox } from './Styled';

const CororBox = ({ background, name }) => {
  return (
    <ColorBox background={background}>
      <div className='copy-container'>
        <div className='box-content'>
          <span>{name} </span>
        </div>
        <button className='copy-button'>Copy</button>
      </div>
      <span className='see-more'>More</span>
    </ColorBox>
  );
};

export default CororBox;
