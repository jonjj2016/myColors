import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import { Palette } from './Styled';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const MyPalette = ({ palette }) => {
  const { colors } = palette;
  const [state, setState] = useState({ level: 500 });
  const changeLevel = (level) => {
    setState({ ...state, level });
  };
  return (
    <Palette>
      <Slider defaultValue={state.level} min={100} step={100} max={900} onAfterChange={changeLevel} />
      <div className='Palette-colors'>
        {colors[state.level].map((color, index) => (
          <ColorBox key={index} name={color.name} background={color.hex} />
        ))}
      </div>
    </Palette>
  );
};

export default MyPalette;
