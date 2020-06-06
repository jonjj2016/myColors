import React from 'react';
import { NavBarWrapper, SliderWrapper } from './Styled';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const NavBar = ({ level, changeLevel }) => {
  return (
    <NavBarWrapper>
      <div className='logo'>
        <a href='#'>mycolorpicker</a>
      </div>
      <span>Level : {level}</span>
      <SliderWrapper>
        <Slider defaultValue={level} min={100} step={100} max={900} onAfterChange={changeLevel} />
      </SliderWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
