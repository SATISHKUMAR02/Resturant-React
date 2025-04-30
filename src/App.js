import './App.css';
import { Container, ThemeProvider, Typography,createTheme } from '@mui/material';
import { Order } from './components/Order/Index';
function App() {
  const theme = createTheme();
  return (
    <div className="App">
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
        <Typography variant='h2' align='center' gutterBottom>
          APPLICATION
        </Typography>
        <Order />
        </ThemeProvider>
        
      </Container>
    </div>
  );
}

export default App;
