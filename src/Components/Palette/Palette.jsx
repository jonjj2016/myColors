import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import { Palette } from './Styled';
import NavBar from '../NavBar/NavBar';

const MyPalette = ({ palette }) => {
  const { colors } = palette;
  const [state, setState] = useState({ level: 500, format: 'hex' });

  const changeLevel = (level) => {
    setState({ ...state, level });
  };

  const onHandleSelectChange = (e) => {
    setState({ ...state, format: e.target.value });
  };

  return (
    <Palette>
      <NavBar format={state.format} handleSelectChange={onHandleSelectChange} level={state.level} changeLevel={changeLevel} />
      <div className='Palette-colors'>
        {colors[state.level].map((color, index) => (
          <ColorBox key={index} name={color.name} background={color[state.format]} />
        ))}
      </div>
    </Palette>
  );
};

export default MyPalette;
