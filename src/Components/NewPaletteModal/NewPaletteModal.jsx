import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
import { Buttons } from './Styled_NewPaletteModal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';

const NewPaletteModal = ({ modalToggle, savePalette, onChange, open, value }) => {
  const { push } = useHistory();

  const handleClickOpen = () => {
    modalToggle(true);
  };

  const handleClose = () => {
    modalToggle(false);
  };
  const onGoBack = () => push('/');
  return (
    <Buttons>
      <Button variant='contained' color='primary' onClick={onGoBack}>
        Go Back
      </Button>
      <Button variant='contained' color='secondary' onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Save Palette</DialogTitle>
        <DialogContent>
          <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
          <ValidatorForm className='form' onSubmit={savePalette}>
            <TextValidator validators={['required', 'isPaletteNameUnique']} errorMessages={['Palette Name is required', 'Palette name should  be uniquie']} name='newPaletteName' label='Palette Name' onChange={onChange} value={value} />
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>
              <Button onClick={handleClose} color='primary' type='submit'>
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </Buttons>
  );
};

export default NewPaletteModal;
