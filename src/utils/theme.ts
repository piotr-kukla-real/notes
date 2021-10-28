import { createTheme } from '@material-ui/core/styles';

const shadow1 = '0px 1px 2px 1px hsla(0, 0%, 0%, 0.25)';
const transitionOptions = '250ms cubic-bezier(0.4, 0, 0.2, 1)';
const focusVisible = {
  outline: '2px solid transparent',
  transition: `outline-color ${transitionOptions}, background-color ${transitionOptions}, box-shadow ${transitionOptions}`,
  '&.Mui-focusVisible': {
    outlineColor: 'rgba(0, 0, 0, 0.5)',
  },
};

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
    h3: {
      fontSize: '1.5rem',
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
        outline: focusVisible.outline,
        transition: focusVisible.transition,
        '&:hover': {
          boxShadow: shadow1,
        },
        '&:active': {
          boxShadow: 'none',
        },
        '&.Mui-focusVisible': {
          boxShadow: shadow1,
          outlineColor: focusVisible['&.Mui-focusVisible'].outlineColor,
        },
      },
    },
    MuiFab: {
      root: {
        ...focusVisible,
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      root: {
        ...focusVisible,
        boxShadow: shadow1,
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
