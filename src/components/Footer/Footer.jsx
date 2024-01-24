import * as React from 'react';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '30px',
        marginBottom: '30px',
        backgroundColor: '#FF8400',
        justifyContent: 'center',
      }}
    >
      <p style={{ color: 'black' }}>
        &#169; {new Date().getFullYear()} Yaroslav Novik
      </p>
    </Box>
  );
}
