import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Drawer, CssBaseline, AppBar, Toolbar, Typography, Divider, IconButton, Button } from '@material-ui/core';
import { ChevronLeft, Menu } from '@material-ui/icons';
import { useStyles, ColorPickerWrapper } from './Styled_NewPaletteForm';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DragableColorBox from '../DragableColorBox/DragableColorBox';

const NewPaletteForm = ({ saveNewPalette }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    color: 'red',
    open: false,
    colors: [{ name: 'blue', color: '#344' }],
    colorName: '',
  });

  const handleDrawerOpen = () => {
    setState({ ...state, open: true });
  };
  const addNewColor = () => {
    if (!state.colorName) return;
    const newColor = { color: state.color, name: state.colorName };
    setState({ ...state, colors: [...state.colors, newColor], colorName: '' });
  };
  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };
  const handleColorChange = (color) => {
    setState({ ...state, color: color.hex });
  };
  const onChange = (e) => {
    const { value } = e.target;
    setState({ ...state, colorName: value });
  };
  const savePalette = () => {
    const paletteName = 'New Palette Name';
    const palette = { paletteName, emoji: 'AM', id: paletteName.toLocaleLowerCase().replace(/ /g, '-'), colors: state.colors };
    saveNewPalette(palette);
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (colorName) => state.colors.every(({ name }) => name.toLowerCase() !== colorName.toLowerCase()));
    ValidatorForm.addValidationRule('isColorUnique', (value) => state.colors.every(({ color }) => color !== state.color));
  }, [addNewColor, state.color]);
  return (
    <div className={classes.root}>
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
            Persistent drawer
          </Typography>
          <Button variant='contained' color='primary' onClick={savePalette}>
            Save Palette
          </Button>
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
          <ValidatorForm onSubmit={addNewColor}>
            <TextValidator value={state.colorName} validators={['required', 'isColorNameUnique', 'isColorUnique']} errorMessages={['this field is required', 'Clor name should  be uniquie', 'Color should be Unique']} onChange={onChange} />
            <Button type='submit' variant='contained' color='primary' style={{ backgroundColor: state.color }}>
              Add Color
            </Button>
          </ValidatorForm>
        </ColorPickerWrapper>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: state.open,
        })}>
        <div className={classes.drawerHeader} />

        {state.colors.map((color, index) => (
          <DragableColorBox name={color.name} color={color.color} key={index} />
        ))}
      </main>
    </div>
  );
};

export default NewPaletteForm;
