import ReactDOM from 'react-dom';
import App from 'App';
import 'global.module.scss';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'utils/theme';

const root = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StylesProvider>,
  root,
);
