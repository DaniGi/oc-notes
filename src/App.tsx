import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import Header from './components/Header';
import CoursChapter from './components/CoursChapter';
import { theme } from './lib/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Header />
      <CoursChapter />
    </MuiThemeProvider>
  );
}

export default App;
