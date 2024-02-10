import { Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/buttons.css';
import './Sidebar.css';
import { hover } from '@testing-library/user-event/dist/hover';

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname.slice(1, location.pathname.length);

  return (
    <Box className={`sidebar ${isOpen ? 'active' : 'hidden'}`}>
      <Button
        className='buttons'
        variant='text'
        sx={{
          color: '#272727',
          '&:disabled': {
            color: '#F3F8FF', // Adjust the rotation angle as needed
          },
        }}
        onClick={() => {
          navigate('/about');
        }}
        disabled={currentLocation === 'about'}
      >
        about
      </Button>
      <Button
        className='buttons'
        variant='text'
        sx={{ color: '#272727' }}
        onClick={() => {
          navigate('/projects');
        }}
        disabled={currentLocation === 'projects'}
      >
        projects
      </Button>
      <Button
        className='buttons'
        variant='text'
        sx={{ color: '#272727' }}
        onClick={() => {
          navigate('/contacts');
        }}
        disabled={currentLocation === 'contacts'}
      >
        contacts
      </Button>
    </Box>
  );
}
