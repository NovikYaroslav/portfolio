import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import MyProjects from '../../pages/My-Projects';
import AboutMe from '../../pages/About-me';
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
        <Route index element={<Navigate to='/about' replace />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
