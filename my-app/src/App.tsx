import { ThemeProvider, Typography } from '@mui/material';
import { Menu } from './components/Menu';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Typography variant="h1">Hello World</Typography>
    </ThemeProvider>
  );
}

export default App;
