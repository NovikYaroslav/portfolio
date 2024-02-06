import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';

export default function Header() {
  const location = useLocation();
  const locationName = location.pathname.slice(1, location.pathname.length);
  const [barOpened, setBarOpened] = useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '0px',
        position: 'relative',
      }}
    >
      <AppBar position='static' sx={{ padding: '0' }}>
        <Toolbar
          sx={{
            backgroundColor: '#E38B29',
          }}
        >
          <p
            style={{
              textAlign: 'start',
              justifySelf: 'flex-start',
              fontSize: 28,
              border: '3px solid #272727',
              borderRadius: '15px',
              padding: 2,
              margin: 10,
              color: '#272727',
            }}
          >
            NY
          </p>
          <p
            style={{
              textAlign: 'start',
              justifySelf: 'flex-start',
              fontSize: 28,
              color: '#272727',
              margin: 0,
            }}
          >
            /
          </p>
          <Box sx={{ marginRight: 'auto' }}>
            <Button
              color='inherit'
              sx={{ color: '#272727', padding: '0 0 0 5' }}
            >
              {locationName}
            </Button>
          </Box>
          <Button
            variant='text'
            sx={{ marginRight: '17px' }}
            onClick={() => {
              setBarOpened(!barOpened);
            }}
          >
            <MenuIcon fontSize='large' sx={{ color: 'black' }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={barOpened} />
    </Box>
  );
}
