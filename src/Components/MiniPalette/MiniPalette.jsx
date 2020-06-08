import React from 'react';
import { MiniPaletteWrapper, MiniColorBox } from './Styled_MiniPalette';

const MiniPalette = ({ paletteName, emoji, colors, id }) => {
  const colorBoxes = colors.map((color, index) => {
    return <MiniColorBox key={index} color={color.color} />;
  });
  return (
    <MiniPaletteWrapper to={`/palette/${id}`}>
      <div className='colors'>{colorBoxes}</div>
      <div className='title'>
        {paletteName} <span>{emoji}</span>
      </div>
    </MiniPaletteWrapper>
  );
};

export default MiniPalette;
