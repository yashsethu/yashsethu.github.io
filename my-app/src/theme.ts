import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
  },
  typography: {
    fontFamily: '""Helvetica"', // Change this to your desired font family
  },
  // Add more customization here as needed
});

export default theme;