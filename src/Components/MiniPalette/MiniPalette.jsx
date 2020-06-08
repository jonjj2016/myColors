import React from 'react';
import { MiniPaletteWrapper } from './Styled_MiniPalette';

const MiniPalette = ({ paletteName, emoji }) => {
  return (
    <MiniPaletteWrapper>
      <div className='clors'></div>
      <div className='title'>
        {paletteName} <span>{emoji}</span>
      </div>
    </MiniPaletteWrapper>
  );
};

export default MiniPalette;
