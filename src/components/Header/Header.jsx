import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, padding: '0px' }}>
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
              Projects
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
