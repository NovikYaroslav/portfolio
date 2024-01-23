import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import MyProjects from './pages/My-Projects';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
<ThemeProvider theme={darkTheme}>
       <CssBaseline/>
       <Header/>
       <MyProjects/>
    </ThemeProvider>


  );
}

export default App;
