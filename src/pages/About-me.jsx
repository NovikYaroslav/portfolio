import Box from '@mui/system/Box';
import { Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <>
      <Box component='section' sx={{ p: 1, border: '1px dashed grey' }}>
        <Typography sx={{ textAlign: 'left' }}>Hi, my name is</Typography>

        <Typography sx={{ textAlign: 'left', fontSize: 48 }}>
          Yaroslav Novik
        </Typography>
      </Box>

      <Box component='section' sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography sx={{ textAlign: 'left' }}></Typography>
      </Box>
    </>
  );
}
