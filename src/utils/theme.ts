import { createTheme } from '@material-ui/core/styles';

const shadow1 = '0px 1px 2px 1px hsla(0, 0%, 0%, 0.25)';

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
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'hsl(202, 100%, 50%)',
        },
      },
    },
    MuiButton: {
      contained: {
        boxShadow: shadow1,
        '&:hover': {
          boxShadow: shadow1,
        },
        '&.Mui-focusVisible': {
          boxShadow: shadow1,
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
