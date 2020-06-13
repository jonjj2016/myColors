import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
import { Buttons } from './Styled_NewPaletteModal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const NewPaletteModal = ({ modalToggle, state, savePalette, onChange, open, value }) => {
  const { push } = useHistory();

  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    modalToggle(true);
  };

  const handleSubmit = () => {
    // modalToggle(false);
    setModalOpen(true);
  };

  const handleClose = () => {
    modalToggle(false);
  };

  const addEmoji = (emoji) => {
    savePalette(emoji.native);
    modalToggle(false);
  };
  const onGoBack = () => push('/');
  return (
    <Buttons>
      <Button variant='contained' color='primary' onClick={onGoBack}>
        Go Back
      </Button>
      <Button className='button' variant='contained' color='secondary' onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogContent>
          {modalOpen && (
            <React.Fragment>
              {' '}
              <DialogTitle id='form-dialog-title'>Choose Palette Emoji</DialogTitle>
              <Picker onSelect={addEmoji} />
            </React.Fragment>
          )}
          {!modalOpen && (
            <React.Fragment>
              <DialogTitle id='form-dialog-title'>Choose Palette Name</DialogTitle>
              <DialogContentText>Please choose a name for your Palette. Make sure the Name is Uniquie </DialogContentText>
              <ValidatorForm className='form' onSubmit={savePalette}>
                <TextValidator margin='normal' fullWidth validators={['required', 'isPaletteNameUnique']} errorMessages={['Palette Name is required', 'Palette name should  be uniquie']} name='newPaletteName' label='Palette Name' onChange={onChange} value={value} />
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>
                    Cancel
                  </Button>
                  <Button variant='contained' onClick={handleSubmit} disabled={!state.newPaletteName} color='primary'>
                    Save Palette
                  </Button>
                </DialogActions>
              </ValidatorForm>
            </React.Fragment>
          )}
        </DialogContent>
      </Dialog>
    </Buttons>
  );
};

export default NewPaletteModal;
