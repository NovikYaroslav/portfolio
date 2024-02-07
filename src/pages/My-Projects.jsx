import { useEffect } from 'react';
import ProjectCard from '../components/Project-card/Project-card';
import { projectsData } from '../utils/data';

export default function MyProjects() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
