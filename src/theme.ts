import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#A6FF79',
    },
    secondary: {
      main: '#A6FF79',
    },
    error: {
      main: red.A400,
    },
  },
});


export default theme;
