import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import dasboard from '../../img/Dashboard.png';

import { projectsData } from '../../utils/data';

export default function WebPagePreview() {
  return (
    <Container sx={{ width: '100%' }}>
      {projectsData.map((project) => {
        return (
          <Card
            variant='outlined'
            sx={{ width: '100%', margin: '15px 20px 0px 5px' }}
            key={project.name}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                }}
              >
                <Box>
                  {' '}
                  <h2 style={{ margin: '0' }}>{project.name}</h2>{' '}
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
                    <LaptopMacIcon fontSize='medium' />
                    {<TabletMacIcon fontSize='medium' />}
                    <PhoneIphoneIcon fontSize='medium' />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <LaptopMacIcon fontSize='medium' />
                  </Box>
                )}
              </Box>
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  style={{ width: '100%', height: '700' }}
                />
              ) : (
                <iframe
                  title='Web Page Preview'
                  src={project.deploy}
                  width='100%'
                  height='700'
                  style={{ border: 'none' }}
                />
              )}

              <div>
                <div>
                  <div>
                    <h3>Deploy:</h3>
                    <a href={project.deploy} target='blank'>
                      {project.deploy}
                    </a>
                  </div>
                  <div>
                    <h3>GitHub repository:</h3>
                    <a href={project.github} target='blank'>
                      {project.github}
                    </a>
                  </div>
                </div>

                <h3>Key techs: </h3>
                <Stack direction='row' spacing={1}>
                  {project.stack.map((tech) => {
                    return <Chip key={tech} label={tech} />;
                  })}
                </Stack>
                <h3>Secondary techs: </h3>
                <Stack direction='row' spacing={1}>
                  {project.additionalTechs.map((addTech) => {
                    return (
                      <Chip key={addTech} variant='outlined' label={addTech} />
                    );
                  })}
                </Stack>
                <h3> Short task description:</h3>
                <p> {project.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
