import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7451eb' },
    secondary: { main: '#fff' },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h6: {
      fontWeight: 400,
      fontSize: 16,
    },
  },
});

export { theme };
