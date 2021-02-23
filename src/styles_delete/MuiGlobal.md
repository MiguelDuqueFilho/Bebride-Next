import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'romantisch',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `url('/fonts/romantisch-Regular.ttf') format('truetype')`
        },
        '*': {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box'
        }
      }
    }
  }
});
