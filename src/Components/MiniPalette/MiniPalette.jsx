import React from 'react';
import { MiniPaletteWrapper, MiniColorBox } from './Styled_MiniPalette';

const MiniPalette = ({ paletteName, emoji, colors }) => {
  const colorBoxes = colors.map((color, index) => {
    return <MiniColorBox key={index} color={color.color} />;
  });
  return (
    <MiniPaletteWrapper>
      <div className='colors'>{colorBoxes}</div>
      <div className='title'>
        {paletteName} <span>{emoji}</span>
      </div>
    </MiniPaletteWrapper>
  );
};

export default MiniPalette;
