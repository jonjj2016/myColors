import React from 'react';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { useStyles } from './Styled_NewPaletteDrawer';

const NewPaletteDrawer = (props) => {
  const { children, open, handleDrawerClose } = props;
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
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
      {children}
    </Drawer>
  );
};

export default NewPaletteDrawer;
