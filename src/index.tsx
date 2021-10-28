import ReactDOM from 'react-dom';
import App from 'App';
import 'global.module.scss';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'utils/theme';
import { RoutesProvider } from 'components/Routes';

const root = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <RoutesProvider>
        <App />
      </RoutesProvider>
    </ThemeProvider>
  </StylesProvider>,
  root,
);
