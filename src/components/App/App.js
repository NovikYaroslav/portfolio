import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import MyProjects from '../../pages/My-Projects';
import Footer from '../Footer/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Navigate to='/projects' replace />} />
        <Route path='/projects' element={<MyProjects />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
