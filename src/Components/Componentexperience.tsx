
import '../index.css'
import { useState } from 'react';

function Componentexperience({props}) {




  

  return (
    <div className="mb-[5rem] expitem">
      <h2 className="jobtitle">{props.jobtitle}</h2>
      <p className="datestyle">{props.date}</p>
      <ul>
        {props.experiencedetails.map((list) => (<li className="w-50 mb-2" key={list}>{list}</li>))}
        </ul>
      
        
    </div>
  )
}

export default Componentexperience;