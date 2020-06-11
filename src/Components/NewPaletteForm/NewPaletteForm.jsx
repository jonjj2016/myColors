import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Drawer, CssBaseline, AppBar, Toolbar, Typography, Divider, IconButton, Button } from '@material-ui/core';
import { ChevronLeft, Menu } from '@material-ui/icons';
import { useStyles, ColorPickerWrapper } from './Styled_NewPaletteForm';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DragableColorBox from '../DragableColorBox/DragableColorBox';

const NewPaletteForm = ({ saveNewPalette, palettes }) => {
  console.log(palettes);

  const classes = useStyles();
  const [state, setState] = useState({
    color: 'red',
    open: false,
    colors: [{ name: 'blue', color: '#344' }],
    newColorName: '',
    newPaletteName: '',
  });

  const handleDrawerOpen = () => {
    setState({ ...state, open: true });
  };
  const addNewColor = () => {
    if (!state.newColorName) return;
    const newColor = { color: state.color, name: state.newColorName };
    setState({ ...state, colors: [...state.colors, newColor], newColorName: '' });
  };
  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };
  const handleColorChange = (color) => {
    setState({ ...state, color: color.hex });
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const savePalette = () => {
    if (!state.newPaletteName) return;
    const palette = { paletteName: state.newPaletteName, emoji: 'AM', id: state.newPaletteName.toLocaleLowerCase().replace(/ /g, '-'), colors: state.colors };
    saveNewPalette(palette);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (colorName) => state.colors.every(({ name }) => name.toLowerCase() !== colorName.toLowerCase()));
    ValidatorForm.addValidationRule('isColorUnique', (value) => state.colors.every(({ color }) => color !== state.color));
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      palettes.every(({ paletteName }) => {
        console.log(value.toLowerCase());
        return paletteName.toLowerCase() !== state.newPaletteName.toLowerCase();
      })
    );
  }, [addNewColor, state.color, state.newPaletteName]);
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
          <ValidatorForm onSubmit={savePalette}>
            <TextValidator validators={['required', 'isPaletteNameUnique']} errorMessages={['Palette Name is required', 'Palette name should  be uniquie']} name='newPaletteName' label='Palette Name' onChange={onChange} value={state.newPaletteName} />
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </ValidatorForm>
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
            <TextValidator name='newColorName' value={state.newColorName} validators={['required', 'isColorNameUnique', 'isColorUnique']} errorMessages={['This field is required', 'Clor name should  be uniquie', 'Color should be Unique']} onChange={onChange} />
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
