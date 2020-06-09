import React, { useState, useEffect } from 'react';
import Component from './NavBar';

const NavBar_Container = ({ closeSnackbar, open, level, changeLevel, handleSelectChange, format, showSlider }) => {
  const [state, setState] = useState({ level, format, snackBar: false, snackBar: open });
  useEffect(() => {
    setState({ level, format, snackBar: false, snackBar: open });
  }, [level, open, handleSelectChange, format]);

  const onHandleSelectChange = (e) => {
    handleSelectChange(e.target.value);
  };

  const onCloseSnackbar = () => {
    closeSnackbar();
  };

  return <Component showSlider={showSlider} closeSnackbar={onCloseSnackbar} open={state.snackBar} format={state.format} handleSelectChange={onHandleSelectChange} level={state.level} changeLevel={changeLevel} />;
};

export default NavBar_Container;
