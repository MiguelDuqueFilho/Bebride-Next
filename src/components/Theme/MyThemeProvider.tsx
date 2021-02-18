import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '../../theme';
import useSettings from '../../hooks/useSettings';

/** Styled-components */
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from '../../styles/theme';

function MyThemeProvider({ children }) {
  const { settings } = useSettings();

  const theme = createTheme({ theme: settings.theme });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider
        theme={settings.theme === 'LIGHT' ? themeLight : themeDark}
      >
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyThemeProvider;
