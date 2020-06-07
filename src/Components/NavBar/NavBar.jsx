import React from 'react';
import { NavBarWrapper, SliderWrapper, SelectWrapper } from './Styled';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

const NavBar = ({ level, changeLevel, handleSelectChange, format }) => {
  return (
    <NavBarWrapper>
      <div className='logo'>
        <a href='#'>mycolorpicker</a>
      </div>
      <span>Level : {level}</span>
      <SliderWrapper>
        <Slider defaultValue={level} min={100} step={100} max={900} onAfterChange={changeLevel} />
      </SliderWrapper>
      <SelectWrapper>
        <Select value={format} onChange={handleSelectChange}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </SelectWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
