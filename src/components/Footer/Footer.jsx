import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const currentLocation = location.pathname.slice(1, location.pathname.length);

  return (
    <Box
      sx={{
        ...(currentLocation === 'about' ? { position: 'fixed' } : null),
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        width: '100vw',
        height: '38px',
        marginTop: '30px',
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ color: 'black' }}>
        &#169; {new Date().getFullYear()} Yaroslav Novik
      </p>
    </Box>
  );
}
