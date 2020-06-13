import React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ColorPickerWrapper } from './Styled_ColorPicker';
import { Button } from '@material-ui/core';

const ColorPicker = (props) => {
  const { onChange, addNewColor, handleColorChange, state, onClearColors, addRandomColor } = props;

  return (
    <ColorPickerWrapper>
      <div className='drawer'>
        <h1>Compose palette</h1>
        <div className='buttons'>
          <Button variant='contained' onClick={onClearColors} color='secondary'>
            Clear Palette
          </Button>
          <Button disabled={state.disabled} onClick={addRandomColor} variant='contained' color='primary'>
            Random Color
          </Button>
        </div>
        <ChromePicker width={450} color={state.color} onChangeComplete={handleColorChange} />
      </div>
      <ValidatorForm className='form' onSubmit={addNewColor}>
        <TextValidator
          disabled={state.disabled}
          placeholder='Color Name..'
          name='newColorName'
          value={state.newColorName}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={['This field is required', 'Clor name should  be uniquie', 'Color should be Unique']}
          onChange={onChange}
        />
        <Button disabled={state.disabled} type='submit' variant='contained' color='primary' style={{ margin: '1rem 0', color: state.disabled && '#7F8C8D', backgroundColor: state.disabled ? 'black' : state.color }}>
          Add Color
        </Button>
      </ValidatorForm>
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
