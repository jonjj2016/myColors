import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import { Palette } from './Styled';
import NavBar from '../NavBar/NavBar';

const MyPalette = ({ palette }) => {
  const { colors } = palette;
  const [state, setState] = useState({ level: 500 });
  const changeLevel = (level) => {
    setState({ ...state, level });
  };
  return (
    <Palette>
      <NavBar level={state.level} changeLevel={changeLevel} />
      <div className='Palette-colors'>
        {colors[state.level].map((color, index) => (
          <ColorBox key={index} name={color.name} background={color.hex} />
        ))}
      </div>
    </Palette>
  );
};

export default MyPalette;
