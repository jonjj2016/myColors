import React from 'react';
import { NavBarWrapper, SliderWrapper, SelectWrapper, Logo, Span, MyLink } from './Styled';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import { MenuItem, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = ({ closeSnackbar, open, level, changeLevel, handleSelectChange, format, showSlider = true }) => {
  return (
    <NavBarWrapper>
      <Logo to='/'>mycolorpicker</Logo>
      {showSlider && (
        <React.Fragment>
          <span>Level : {level}</span>
          <SliderWrapper>
            <Slider defaultValue={level} min={100} step={100} max={900} onAfterChange={changeLevel} />
          </SliderWrapper>
        </React.Fragment>
      )}
      <SelectWrapper>
        <Select value={format} onChange={handleSelectChange}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </SelectWrapper>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        action={[
          <IconButton onClick={closeSnackbar} color='inherit' key='close' aria-label='close'>
            <CloseIcon />
          </IconButton>,
        ]}
        message={<Span>Format Changed to {format.toUpperCase()}</Span>}
        open={open}
      />
    </NavBarWrapper>
  );
};

export default NavBar;
