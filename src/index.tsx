import ReactDOM from 'react-dom';
import App from 'App';
import 'global.module.scss';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'utils/theme';
import { RoutesProvider } from 'components/Routes';
import { NotesProvider } from 'components/Notes';

const root = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <RoutesProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </RoutesProvider>
    </ThemeProvider>
  </StylesProvider>,
  root,
);
