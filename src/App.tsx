import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import { theme } from './lib/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
    </MuiThemeProvider>
  );
}

export default App;
