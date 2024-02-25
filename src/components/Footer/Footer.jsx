import { useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, Box } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

export default function Footer() {
  const [emailVisible, setEmailVisible] = useState(false);
  const [phonelVisible, setPhoneVisible] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '0 24px',
        width: '100vw',
        height: '72px',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <p style={{ color: 'white', margin: 'auto' }}>
          &#169; {new Date().getFullYear()} Yaroslav Novik
        </p>
        <Box sx={{ display: 'flex', gap: '10px', position: 'relative' }}>
          <Typography
            sx={{
              alignItems: 'center',
              display: `${emailVisible ? null : 'none'}`,
              position: 'absolute',
              top: '-2px',
              left: '-190px',
            }}
          >
            kodzima89@gmail.com
          </Typography>
          <Email
            fontSize='small'
            onClick={() => setEmailVisible(!emailVisible)}
          />
          <Link to='https://t.me/iKodzima' target='_blank'>
            <TelegramIcon fontSize='small' sx={{ color: 'white' }} />
          </Link>
          <Link to='https://github.com/NovikYaroslav' target='_blank'>
            <GitHubIcon fontSize='small' sx={{ color: 'white' }} />
          </Link>
          <Link
            to='https://www.linkedin.com/in/yaroslav-novik/'
            target='_blank'
          >
            <LinkedInIcon fontSize='small' sx={{ color: 'white' }} />
          </Link>
          <Phone
            fontSize='small'
            onClick={() => setPhoneVisible(!phonelVisible)}
          />
          <Typography
            sx={{
              alignItems: 'center',

              position: 'absolute',
              top: '-2px',
              right: '-147px',
              display: `${phonelVisible ? null : 'none'}`,
            }}
          >
            +3434534534545
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
