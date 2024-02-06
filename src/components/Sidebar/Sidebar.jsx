import { Box, Button } from '@mui/material';
import './Sidebar.css';

export default function Sidebar({ isOpen }) {
  return (
    <Box className={`sidebar ${isOpen ? 'active' : 'hidden'}`}>
      <Button variant='text' sx={{ color: 'black' }}>
        about
      </Button>
      <Button variant='text' sx={{ color: 'black' }}>
        projects
      </Button>
      <Button variant='text' sx={{ color: 'black' }}>
        contacts
      </Button>
    </Box>
  );
}
