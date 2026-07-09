
import nexus from "../assets/nexus.mp4"
import agsky from "../assets/agssv.mp4"
import xss from "../assets/sxx.png"
import witchels from "../assets/witchels.png"
import grub from "../assets/ricepest.mp4"
import type { ProjectComponentProps } from "../Components/Projects.tsx";

type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "text"; src: string };

export type projectData = {
  projectTitle: string;
  description: string[];
  livelink?:string;
  codebase?: string;   // optional
  window?: Media;     // optional (only if you really need it)
};

const projectData: ProjectComponentProps[] = [

    {
    projectTitle:
      "Nexus Hub — Central Application Hub for Ag-Data Analytics",
    description: [
      "Designed and developed Nexus Hub, a centralized application dashboard that serves as a single access point for all internal tools developed by the Ag-Data Analytics team. The platform features a responsive, grid-based layout optimized for usability across devices.",
      "Led the end-to-end frontend workflow—from UX design in Figma to implementation in React (JavaScript)—translating wireframes into a fully functional web application. Implemented component-based UI logic, state handling, and layout responsiveness using Tailwind CSS alongside custom styling. Deployed in production, the application streamlines access to multiple analytics tools through a unified and intuitive interface.",
    ],
    
    window: {
    type: "video",
    src: nexus,
  }
  },
  {
    projectTitle:
      "AgSkySight - UAV Image Data Analysis Platform for High-Throughput Phenotyping",
    description: [
      "Working as a Full-Stack Developer and Research Analyst on AgSkySight, a UAV-based image analysis platform designed to support high-throughput crop phenotyping. I designed and developed the frontend UI and interaction workflows using React (TypeScript) and contributed to core backend functionality using Python, FastAPI, and Docker."
,"Implemented key analytical modules, including vegetation index computation and plant height estimation from aerial imagery. In parallel, I am conducting applied research on efficient soil and non-canopy pixel masking techniques, integrating algorithmic and data-driven approaches to improve analysis accuracy and robustness."
    ],
   

    window: {
    type: "video",
    src: agsky,
  }
  },

  {
    projectTitle:
      "Dynamic Server-Side XSS Detection in PHP Applications with AI-Assisted Analysis",
    description: [
      "Developed a Python-based dynamic vulnerability detection system for identifying stored and HTML attribute–based Cross-Site Scripting (XSS) vulnerabilities in PHP web applications using runtime browser automation.",
      "Integrated an AI-assisted reporting pipeline using Google Gemini to generate structured, human-readable security reports focused on realistic attack simulation and actionable insights.",
    ],
    codebase:
      "https://github.com/witchels-magic-box/AI-Integrated-dynamic-XSS-detector",
    
    window: {
    type: "image",
    src: xss
  }},

  {
    projectTitle: "Witchel’s Cooking Corner",
    description: [
      "Developed in 2018 as an early personal project to strengthen foundational skills in HTML, CSS, and JavaScript, focusing on layout structuring, styling, and basic client-side interactivity.",
    ],
    codebase:
      "https://github.com/witchels-magic-box/witchelscookingcorner.github.io",
    livelink:"https://witchels-magic-box.github.io/witchels%20cooking%20corner/my%20recipies.html",

    window: {
    type: "image",
    src: witchels
  }
  },

  {
    projectTitle: "Fine-Tuned YOLOv8 for Rice Worm Detection",
    description: [
      "Fine-tuned YOLOv8 Nano for real-time rice worm detection using a curated dataset of 818 images. Applied systematic hyperparameter optimization, achieving a 5.73% accuracy improvement with mAP50 = 0.911 and mAP50–95 = 0.811.",
    ],
    codebase:
      "https://github.com/witchels-magic-box/FineTuned-YOLOv8-for-rice-worm-detection",
    

    window: {
    type: "video",
    src: grub
  }
  }
];

export default projectData;
