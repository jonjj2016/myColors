import React from 'react';
import { Typography, IconButton, Toolbar, AppBar, CssBaseline } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import clsx from 'clsx';
import Modal from '../../NewPaletteModal/NewPaletteModal';
import { useStyles, Wrapper } from './Styled_NewPaletteNav';

const NewPaletteNav = ({ modalToggle, onChange, state, savePalette, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.open,
        })}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' className={clsx(classes.menuButton, state.open && classes.hide)}>
            <Menu />
          </IconButton>
          <Typography variant='h6' noWrap>
            Your Creative Palette
          </Typography>
        </Toolbar>
        <Modal state={state} modalToggle={modalToggle} open={state.paletteModalOpen} savePalette={savePalette} onChange={onChange} value={state.newPaletteName} />
      </AppBar>
    </Wrapper>
  );
};

export default NewPaletteNav;
