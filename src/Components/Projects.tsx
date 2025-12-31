import '../index.css'
import projectdata from '../data/projectdata.ts'
import Projectcomponents from './Projectcomponent.tsx'

function Projects() {

  function returnprops(project){
    return (
      <Projectcomponents key={project.projectTitle}
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