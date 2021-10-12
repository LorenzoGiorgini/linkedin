import { useState , useEffect } from "react";
import ExperiencePopUp from "./ExperiencePopUp"

const SingleExperience = (props) => {



  return props.setSelectedJob === true ? 
  
  (
    
  <>

    <ExperiencePopUp pressed={props.selectedJob} elementId={props.id} />
    <div>
      <h1>dsdasda</h1>
      <button onClick={props.setSelectedJob(true)}/>
    </div>
  
  </>

  ) 
  
  
  : (

  <>

    <div>
      <h1>dsdasda</h1>
      <button onClick={props.setSelectedJob(true)}/>
    </div>

  </>

  )

}

export default SingleExperience;