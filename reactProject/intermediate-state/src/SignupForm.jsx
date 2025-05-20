import {useState} from "react";

export default function SignupForm(){

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  function updateFirstName(evt){
    setFirstName(evt.target.value)
  }
  function updateLastName(evt){
    setLastName(evt.target.value)
  }
return(
  <div>
    <form>
   <label htmlFor="firstName">Enter First name: </label>
      <input type="text" placeholder="First Name"  value={firstName} onChange={updateFirstName} id='firstName'/>
      <div>

   <label htmlFor="lastName">Enter Last name: </label>
      <input type="text" placeholder="Last Name"  value={lastName} onChange={updateLastName} id='lastName'/>
     
      </div>
      <button>Submit</button>
    </form>

  </div>
)
}