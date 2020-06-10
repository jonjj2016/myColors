import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Drawer, CssBaseline, AppBar, Toolbar, Typography, Divider, IconButton, Button } from '@material-ui/core';
import { ChevronLeft, Menu } from '@material-ui/icons';
import { useStyles, ColorPickerWrapper } from './Styled_NewPaletteForm';
import { ChromePicker } from 'react-color';

const NewPaletteForm = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    color: 'purple',
    open: false,
    colors: ['purple', '#00806D'],
  });
  const handleDrawerOpen = () => {
    setState({ ...state, open: true });
  };
  const addNewColor = () => {
    setState({ ...state, colors: [...state.colors, state.color] });
  };
  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };
  const handleColorChange = (color) => {
    setState({ ...state, color: color.hex });
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.open,
        })}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' className={clsx(classes.menuButton, state.open && classes.hide)}>
            <Menu />
          </IconButton>
          <Typography variant='h6' noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={state.open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />{' '}
          </IconButton>
        </div>
        <Divider />

        <Divider />
        <ColorPickerWrapper>
          <h1>Design your palette</h1>
          <div>
            <Button variant='contained' color='secondary'>
              Clear Palette
            </Button>
            <Button variant='contained' color='primary'>
              Random Color
            </Button>
          </div>
          <ChromePicker width={450} color={state.color} onChangeComplete={handleColorChange} />
          <Button onClick={addNewColor} variant='contained' color='primary' style={{ backgroundColor: state.color }}>
            Add Color
          </Button>
        </ColorPickerWrapper>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: state.open,
        })}>
        <div className={classes.drawerHeader} />
        <ul>
          {state.colors.map((color, index) => {
            return (
              <li style={{ height: '100px', width: '100px', backgroundColor: color }} key={index}>
                {color}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default NewPaletteForm;
