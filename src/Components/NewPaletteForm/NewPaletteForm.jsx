import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {} from '@material-ui/core';
import { useStyles } from './Styled_NewPaletteForm';
import { ValidatorForm } from 'react-material-ui-form-validator';
import DragableContainer from '../DragableColorList/DragableColorList';
import Nav from './NewPaletteNav/NewPaletteNav';
import MyDrawer from './NewPaletteDrawer/NewPaletteDrawer';
import ColorPicker from '../ColorPicker/ColorPicker';

const NewPaletteForm = ({ saveNewPalette, palettes }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    color: 'red',
    open: false,
    colors: [],
    newColorName: '',
    newPaletteName: '',
    disabled: false,
    maxItemInNewPalette: 13,
    paletteModalOpen: false,
  });
  //checking that user adds no more than 20 colors
  useEffect(() => {
    if (state.colors.length === 20) {
      return setState({ ...state, disabled: true });
    } else if (state.colors.length === 0) {
      return setState({ ...state, disabled: false });
    }
  }, [state.colors]);

  // setting colors to random color palette when component mounts
  useEffect(() => {
    const random = Math.floor(Math.random() * palettes.length);
    const shortColors = palettes[random].colors.filter((color, index) => {
      if (index <= state.maxItemInNewPalette) {
        return color;
      }
    });
    setState({ ...state, colors: shortColors });
  }, []);
  const onDelete = (colorName) => {
    setState({ ...state, disabled: false, colors: [...state.colors.filter(({ name }) => name.toLowerCase() !== colorName.toLowerCase())] });
  };

  const handleDrawerOpen = () => {
    setState({ ...state, open: true });
  };

  const addNewColor = () => {
    //checking for name existence
    if (!state.newColorName) return;
    //checking for colors length so no more then 20 colors can be added
    // if (state.colors.length === 19) {
    //   return setState({ ...state, disabled: true });
    // }

    const newColor = { color: state.color, name: state.newColorName };
    setState({ ...state, disabled: false, colors: [...state.colors, newColor], newColorName: '' });
  };

  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };
  // toggling modal
  const modalToggle = (bool) => setState({ ...state, paletteModalOpen: bool });
  const handleColorChange = (color) => {
    setState({ ...state, color: color });
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
    ValidatorForm.addValidationRule('isColorNameUnique', (colorName) =>
      state.colors.every(({ name }) => {
        if (state.newColorName) {
          return name.toLowerCase() !== colorName.toLowerCase();
        } else {
          return false;
        }
      })
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => state.colors.every(({ color }) => color !== state.color));
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      palettes.every(({ paletteName }) => {
        return paletteName.toLowerCase() !== state.newPaletteName.toLowerCase();
      })
    );
  }, [addNewColor, state.color, state.newPaletteName, state.newColorName]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(oldIndex, newIndex);
    // setState({ ...state, colors: arrayMove(state.colors, oldIndex, newIndex) });
    // setState(({ items }) => ({
    //   items: arrayMove(items, oldIndex, newIndex),
    // }));
  };

  const onClearColors = () => {
    setState({ ...state, colors: [] });
  };

  const addRandomColor = () => {
    //pick random colors from palette
    const allColors = palettes.map((palette) => palette.colors).flat();
    const random = Math.floor(Math.random() * allColors.length);
    const color = allColors[random];
    setState({ ...state, color: color.color, newColorName: color.name });
  };

  return (
    <div className={classes.root}>
      <Nav modalToggle={modalToggle} classes={classes} onChange={onChange} state={state} savePalette={savePalette} handleDrawerOpen={handleDrawerOpen} />
      {/* //children, classes, state, open, handleDrawerClose */}
      <MyDrawer open={state.open} handleDrawerClose={handleDrawerClose}>
        <ColorPicker onChange={onChange} addNewColor={addNewColor} handleColorChange={handleColorChange} state={state} onClearColors={onClearColors} addRandomColor={addRandomColor} />
      </MyDrawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: state.open,
        })}>
        <div className={classes.drawerHeader} />
        {state.colors && <DragableContainer onDelete={onDelete} onSortEnd={onSortEnd} colors={state.colors} axis='xy' />}
      </main>
    </div>
  );
};

export default NewPaletteForm;
