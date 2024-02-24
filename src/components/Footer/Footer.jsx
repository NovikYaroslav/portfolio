import { GitHub } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import telegramIcon from '../../img/telegram-icon.png';
import gitHubIcon from '../../img/github-mark.png';

export default function Footer() {
  const location = useLocation();
  const currentLocation = location.pathname.slice(1, location.pathname.length);

  return (
    <Box
      sx={{
        ...(currentLocation !== 'projects' ? { position: 'fixed' } : null),
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        padding: '0 24px',
        width: '100vw',
        height: '72px',
        marginTop: '30px',
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
      }}
    >
      <p style={{ color: 'black', margin: 'auto' }}>
        &#169; {new Date().getFullYear()} Yaroslav Novik
      </p>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        <Link to='https://t.me/iKodzima' target='_blank'>
          <img src={telegramIcon} style={{ width: '35px', height: '35px' }} />
        </Link>
        <Link to='https://github.com/NovikYaroslav' target='_blank'>
          <img src={gitHubIcon} style={{ width: '35px', height: '35px' }} />
        </Link>
      </Box>
    </Box>
  );
}
