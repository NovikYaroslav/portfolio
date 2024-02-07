import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  return (
    <Box className={`sidebar ${isOpen ? 'active' : 'hidden'}`}>
      <Button
        variant='text'
        sx={{ color: '#272727' }}
        onClick={() => {
          navigate('/about');
        }}
      >
        about
      </Button>
      <Button
        variant='text'
        sx={{ color: '#272727' }}
        onClick={() => {
          navigate('/projects');
        }}
      >
        projects
      </Button>
      <Button
        variant='text'
        sx={{ color: '#272727' }}
        onClick={() => {
          navigate('/contacts');
        }}
      >
        contacts
      </Button>
    </Box>
  );
}
