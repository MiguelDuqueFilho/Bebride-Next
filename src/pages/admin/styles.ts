import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    width: '100hv',
    overflow: 'hidden'
  }
}));
