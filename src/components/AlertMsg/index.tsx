import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStyles } from './styled';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import useAlarm from '../../hooks/useAlarm';
import { defaultAlarm } from '../../utils/constants';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertMsg: React.FC = () => {
  const classes = useStyles();
  const { alarm, saveAlarm } = useAlarm();
  const [currentAlarm, setCurrentAlarm] = useState(defaultAlarm);
  const router = useRouter();

  useEffect(() => {
    setCurrentAlarm(alarm);
  }, [alarm]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setCurrentAlarm({ ...currentAlarm, open: false });
    saveAlarm({
      severity: 'info',
      title: '',
      msg: '',
      open: false
    });

    router.push(router.pathname);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={currentAlarm.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={currentAlarm.severity} variant="filled">
          <AlertTitle>{currentAlarm.title}</AlertTitle>
          {currentAlarm.msg}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default AlertMsg;
