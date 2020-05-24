import React from 'react';
import ColorBox from '../ColorBox/CororBox';
import './Palette.css';

const Palette = (props) => {
  console.log(props);

  return (
    <div className='Palette'>
      <div className='Palette-colors'>
        {props.colors.map((color, index) => (
          <ColorBox key={index} name={color.name} background={color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
