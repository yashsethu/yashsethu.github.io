import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          margin: 10,
          padding: 20,
          textAlign: 'center',
          backgroundColor: 'transparent',
          borderColor: 'white',
          borderWidth: 5,
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;