import ProjectCard from '../components/Project-card/Project-card';
import { projectsData } from '../utils/data';

export default function MyProjects() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 100px',
      }}
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
