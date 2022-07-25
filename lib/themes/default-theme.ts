import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const white = '#ffffff';

const alphaColor = (color: string, alphaAmount: string) => color + alphaAmount;

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: white,
    },
    error: {
      main: red[500],
    }
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alphaColor(white, '55'),
          "&:hover": {
            backgroundColor: alphaColor(grey[300], '55'),
          },
          '&.Mui-focused': {
            color: white,
          },
        },
      }
    },
  }
});

export default defaultTheme;
