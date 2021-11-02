import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(127, 59%, 53%)',
      dark: 'hsl(127, 59%, 37%)',
    },
    secondary: {
      main: 'hsl(202, 100%, 50%)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 600,
      lg: 768,
      xl: 960,
    },
  },
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.4rem',
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      color: 'secondary',
      size: 'small',
    },
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
      disableFocusRipple: true,
    },
    MuiFab: {
      disableFocusRipple: true,
    },
    MuiIconButton: {
      disableFocusRipple: true,
    },
  },
});

export default theme;
