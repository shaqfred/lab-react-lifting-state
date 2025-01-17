import {useState} from "react"
import Attendee from "./Attendee.jsx"



export default function Attendees({event, updateEventAttendance}) {
  
  const [showAttendees, setShowAttendees] = useState(false);
  
  const {people: attendees} = event

function toggleEventAttendees(){
  setShowAttendees(!showAttendees)
}

  return(
    <>
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
    {showAttendees ? (
       
      <div key={attendees.index} className="attendees" >
        {attendees.map((attendee, index)=> (
          
          <Attendee
          attendee={attendee}
          event={event}
          
          updateEventAttendance={updateEventAttendance}/>
         
        ))}
    
      </div>
      
    ): null}
      
    </>
  )
}
