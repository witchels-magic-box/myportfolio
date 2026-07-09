import "../index.css";
import { useState } from "react";

type MediaWindow =
  | {
      type: "image";
      src: string;
    }
  | {
      type: "video";
      src: string;
    }
  | {
      type: "text";
      src: string;
    };

interface ProjectComponentProps {
  projectTitle: string;
  description: string[];
  codebase?: string;
  livelink?: string;
  window?: MediaWindow;
  slideDirection?: "next" | "previous";
}

function Projectcomponent({
  projectTitle,
  description,
  codebase,
  livelink,
  window,
  slideDirection = "next",
}: ProjectComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function renderMedia() {
    if (!window) return null;

    if (window.type === "image") {
      return <img src={window.src} alt="" className="project-media" />;
    }

    if (window.type === "video") {
      return <video src={window.src} controls className="project-media" />;
    }

    return <p className="project-media-text">{window.src}</p>;
  }

  return (
    <article className={`project-slide project-slide-${slideDirection} ${isExpanded ? "project-slide-expanded" : ""}`}>
      <div className="project-slide-main">
        <h2 className="jobtitle">{projectTitle}</h2>
        {window && <div className="project-media-shell">{renderMedia()}</div>}

        <button
          className="project-learn-more"
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? "Show less" : "Learn more"}
        </button>
      </div>

      {isExpanded && (
        <div className="project-detail-panel">
          <ul className="project-description">
            {description.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>

          <div className="project-actions">
            {codebase && (
              <a href={codebase} target="_blank" rel="noopener noreferrer">
                <button className="codeb">Codebase</button>
              </a>
            )}

            {livelink && (
              <a href={livelink} target="_blank" rel="noopener noreferrer">
                <button className="codeb">Live Link</button>
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default Projectcomponent;
