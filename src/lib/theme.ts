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
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.625rem',
      lineHeight: '2.25rem',
      marginBottom: '10px',
      paddingBottom: '5px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.375rem',
      lineHeight: '2rem',
    },
  },
});

export { theme };
