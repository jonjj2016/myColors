import React from 'react';
import ColorBox from '../ColorBox/CororBox';
import { Palette } from './Styled';

const MyPalette = (props) => {
  console.log(props);

  return (
    <Palette>
      <div className='Palette-colors'>
        {props.colors.map((color, index) => (
          <ColorBox key={index} name={color.name} background={color.color} />
        ))}
      </div>
    </Palette>
  );
};

export default MyPalette;
