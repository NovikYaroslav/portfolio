import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Typography } from '@mui/material';
import { projectsData } from '../../utils/data';

export default function ProjectCard() {
  return (
    <Container sx={{ width: '100%' }}>
      {projectsData.map((project) => {
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <Card
              variant='outlined'
              sx={{
                width: '100%',
                margin: '15px 20px 0px 5px',
                borderRadius: '15px',
                backgroundColor: '#272727',
              }}
              key={project.name}
            >
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ justifySelf: 'center' }}>
                    {' '}
                    <Typography
                      variant='h3'
                      sx={{ margin: '0', color: '#E38B29' }}
                    >
                      {project.name.toUpperCase()}
                    </Typography>{' '}
                    <Typography>
                      Status: {project.status.toUpperCase()}
                    </Typography>
                  </Box>
                  {project.responsive ? (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <LaptopMacIcon fontSize='large' />
                      {<TabletMacIcon fontSize='small' />}
                      <PhoneIphoneIcon fontSize='small' />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      <LaptopMacIcon fontSize='large' />
                    </Box>
                  )}
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Link href={project.deploy.toUpperCase()} target='blank'>
                    LIVE
                  </Link>

                  <Link href={project.github.toUpperCase()} target='blank'>
                    GITHUB
                  </Link>
                </Box>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <Typography variant='h4'>Key techs: </Typography>
                  <Stack
                    direction='row'
                    sx={{
                      flexWrap: 'wrap',
                      justifyContent: 'flex-start',
                      rowGap: 1,
                      columnGap: 1,
                    }}
                  >
                    {project.stack.map((tech) => {
                      return <Chip key={tech} label={tech} size='large' />;
                    })}
                  </Stack>

                  <Typography variant='h4'>Secondary techs: </Typography>
                  <Stack
                    direction='row'
                    sx={{
                      flexWrap: 'wrap',
                      justifyContent: 'flex-start',
                      rowGap: 1,
                      columnGap: 1,
                    }}
                  >
                    {project.additionalTechs.map((addTech) => {
                      return (
                        <Chip
                          key={addTech}
                          variant='outlined'
                          label={addTech}
                          size='large'
                          sx={{
                            margin: '0px',
                          }}
                        />
                      );
                    })}
                  </Stack>
                </Box>

                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
                >
                  <Typography variant='h4'> Short task description:</Typography>
                  <Typography variant='p'> {project.description}</Typography>
                </Box>

                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    style={{
                      width: '100%',
                      height: '700',
                      border: '2px solid #E38B29',
                    }}
                    alt='page-screenshot'
                  />
                ) : (
                  <iframe
                    title='Web Page Preview'
                    src={project.deploy}
                    width='100%'
                    height='700'
                    style={{ border: '3px solid #E38B29' }}
                  />
                )}
              </CardContent>
            </Card>
            <Box
              sx={{
                display: 'flex',
                border: '1px solid #E48F45',
                width: '50%',
                justifySelf: 'center',
              }}
            ></Box>
          </Box>
        );
      })}
    </Container>
  );
}
