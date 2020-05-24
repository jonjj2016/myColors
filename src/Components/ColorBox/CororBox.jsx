import React from 'react';
import { ColorBox } from './Styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CororBox = ({ background, name }) => {
  return (
    <CopyToClipboard text={background}>
      <ColorBox background={background}>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name} </span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </ColorBox>
    </CopyToClipboard>
  );
};

export default CororBox;
