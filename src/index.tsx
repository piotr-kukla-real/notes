import ReactDOM from 'react-dom';
import App from 'App';
import 'global.module.scss';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'utils/theme';
import { RoutesProvider } from 'components/Routes';
import { NotesProvider } from 'components/Notes';
import { NotificationProvider } from 'components/Notification';

const root = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <RoutesProvider>
        <NotificationProvider>
          <NotesProvider>
            <App />
          </NotesProvider>
        </NotificationProvider>
      </RoutesProvider>
    </ThemeProvider>
  </StylesProvider>,
  root,
);
