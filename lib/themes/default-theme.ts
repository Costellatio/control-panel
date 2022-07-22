import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#eee',
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#646464",
          }
        }
      }
    }
  }
});

export default defaultTheme;
