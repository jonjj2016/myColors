import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const drawerWidth = 500;
export const Wrapper = styled.div`
  /* margin-left: auto; */
  display: flex;
`;
export const Buttons = styled.div`
  .form {
    display: flex;
  }
`;
export const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '2rem',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  form: {
    display: 'flex',
  },
}));
