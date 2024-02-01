import ProjectCard from '../components/Project-card/Project-card';
// import { Container } from '@mui/material';
import { projectsData } from '../utils/data';

export default function MyProjects() {
  return (
    <div
      style={{
        width: '80%',
        margin: 'auto',
      }}
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
