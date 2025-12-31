import '../index.css'
import projectdata from '../data/projectdata.ts'
import Projectcomponent from './Projectcomponent.tsx';


export type MediaWindow =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "text"; src: string };

export interface ProjectComponentProps {
  projectTitle: string;
  description: string[];
  codebase?: string;
  livelink?: string;
  window?: MediaWindow;
}

function Projects() {

  function returnprops(project: ProjectComponentProps){
    return (
      <Projectcomponent key={project.projectTitle}
      projectTitle={project.projectTitle}
      description={project.description}
      codebase={project.codebase}
      window={project.window}
      livelink={project.livelink} />
    );
  }
  return (
    
    <div>
      <section id="projects" className="scroll-mt-24">
      
      <h1 className="ml-[5rem] title mb-10">Projects </h1>

      {projectdata.map(returnprops)}


    
      </section>
    </div>
    
  )
}

export default Projects;