
import './index.css'
import Navbar from './Components/Navbar' 
import Header from './Components/Header'
import About from './Components/About'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  return (
    <div className="app-shell">
      <div className="code-backdrop" aria-hidden="true">
        <pre className="backdrop-code-block python-code">{`shapefile = layers.get("plots")
if shapefile is not None:
    plots = gpd.read_file(shapefile)
    overlay = imagery.rio.clip(plots.geometry)
else:
    overlay = imagery`}</pre>

        <pre className="backdrop-code-block react-code">{`function ProjectCard() {
  return <article aria-label="featured project" />
}`}</pre>

        <svg
          className="backdrop-react-logo"
          viewBox="-11.5 -10.23174 23 20.46348"
          role="img"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>

        <div className="backdrop-bracket bracket-left">{'{'}</div>
        <div className="backdrop-bracket bracket-right">{'}'}</div>
        <div className="backdrop-code-symbol symbol-mark">&lt;/&gt;</div>
        <svg className="backdrop-laptop" viewBox="0 0 160 110" role="img">
          <rect x="30" y="14" width="100" height="68" rx="6" />
          <path d="M18 92h124l-10 10H28z" />
          <path d="M66 92h28" />
          <path d="M52 34h34" />
          <path d="M52 48h52" />
          <path d="M52 62h26" />
        </svg>

        <svg className="backdrop-map" viewBox="0 0 120 120" role="img">
          <path d="M22 34l24-10 28 10 24-10v62L74 96 46 86 22 96z" />
          <path d="M46 24v62" />
          <path d="M74 34v62" />
        </svg>

        <svg className="backdrop-database" viewBox="0 0 120 120" role="img">
          <ellipse cx="60" cy="28" rx="34" ry="14" />
          <path d="M26 28v44c0 8 15 14 34 14s34-6 34-14V28" />
          <path d="M26 50c0 8 15 14 34 14s34-6 34-14" />
          <path d="M26 72c0 8 15 14 34 14s34-6 34-14" />
        </svg>

        <svg className="backdrop-neural" viewBox="0 0 150 120" role="img">
          <circle cx="24" cy="30" r="7" />
          <circle cx="24" cy="60" r="7" />
          <circle cx="24" cy="90" r="7" />
          <circle cx="75" cy="24" r="7" />
          <circle cx="75" cy="60" r="7" />
          <circle cx="75" cy="96" r="7" />
          <circle cx="126" cy="42" r="7" />
          <circle cx="126" cy="78" r="7" />
          <path d="M31 30l37-6" />
          <path d="M31 30l37 30" />
          <path d="M31 60l37-36" />
          <path d="M31 60h37" />
          <path d="M31 60l37 36" />
          <path d="M31 90l37-30" />
          <path d="M31 90l37 6" />
          <path d="M82 24l37 18" />
          <path d="M82 60l37-18" />
          <path d="M82 60l37 18" />
          <path d="M82 96l37-18" />
        </svg>

        <div className="backdrop-chip chip-api">API</div>
      </div>

      <div className="relative z-10">
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
