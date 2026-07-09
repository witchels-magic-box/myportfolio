import '../index.css'
import projectdata from '../data/projectdata.ts'
import Projectcomponent from './Projectcomponent.tsx';
import { useState } from 'react';


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
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const activeProject = projectdata[activeIndex];

  function showPreviousProject() {
    setSlideDirection("previous");
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? projectdata.length - 1 : currentIndex - 1
    );
  }

  function showNextProject() {
    setSlideDirection("next");
    setActiveIndex((currentIndex) =>
      currentIndex === projectdata.length - 1 ? 0 : currentIndex + 1
    );
  }

  function showProject(index: number) {
    setSlideDirection(index > activeIndex ? "next" : "previous");
    setActiveIndex(index);
  }

  return (
    
    <div>
      <section id="projects" className="scroll-mt-24">
      
      <h1 className="ml-[5rem] title mb-10">Projects </h1>

      <div className="project-slider">
        <button
          className="project-slider-arrow"
          type="button"
          aria-label="Previous project"
          onClick={showPreviousProject}
        >
          &lsaquo;
        </button>

        <Projectcomponent
          key={activeProject.projectTitle}
          projectTitle={activeProject.projectTitle}
          description={activeProject.description}
          codebase={activeProject.codebase}
          window={activeProject.window}
          livelink={activeProject.livelink}
          slideDirection={slideDirection}
        />

        <button
          className="project-slider-arrow"
          type="button"
          aria-label="Next project"
          onClick={showNextProject}
        >
          &rsaquo;
        </button>
      </div>

      <div className="project-slider-dots" aria-label="Project slides">
        {projectdata.map((project, index) => (
          <button
            key={project.projectTitle}
            className={`project-slider-dot ${index === activeIndex ? "project-slider-dot-active" : ""}`}
            type="button"
            aria-label={`Show project ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => showProject(index)}
          />
        ))}
      </div>

    
      </section>
    </div>
    
  )
}

export default Projects;
