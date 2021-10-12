import { useState , useEffect } from "react";
import ExperiencePopUp from "./ExperiencePopUp"
import { useParams } from "react-router";

const SingleExperience = (props) => {

  const params = useParams();



  

  const [pressed, setPressed] = useState(false)

  return (
     <>

    <div>
      <h1>dsdasda</h1>
      {params.id === "me" &&<button onClick={ () => setPressed(true)}/>}
    </div>
    {pressed === true && <ExperiencePopUp pressed={pressed} setPressed={setPressed} elementId={props.id} />}
  
  </>
  )

}

export default SingleExperience;