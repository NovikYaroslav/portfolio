import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import { Typography } from '@mui/material';
import '../../styles/buttons.css';

export default function Header() {
  const location = useLocation();
  const locationName = location.pathname.slice(1, location.pathname.length);
  const [barOpened, setBarOpened] = useState(false);

  useEffect(() => {
    setBarOpened(false);
  }, [locationName]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '0px',
        position: 'relative',
        width: '100vw',
      }}
    >
      <AppBar position='static' sx={{ padding: '0' }}>
        <Toolbar
          sx={{
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            style={{
              textAlign: 'start',
              justifySelf: 'flex-start',
              fontSize: 28,
              border: '3px solid white',
              borderRadius: '15px',
              padding: 2,
              margin: 10,
              color: 'white',
            }}
          >
            NY
          </Typography>
          <Typography
            style={{
              textAlign: 'start',
              justifySelf: 'flex-start',
              fontSize: 28,
              color: 'white',
              margin: 0,
            }}
          >
            /
          </Typography>
          <Box
            sx={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}
            // ref={menuRef}
          >
            <Typography
              style={{ color: 'white', margin: '0 0 0 5px', fontSize: 22 }}
            >
              {locationName.toUpperCase()}
            </Typography>
          </Box>
          <Button
            className='buttons'
            variant='text'
            sx={{
              display: 'flex',
              justifyContent: 'end',
              padding: '0',
              transform: barOpened ? 'backgroung: #FD5F00' : 'rotate(0deg)',
              transition: 'transform 0.6s ease-in-out',
              '&:hover': {
                backgroundColor: 'transparent', // Adjust the rotation angle as needed
                transition: 'none',
              },
            }}
            onClick={() => {
              setBarOpened(!barOpened);
            }}
          >
            <MenuIcon fontSize='large' sx={{ color: 'white' }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={barOpened} />
    </Box>
  );
}
