import React, { useEffect, useState } from 'react';
import { gatherShades } from '../../helpers/ColorHelpers';
import ColourBox from '../ColorBox/ColorBox';
import { Palette } from '../Palette/Styled';
import NavBar from '../NavBar/NavBar_Container';
import Footer from '../Footer/Footer';
import { ColorBox } from '../ColorBox/Styled';
import { GoBack } from './Styled_SinglePaletteShades';
import { useHistory } from 'react-router-dom';

const SinglePalette = ({ palette, color }) => {
  const history = useHistory();
  console.log(history);

  const [state, setState] = useState({
    shades: [],
    format: 'hex',
    snackBar: false,
  });

  useEffect(() => {
    if (!state.shades.length) {
      setState({ ...state, shades: gatherShades(color, palette) });
    }
  }, []);

  const onHandleSelectChange = (val) => {
    setState({ ...state, format: val, snackBar: true });
  };

  const onCloseSnackbar = () => {
    setState({ ...state, snackBar: false });
  };
  const onRouteChange = () => {
    history.goBack();
  };
  return (
    <Palette>
      <NavBar showSlider={false} closeSnackbar={onCloseSnackbar} open={state.snackBar} format={state.format} handleSelectChange={onHandleSelectChange} />
      <div className='Palette-colors'>
        {state.shades.map((shade, index) => {
          const { name, id, hex: background } = shade;
          return <ColourBox key={index} fromShades background={shade[state.format]} name={shade.name} id={shade.id} />;
        })}
        <ColorBox back={true} show={true} fromShades={true}>
          <GoBack>
            <button onClick={onRouteChange} className='copy-button'>
              Go Back
            </button>
          </GoBack>
        </ColorBox>
      </div>
      <Footer name={palette.paletteName} emoji={palette.emoji} />
    </Palette>
  );
};

export default SinglePalette;
