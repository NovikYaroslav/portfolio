import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';

export default function ProjectCard({ project }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isCollapsed) {
      const cardNameElement = document.getElementById(`${project.name}-name`);
      if (cardNameElement) {
        cardNameElement.scrollIntoView({ block: 'start' });
      }
    }
  }, [isCollapsed, project.name]);

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
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            id={`${project.name}-name`}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ justifySelf: 'center' }}>
              {' '}
              <Typography
                variant='h2'
                sx={{ margin: '0', fontSize: '30px', color: '#E38B29' }}
              >
                {project.name.toUpperCase()}
              </Typography>{' '}
              <Box sx={{ marginTop: '10px' }}>
                <Typography>
                  Frontend: {project.status.toUpperCase()}
                </Typography>
                <Typography>
                  Backend: {project.backend.toUpperCase()}
                </Typography>
              </Box>
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
            {project.github ? (
              <Link href={project.github.toUpperCase()} target='blank'>
                GITHUB
              </Link>
            ) : null}
          </Box>
          <Collapse in={isCollapsed}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginTop: '10px',
              }}
            >
              <Typography variant='h3' sx={{ fontSize: '28px' }}>
                Key techs:{' '}
              </Typography>
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

              <Typography variant='h3' sx={{ fontSize: '28px' }}>
                Secondary techs:{' '}
              </Typography>
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
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <Typography variant='h3' sx={{ fontSize: '28px' }}>
                {' '}
                Short task description:
              </Typography>
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
                height='1000'
                style={{ border: '3px solid #E38B29' }}
              />
            )}
          </Collapse>
          <Button
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {!isCollapsed ? 'Details' : 'Hide'}{' '}
            {!isCollapsed ? (
              <ExpandMoreIcon fontSize='small' />
            ) : (
              <ExpandLessIcon fontSize='small' />
            )}
          </Button>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'flex',
          border: '1px solid #E48F45',
          width: '50%',
          justifySelf: 'center',
        }}
      ></Box>{' '}
    </Box>
  );
}
