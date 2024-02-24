import { Box, Container, Typography } from '@mui/material';
import { contacts } from '../utils/data';

export default function Contacts() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
        margin: '50px auto',
      }}
    >
      {contacts.map((contact) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Typography sx={{ textAlign: 'center', fontSize: '33px' }}>
            {contact.type} :
          </Typography>
          <Typography sx={{ fontSize: '60px' }}> {contact.value}</Typography>
        </Box>
      ))}
    </Container>
  );
}
