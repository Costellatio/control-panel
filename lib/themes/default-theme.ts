import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const alpha = (color: string, alphaValue: string) => color + alphaValue;
const darker = (color: string) => alpha(color, '55');

const white = '#ffffff';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: white,
    },
    error: {
      main: red[500],
    },
    text: {
      primary: white,
    }
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 120,
          height: 50,
          margin: 5,
          padding: 10,
        },
        switchBase: {
          margin: 6,
          padding: 0,
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(62.5px)',
          },
        },
        thumb: {
          width: 40,
          height: 40,
        },
        track: {
          borderRadius: 20,
          backgroundColor: darker(white),
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: darker(white),
          "&:hover": {
            backgroundColor: darker(grey[300]),
          },
          '& .Mui-focused': {
            color: white,
          },
        },
      }
    },
  }
});

export default defaultTheme;
