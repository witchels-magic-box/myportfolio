import { stringify } from 'postcss';
import '../index.css'
import Componentexperience from './Componentexperience'
import { useState } from 'react';


function Experience() {

   const [selected, setSelected] = useState(false);

   const [selectStates, setSelectStates] = useState([true, false, false]);




  const desc: Record<number, object> = {
    0: {jobtitle: "Graduate Research Assistant",
      date: "January 2025 - Present",
      experiencedetails: [ "Leading full-stack development and UI design for a UAV-based precision-agriculture platform entitled Agskysight. Built core frontend modules and analysis dashboards using React (TypeScript) and CSS, enabling interactive exploration of UAV imagery and plot-level traits. ",
        "Developed Python scripts for plant-height calculation and vegetation-index computation and vegetation pixel extraction, integrating them with FastAPI endpoints to support backend automation.",
        "Designed and developed a centralized application dashboard with a responsive grid layout using React (TypeScript), Tailwind CSS, and Figma.",
        "Advancing research on UAV-based phenotyping pipelines by developing efficient image-processing workflows, trait-extraction methods, and time-series visualization tools that provide breeders with actionable insights."
      ]},
    1:{jobtitle: "System Facing Track Intern",
      date: "January 2024 - December 2024",
      experiencedetails: [
        "Provided assistance in the installation of the IBM TS4500 tape library which will contribute to data storage and backup solutions for research projects. Assisted in installation of Bright Cluster Management Software into the headnode of a development cluster. Assisted in installing GPUs in compute nodes of the dev cluster."
        ,
        "Installed Apptainer, a containerized solution for application deployment and management specifically for high performance computing, learned about it and implementing it to deploy and manage applications"
        ,
        "Successfully installed Open OnDemand in the development cluster, learned about the OOD architecture and its functionalities, learned to set up an authentication system for it, configured OnDemand Dex for LDAP, configured cluster and developed scripts for automatically updating images. "
      ]

    },
    2:{jobtitle: "TestOps Engineer",
      date: "March 2022 - February 2023",
      experiencedetails: [
        "Led the testing process for a training management system using JavaScript, Python, Postman, Grafana k6, PyTest, and Selenium.",
        "Applied Test-Driven Development (TDD) practices in building and validating backend services. Built PyTest automation scripts for AWS Lambda response validation.",
        "Introduced Selenium automation to the company and developed reusable test scripts, which reduced repetitive manual testing efforts and advanced regression test cycle speed by 75% fast performance.",
        "Contributed to frontend development using Vue.js, led software testing and prepared CI/CD pipelines for a healthcare application."
      ]

    }
  }

  const [btn, setBtn] = useState<Number>(0)

  function setbutton(p){
    setBtn(p)
    if (p==0)
    setSelectStates([true,false,false])
  else if (p==1)
    setSelectStates([false,true,false])
  else
    setSelectStates([false,false,true])
    
  }
  function setselection(p){
    
    if (selectStates[p]==true)
     {
      
      return ("experiencebtnm")}
    else
      return("experiencebtn")
  }



  return (
    <section id="experience" className="scroll-mt-24">
    <div >
      <h1 className='ml-[5rem] title'>Experience</h1>
    <div className="sm:ml-[50px] md:flex" >
      
      <div className=" md:flex flex-col ml-[20%] mt-5"> <button onClick={()=> setbutton(0)} className={setselection(0)}>  NDSU Agricultural Data Analytics </button>
      <button onClick={() => setbutton(1)} className={setselection(1)}> CCAST </button>
      <button onClick={() => setbutton(2)} className={setselection(2)}> InNeed </button>
      </div>

      <div className="sm: ml-[10px] md:ml-[100px]"> 
        <p>
          <Componentexperience props={desc[btn]} />
        </p>
      </div>
      
    </div>
    </div>
    </section>
  )
}

export default Experience;