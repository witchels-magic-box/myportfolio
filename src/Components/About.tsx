import '../index.css'
import myphoto from "../assets/pp.jpeg"

function About() {
  return (
    <section id="about" className="scroll-mt-20">
    <div className="flex flex-col  m-auto mt-20 mb-10">
      <h1 className='ml-[5rem] title'>About Me</h1>
      
      <div className="flex m-auto">
       
       <div className='flex flex-col'>
        
        <p className="w-50 m-auto  p-5 text-lg text-justify md:mr-20 md:w-[35rem]">Hi, I’m Madhurjo Das Aishy.
I’m a software developer and a researcher. I enjoy working across the stack—from designing intuitive front-end interfaces to architecting efficient back-end systems, I love doing research on applied ML and software architecture.
I have hands-on experience with </p>
<div className="flex flex-row">
<ul className="p-5 text-lg text-justify">
<li>JavaScript</li>
<li>TypeScript</li>
<li>React.js</li></ul>
<ul className="p-5 text-lg text-justify">
<li>Python</li>
<li>PostgreSQL</li>
</ul>
</div>

      <p className="w-50 m-auto  p-5 text-lg text-justify md:mr-20 md:w-[35rem]">On the research side, I’m particularly interested in image processing, geospatial data analysis (GIS), and machine learning for real-world decision-making. My work involves handling spatial imagery, extracting meaningful patterns from visual data and designing software systems to convert the research findings into meaningful features.
Outside of work, I’m passionate about classical dance. In my free time I read novels, listen to audio books and try out new recipes in the kitchen. 
</p>
</div>
      <img src={myphoto} className="hidden md:block imageplc"  />

      </div>
      
    </div>
    </section>
  )
}

export default About;