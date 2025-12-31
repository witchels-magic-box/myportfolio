import "../index.css";

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
}

function Projectcomponent({
  projectTitle,
  description,
  codebase,
  livelink,
  window,
}: ProjectComponentProps) {
  function renderMedia() {
    if (!window) return null;

    if (window.type === "image") {
      return <img src={window.src} alt="" className="media" />;
    }

    if (window.type === "video") {
      return <video src={window.src} controls className="media" />;
    }

    return <p>{window.src}</p>;
  }

  return (
    <div className="flex flex-col md:flex-row mb-10">
      <div className="w-[15rem] m-auto mb-10 md:w-[30rem] md:ml-10">
        {renderMedia()}
      </div>

      <div className="mb-10 ml-10 mr-10 text-justify w-fit">
        <h2 className="jobtitle">{projectTitle}</h2>

        <ul>
          {description.map((item, index) => (
            <li className="w-50 mb-2" key={index}>
              {item}
            </li>
          ))}
        </ul>

        {codebase && (
          <a href={codebase} target="_blank" rel="noopener noreferrer">
            <button className="codeb mb-10">Codebase</button>
          </a>
        )}

        {livelink && (
          <a href={livelink} target="_blank" rel="noopener noreferrer">
            <button className="codeb mb-10">Live Link</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Projectcomponent;
