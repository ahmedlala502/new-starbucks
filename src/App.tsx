import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Presentation from './Presentation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Presentation />
    </ThemeProvider>
  );
}
