import Image from 'next/image';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
import useSettings from '../../../hooks/useSettings';
import { THEMES } from '../../../utils/constants';

import { signIn, signOut, useSession } from 'next-auth/client';

function Topbar() {
  const classes = useStyles();
  const [session] = useSession();
  const { settings, saveSettings } = useSettings();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img
            src={
              settings.theme === THEMES.DARK
                ? '/images/logo.png'
                : '/images/logo.png'
            }
            alt="logo"
            className={classes.logo}
          />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box>
          <IconButton
          // className={classes.icons}
          >
            {settings.theme === THEMES.DARK ? (
              <Brightness7Icon
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4Icon
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </IconButton>
          <IconButton
          // className={classes.icons}
          >
            <VideoCall />
          </IconButton>
          <IconButton
          // className={classes.icons}
          >
            <Apps />
          </IconButton>
          <IconButton
          // className={classes.icons}
          >
            <MoreVert />
          </IconButton>
          {!session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                onClick={() => signOut()}
                alt="User"
                // className={classes.avatar}
                src={session?.user?.image}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
