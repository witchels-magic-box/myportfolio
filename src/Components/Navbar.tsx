import '../index.css'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'

function Navbar() {
  return (
    <div className="flex justify-between navbar">
        
    <div className="hidden md:flex">
        <h2 className="inline px-4 py-4 handwriting text-sm">Madhurjo Aishy</h2>
    
      <a href="#home" ><button className='navbtn'>  Home </button></a>
      <a href="#about" ><button className='navbtn'>  About </button></a>
      <a href="#experience" ><button className='navbtn'>  Experience </button></a>
      <a href="#projects" ><button className='navbtn'>  Projects </button></a>
        

    </div>

    <div className="flex ml-auto mt-2 sm:ml-auto md:ml-0 ">
      <a href="mailto:mynameisaishy@gmail.com" ><img className="iconset" src={email} alt=""/></a>
      <a href="https://www.linkedin.com/in/madhurjodasaishy/" target='blankspace'><img className="iconset" src={linkedin} alt=""/></a>
      <a href="https://github.com/witchels-magic-box" target='blankspace'><img className="iconset" src={git} alt=""/></a>

      
      
  
      
    </div>
    </div>
  )
}

export default Navbar;