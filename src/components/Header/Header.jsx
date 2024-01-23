import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'center', gap: 5 }}>
          <Button color='inherit'>About Me</Button>
          <Button color='inherit' disabled={true}>
            My projects
          </Button>
          <Button color='inherit'>Contacts</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
