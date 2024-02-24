import { useEffect } from 'react';
import ProjectCard from '../components/Project-card/Project-card';
import { projectsData } from '../utils/data';
import { Box } from '@mui/material';

export default function MyProjects() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '30px 100px',
      }}
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Box>
  );
}
