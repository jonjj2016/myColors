import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import { Palette } from './Styled';
import NavBar from '../NavBar/NavBar_Container';
import Footer from '../Footer/Footer';

const MyPalette = ({ palette }) => {
  const { colors } = palette;
  const [state, setState] = useState({ level: 500, format: 'hex', snackBar: false });

  const changeLevel = (level) => {
    setState({ ...state, level });
  };
  const onHandleSelectChange = (val) => {
    setState({ ...state, format: val, snackBar: true });
  };

  const onCloseSnackbar = () => {
    setState({ ...state, snackBar: false });
  };

  return (
    <Palette>
      <NavBar closeSnackbar={onCloseSnackbar} open={state.snackBar} format={state.format} handleSelectChange={onHandleSelectChange} level={state.level} changeLevel={changeLevel} />
      <div className='Palette-colors'>
        {colors[state.level].map((color, index) => (
          <ColorBox key={index} name={color.name} id={color.id} onClose={() => console.log('hi')} background={color[state.format]} />
        ))}
      </div>
      <Footer name={palette.paletteName} emoji={palette.emoji} />
    </Palette>
  );
};

export default MyPalette;
