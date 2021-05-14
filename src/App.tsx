import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import CoursChapter from './components/CoursChapter';
import { theme } from './lib/theme';
import { BookmarksProvider } from './contexts/BookmarksContext';
import { NotesProvider } from './contexts/NotesContext';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Header />
      <Timeline />
      <BookmarksProvider>
        <NotesProvider>
          <CoursChapter />
        </NotesProvider>
      </BookmarksProvider>
    </MuiThemeProvider>
  );
}

export default App;
