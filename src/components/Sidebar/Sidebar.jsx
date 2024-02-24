import { Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/buttons.css';
import './Sidebar.css';
import { portfolioRoutes } from '../../utils/data';

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname.slice(1, location.pathname.length);

  return (
    <Box className={`sidebar ${isOpen ? 'active' : 'hidden'}`}>
      {portfolioRoutes.map((route) => (
        <Button
          key={route}
          className='buttons'
          variant='text'
          sx={{
            color: '#272727',
            '&:disabled': {
              color: '#FD5F00',
            },
          }}
          onClick={() => {
            navigate(`/${route}`);
          }}
          disabled={currentLocation === route}
        >
          {route}
        </Button>
      ))}
    </Box>
  );
}
